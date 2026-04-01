import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_1_19_1_2 = VersionInfo.of({
  version: '1.19.1:2',
  releaseNotes: {
    en_US: 'Separate DB volume, dump-based backups',
    es_ES: 'Volumen de base de datos separado, copias de seguridad basadas en volcados',
    de_DE: 'Separates DB-Volume, Dump-basierte Backups',
    pl_PL: 'Oddzielny wolumen bazy danych, kopie zapasowe oparte na zrzutach',
    fr_FR: 'Volume DB séparé, sauvegardes basées sur les dumps',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
