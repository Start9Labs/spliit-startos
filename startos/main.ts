import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort, postgresPort, postgresUser, postgresDb } from './utils'
import { storeJson } from './fileModels/store.json'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting Spliit!'))

  // Read stored configuration
  const store = await storeJson.read((s) => s).const(effects)

  // Create PostgreSQL subcontainer
  const postgresSub = await sdk.SubContainer.of(
    effects,
    { imageId: 'postgres' },
    sdk.Mounts.of().mountVolume({
      volumeId: 'main',
      subpath: 'postgres',
      mountpoint: '/var/lib/postgresql/data',
      readonly: false,
    }),
    'postgres-sub',
  )

  // Create Spliit app subcontainer
  const appSub = await sdk.SubContainer.of(
    effects,
    { imageId: 'main' },
    sdk.Mounts.of(),
    'spliit-sub',
  )

  // Database connection string - use localhost since daemons share the network
  const databaseUrl = `postgresql://${postgresUser}:${store?.postgresPassword ?? ''}@127.0.0.1:${postgresPort}/${postgresDb}`

  return sdk.Daemons.of(effects)
    .addDaemon('postgres', {
      subcontainer: postgresSub,
      exec: {
        command: sdk.useEntrypoint(),
        env: {
          POSTGRES_USER: postgresUser,
          POSTGRES_PASSWORD: store?.postgresPassword ?? '',
          POSTGRES_DB: postgresDb,
          PGDATA: '/var/lib/postgresql/data/pgdata',
        },
      },
      ready: {
        display: i18n('Database'),
        fn: async () => {
          const { exitCode } = await postgresSub.exec([
            'pg_isready',
            '-U',
            postgresUser,
            '-d',
            postgresDb,
            '-h',
            'localhost',
          ])

          if (exitCode !== 0) {
            return {
              result: 'loading',
              message: i18n('Waiting for PostgreSQL to be ready'),
            }
          }
          return {
            result: 'success',
            message: i18n('PostgreSQL is ready'),
          }
        },
      },
      requires: [],
    })
    .addDaemon('spliit', {
      subcontainer: appSub,
      exec: {
        command: sdk.useEntrypoint(),
        env: {
          POSTGRES_PRISMA_URL: databaseUrl,
          POSTGRES_URL_NON_POOLING: databaseUrl,
          NEXT_TELEMETRY_DISABLED: '1',
        },
      },
      ready: {
        display: i18n('Web Interface'),
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, uiPort, {
            successMessage: i18n('Spliit is ready'),
            errorMessage: i18n('Spliit is not ready'),
          }),
      },
      requires: ['postgres'],
    })
})
