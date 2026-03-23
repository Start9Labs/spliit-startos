import { sdk } from './sdk'
import { postgresDb, postgresUser } from './utils'
import { storeJson } from './fileModels/store.json'

export const { createBackup, restoreInit } = sdk.setupBackups(async () =>
  sdk.Backups.withPgDump({
    imageId: 'postgres',
    dbVolume: 'db',
    pgdata: '/var/lib/postgresql/data',
    database: postgresDb,
    user: postgresUser,
    password: async () => {
      const pw = await storeJson.read((s) => s.postgresPassword).once()
      if (!pw) throw new Error('No postgres password found in store.json')
      return pw
    },
  }).addVolume('startos'),
)
