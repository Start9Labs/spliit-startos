import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.28.0:0',
  releaseNotes: {
    en_US: `Updated Spliit to 1.28.0. Tabs now show a pointer cursor; upstream also refreshed dependencies and build tools.

Full changelog: https://github.com/spliit-app/spliit/compare/1.26.0...1.28.0`,
    es_ES: `Spliit actualizado a 1.28.0. Las pestañas ahora muestran un cursor de puntero; también se actualizaron las dependencias y las herramientas de compilación.

Registro completo de cambios: https://github.com/spliit-app/spliit/compare/1.26.0...1.28.0`,
    de_DE: `Spliit auf 1.28.0 aktualisiert. Registerkarten zeigen jetzt einen Zeiger-Cursor; außerdem wurden Abhängigkeiten und Build-Werkzeuge aktualisiert.

Vollständiges Änderungsprotokoll: https://github.com/spliit-app/spliit/compare/1.26.0...1.28.0`,
    pl_PL: `Zaktualizowano Spliit do 1.28.0. Karty pokazują teraz kursor wskazujący; zaktualizowano też zależności i narzędzia kompilacji.

Pełna lista zmian: https://github.com/spliit-app/spliit/compare/1.26.0...1.28.0`,
    fr_FR: `Spliit mis à jour vers 1.28.0. Les onglets affichent désormais un curseur de pointeur ; les dépendances et les outils de compilation ont également été mis à jour.

Journal complet des modifications : https://github.com/spliit-app/spliit/compare/1.26.0...1.28.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
