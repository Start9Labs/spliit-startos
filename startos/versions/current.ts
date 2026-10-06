import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.29.0:1',
  releaseNotes: {
    en_US: `Updated Spliit to 1.29.0 with refreshed interface translations. Full release notes: https://github.com/spliit-app/spliit/releases/tag/1.29.0

StartOS package improvements.`,
    es_ES: `Spliit actualizado a 1.29.0 con traducciones de la interfaz actualizadas. Notas completas de la versión: https://github.com/spliit-app/spliit/releases/tag/1.29.0

Mejoras en el paquete de StartOS.`,
    de_DE: `Spliit auf 1.29.0 mit aktualisierten Übersetzungen der Benutzeroberfläche aktualisiert. Vollständige Versionshinweise: https://github.com/spliit-app/spliit/releases/tag/1.29.0

Verbesserungen am StartOS-Paket.`,
    pl_PL: `Zaktualizowano Spliit do 1.29.0 z odświeżonymi tłumaczeniami interfejsu. Pełne informacje o wydaniu: https://github.com/spliit-app/spliit/releases/tag/1.29.0

Ulepszenia pakietu StartOS.`,
    fr_FR: `Spliit mis à jour vers 1.29.0 avec des traductions de l’interface actualisées. Notes de version complètes : https://github.com/spliit-app/spliit/releases/tag/1.29.0

Améliorations du paquet StartOS.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
