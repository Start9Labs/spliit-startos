import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.30.0:0',
  releaseNotes: {
    en_US: `Updated Spliit to 1.30.0 and start-sdk to 3.0.4.

- Expense search now includes notes as well as titles.
- New groups appear in Recent groups immediately after creation.
- Refreshed interface translations.

The database schema is updated automatically on first start. Group deletion remains disabled in this package.

Full release notes: https://github.com/spliit-app/spliit/releases/tag/1.30.0`,
    es_ES: `Spliit actualizado a 1.30.0 y start-sdk a 3.0.4.

- La búsqueda de gastos ahora incluye las notas además de los títulos.
- Los grupos nuevos aparecen en Grupos recientes inmediatamente después de crearlos.
- Traducciones de la interfaz actualizadas.

El esquema de la base de datos se actualiza automáticamente en el primer arranque. La eliminación de grupos sigue desactivada en este paquete.

Notas completas de la versión: https://github.com/spliit-app/spliit/releases/tag/1.30.0`,
    de_DE: `Spliit auf 1.30.0 und start-sdk auf 3.0.4 aktualisiert.

- Die Ausgabensuche berücksichtigt jetzt neben Titeln auch Notizen.
- Neue Gruppen erscheinen unmittelbar nach der Erstellung unter den zuletzt verwendeten Gruppen.
- Übersetzungen der Benutzeroberfläche aktualisiert.

Das Datenbankschema wird beim ersten Start automatisch aktualisiert. Das Löschen von Gruppen bleibt in diesem Paket deaktiviert.

Vollständige Versionshinweise: https://github.com/spliit-app/spliit/releases/tag/1.30.0`,
    pl_PL: `Zaktualizowano Spliit do 1.30.0 i start-sdk do 3.0.4.

- Wyszukiwanie wydatków obejmuje teraz notatki oprócz tytułów.
- Nowe grupy pojawiają się w ostatnich grupach od razu po utworzeniu.
- Odświeżono tłumaczenia interfejsu.

Schemat bazy danych jest aktualizowany automatycznie przy pierwszym uruchomieniu. Usuwanie grup pozostaje wyłączone w tym pakiecie.

Pełne informacje o wydaniu: https://github.com/spliit-app/spliit/releases/tag/1.30.0`,
    fr_FR: `Spliit mis à jour vers 1.30.0 et start-sdk vers 3.0.4.

- La recherche de dépenses inclut désormais les notes en plus des titres.
- Les nouveaux groupes apparaissent dans les groupes récents dès leur création.
- Traductions de l’interface actualisées.

Le schéma de la base de données est mis à jour automatiquement au premier démarrage. La suppression de groupes reste désactivée dans ce paquet.

Notes de version complètes : https://github.com/spliit-app/spliit/releases/tag/1.30.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
