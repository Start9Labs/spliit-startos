import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_1_19_1_0 = VersionInfo.of({
  version: '1.19.1:0',
  releaseNotes: {
    en_US: 'Updates Spliit to 1.19.1.',
    es_ES: 'Actualiza Spliit a la versión 1.19.1.',
    de_DE: 'Aktualisiert Spliit auf 1.19.1.',
    pl_PL: 'Aktualizuje Spliit do wersji 1.19.1.',
    fr_FR: 'Met à jour Spliit vers la version 1.19.1.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
