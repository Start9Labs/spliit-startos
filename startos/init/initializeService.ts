import { utils } from '@start9labs/start-sdk'
import { sdk } from '../sdk'
import { storeJson } from '../fileModels/store.json'

export const initializeService = sdk.setupOnInit(async (effects, kind) => {
  if (kind === 'install') {
    // Generate PostgreSQL password on fresh install
    const postgresPassword = utils.getDefaultString({
      charset: 'a-z,A-Z,0-9',
      len: 22,
    })

    await storeJson.merge(effects, { postgresPassword })
  } else {
    await storeJson.merge(effects, {})
  }
})
