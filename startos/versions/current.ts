import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.22.0:0',
  releaseNotes: {
    en_US: `Updated Spliit to 1.22.0.

- Share a group with a QR code, and include notes and history in the JSON export.
- Added Malaysian Ringgit, Macedonian Denar and Colombian Peso, plus Arabic with right-to-left layout.
- Fixed currency conversion, which had stopped working after the exchange-rate service moved.
- Fixed CSV export failing on group names with accented characters, keyboard navigation in the category and currency pickers, and the first day of the week when grouping expenses.
- Hardened AI receipt extraction and CSV export against malicious input.

Existing expenses are corrected automatically on first start; no action is needed.

Full notes: https://github.com/spliit-app/spliit/releases`,
    es_ES: `Spliit actualizado a 1.22.0.

- Comparte un grupo con un código QR e incluye las notas y el historial en la exportación JSON.
- Añadidos el ringgit malayo, el denar macedonio y el peso colombiano, además del árabe con diseño de derecha a izquierda.
- Corregida la conversión de divisas, que había dejado de funcionar tras el cambio del servicio de tipos de cambio.
- Corregidos el fallo de la exportación CSV con nombres de grupo acentuados, la navegación con teclado en los selectores de categoría y divisa, y el primer día de la semana al agrupar gastos.
- Reforzadas la extracción de recibos con IA y la exportación CSV frente a entradas maliciosas.

Los gastos existentes se corrigen automáticamente en el primer arranque; no hay que hacer nada.

Notas completas: https://github.com/spliit-app/spliit/releases`,
    de_DE: `Spliit auf 1.22.0 aktualisiert.

- Gruppen per QR-Code teilen und Notizen sowie Verlauf im JSON-Export mit ausgeben.
- Malaysischer Ringgit, Mazedonischer Denar und Kolumbianischer Peso ergänzt, dazu Arabisch mit Rechts-nach-links-Layout.
- Währungsumrechnung repariert, die seit dem Wechsel des Wechselkursdienstes nicht mehr funktionierte.
- Behoben: fehlgeschlagener CSV-Export bei Gruppennamen mit Umlauten, Tastaturnavigation in den Kategorie- und Währungsauswahlen sowie der Wochenbeginn beim Gruppieren von Ausgaben.
- KI-Belegerkennung und CSV-Export gegen schädliche Eingaben abgesichert.

Vorhandene Ausgaben werden beim ersten Start automatisch korrigiert; es ist nichts zu tun.

Vollständige Hinweise: https://github.com/spliit-app/spliit/releases`,
    pl_PL: `Zaktualizowano Spliit do 1.22.0.

- Udostępnianie grupy kodem QR oraz eksport notatek i historii w eksporcie JSON.
- Dodano ringgita malezyjskiego, denara macedońskiego i peso kolumbijskie, a także język arabski z układem od prawej do lewej.
- Naprawiono przeliczanie walut, które przestało działać po zmianie usługi kursów wymiany.
- Naprawiono błąd eksportu CSV przy nazwach grup ze znakami diakrytycznymi, nawigację klawiaturą w wyborze kategorii i waluty oraz pierwszy dzień tygodnia przy grupowaniu wydatków.
- Wzmocniono odczyt paragonów przez AI i eksport CSV pod kątem złośliwych danych wejściowych.

Istniejące wydatki są poprawiane automatycznie przy pierwszym uruchomieniu; nic nie trzeba robić.

Pełne informacje: https://github.com/spliit-app/spliit/releases`,
    fr_FR: `Spliit mis à jour vers 1.22.0.

- Partage d'un groupe par QR code, et export des notes et de l'historique dans l'export JSON.
- Ajout du ringgit malaisien, du denar macédonien et du peso colombien, ainsi que de l'arabe avec mise en page de droite à gauche.
- Correction de la conversion des devises, qui ne fonctionnait plus depuis le changement de service de taux de change.
- Corrections de l'export CSV en échec sur les noms de groupe accentués, de la navigation au clavier dans les sélecteurs de catégorie et de devise, et du premier jour de la semaine lors du regroupement des dépenses.
- Renforcement de l'extraction de reçus par IA et de l'export CSV face aux entrées malveillantes.

Les dépenses existantes sont corrigées automatiquement au premier démarrage ; aucune action n'est requise.

Notes complètes : https://github.com/spliit-app/spliit/releases`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
