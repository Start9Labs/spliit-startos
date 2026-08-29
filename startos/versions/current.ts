import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.23.1:0',
  releaseNotes: {
    en_US: `Updated Spliit to 1.23.1.

- See your balance across every group at once, and read the group statistics over a date range, with a drill-down into the expenses behind each figure.
- Settle up in a currency other than the group's own.
- Spliit can now be installed as an app, keeps its assets available offline, and prompts you when a new version is ready.
- Group tabs show icons on mobile, and page titles follow the language you picked.
- Fixed validation errors reported on a whole list of fields never reaching the screen.
- The upstream image is less than half its former size, so this and later updates download faster.

The database schema is migrated automatically on first start; no action is needed.

Full notes: https://github.com/spliit-app/spliit/releases/tag/1.23.0 and https://github.com/spliit-app/spliit/releases/tag/1.23.1`,
    es_ES: `Spliit actualizado a 1.23.1.

- Consulta tu saldo en todos los grupos a la vez y lee las estadísticas del grupo en un intervalo de fechas, con detalle de los gastos que hay detrás de cada cifra.
- Salda cuentas en una divisa distinta a la del grupo.
- Spliit ya se puede instalar como aplicación, mantiene sus recursos disponibles sin conexión y avisa cuando hay una versión nueva.
- Las pestañas del grupo muestran iconos en el móvil y los títulos de página siguen el idioma elegido.
- Corregidos los errores de validación de una lista completa de campos, que nunca llegaban a mostrarse.
- La imagen original ocupa menos de la mitad que antes, así que esta y las siguientes actualizaciones se descargan más rápido.

El esquema de la base de datos se migra automáticamente en el primer arranque; no hay que hacer nada.

Notas completas: https://github.com/spliit-app/spliit/releases/tag/1.23.0 y https://github.com/spliit-app/spliit/releases/tag/1.23.1`,
    de_DE: `Spliit auf 1.23.1 aktualisiert.

- Saldo über alle Gruppen hinweg auf einen Blick, dazu Gruppenstatistiken über einen Zeitraum mit Aufschlüsselung der Ausgaben hinter jedem Wert.
- Ausgleich in einer anderen Währung als der Gruppenwährung.
- Spliit lässt sich jetzt als App installieren, hält seine Inhalte offline bereit und weist auf eine neue Version hin.
- Gruppen-Tabs zeigen auf dem Handy Symbole, und Seitentitel folgen der gewählten Sprache.
- Behoben: Validierungsfehler zu einer ganzen Feldliste erschienen nie auf dem Bildschirm.
- Das Upstream-Image ist weniger als halb so groß wie zuvor, dieses und künftige Updates laden also schneller.

Das Datenbankschema wird beim ersten Start automatisch migriert; es ist nichts zu tun.

Vollständige Hinweise: https://github.com/spliit-app/spliit/releases/tag/1.23.0 und https://github.com/spliit-app/spliit/releases/tag/1.23.1`,
    pl_PL: `Zaktualizowano Spliit do 1.23.1.

- Podgląd salda ze wszystkich grup naraz oraz statystyki grupy w wybranym zakresie dat, ze szczegółami wydatków składających się na każdą wartość.
- Rozliczenie w walucie innej niż waluta grupy.
- Spliit można teraz zainstalować jako aplikację, działa offline i informuje o nowej wersji.
- Karty grupy pokazują ikony na telefonie, a tytuły stron są zgodne z wybranym językiem.
- Naprawiono błędy walidacji dotyczące całej listy pól, które nigdy nie pojawiały się na ekranie.
- Obraz źródłowy jest ponad dwukrotnie mniejszy niż dotąd, więc ta i kolejne aktualizacje pobierają się szybciej.

Schemat bazy danych jest migrowany automatycznie przy pierwszym uruchomieniu; nic nie trzeba robić.

Pełne informacje: https://github.com/spliit-app/spliit/releases/tag/1.23.0 oraz https://github.com/spliit-app/spliit/releases/tag/1.23.1`,
    fr_FR: `Spliit mis à jour vers 1.23.1.

- Consultez votre solde sur l'ensemble des groupes, et lisez les statistiques d'un groupe sur une plage de dates, avec le détail des dépenses derrière chaque chiffre.
- Remboursez dans une devise autre que celle du groupe.
- Spliit s'installe désormais comme une application, garde ses ressources disponibles hors ligne et signale l'arrivée d'une nouvelle version.
- Les onglets de groupe affichent des icônes sur mobile, et les titres de page suivent la langue choisie.
- Correction des erreurs de validation portant sur une liste de champs entière, qui n'apparaissaient jamais à l'écran.
- L'image amont fait moins de la moitié de sa taille précédente : cette mise à jour et les suivantes se téléchargent plus vite.

Le schéma de la base de données est migré automatiquement au premier démarrage ; aucune action n'est requise.

Notes complètes : https://github.com/spliit-app/spliit/releases/tag/1.23.0 et https://github.com/spliit-app/spliit/releases/tag/1.23.1`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
