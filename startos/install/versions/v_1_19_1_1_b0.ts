import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_1_19_1_1_b0 = VersionInfo.of({
  version: '1.19.1:1-beta.0',
  releaseNotes: {
    en_US: 'Initial release for StartOS',
    es_ES: 'Versión inicial para StartOS',
    de_DE: 'Erstveröffentlichung für StartOS',
    pl_PL: 'Pierwsze wydanie dla StartOS',
    fr_FR: 'Version initiale pour StartOS',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
