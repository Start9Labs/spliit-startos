import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.19.1:0',
  releaseNotes: {
    en_US: 'Bumps Spliit → 1.19.1.',
    es_ES: 'Actualiza Spliit → 1.19.1.',
    de_DE: 'Aktualisiert Spliit → 1.19.1.',
    pl_PL: 'Aktualizuje Spliit → 1.19.1.',
    fr_FR: 'Met à jour Spliit → 1.19.1.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
