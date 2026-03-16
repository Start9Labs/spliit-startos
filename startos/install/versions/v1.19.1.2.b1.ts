import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_1_19_1_2_b1 = VersionInfo.of({
  version: '1.19.1:2-beta.1',
  releaseNotes: {
    en_US: 'Update to StartOS SDK beta.60',
    es_ES: 'Actualización a StartOS SDK beta.60',
    de_DE: 'Update auf StartOS SDK beta.60',
    pl_PL: 'Aktualizacja do StartOS SDK beta.60',
    fr_FR: 'Mise à jour vers StartOS SDK beta.60',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
