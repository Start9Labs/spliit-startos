import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_1_19_0_1 = VersionInfo.of({
  version: '1.19.0:1',
  releaseNotes: {
    en_US: 'Switch to upstream prebuilt image',
    es_ES: 'Cambio a la imagen precompilada del upstream',
    de_DE: 'Wechsel zum vorgefertigten Upstream-Image',
    pl_PL: 'Przełączenie na gotowy obraz z upstreamu',
    fr_FR: "Passage à l'image précompilée de l'upstream",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
