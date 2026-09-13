import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.25.0:0',
  releaseNotes: {
    en_US: `Updated Spliit to 1.25.0.

- Explore monthly category spending with a stacked chart and category breakdown.
- Reopening an expense preserves amount-based shares, and amount splits now show the remaining amount or difference.
- Expenses are grouped by their stored calendar day, and new expenses use the correct local date.
- Added security headers and safer error screens that do not expose exception details.
- Fixed startup errors when receipt scanning is disabled and improved expense-list loading performance.
- The setup instructions now include starting the service before opening the Web UI.

Full notes: https://github.com/spliit-app/spliit/releases/tag/1.24.0 and https://github.com/spliit-app/spliit/releases/tag/1.25.0`,
    es_ES: `Spliit actualizado a 1.25.0.

- Explora el gasto mensual por categorías con un gráfico apilado y un desglose por categorías.
- Al volver a abrir un gasto se conservan los repartos por importe, que ahora muestran el importe restante o la diferencia.
- Los gastos se agrupan según el día natural guardado y los gastos nuevos usan la fecha local correcta.
- Se han añadido cabeceras de seguridad y pantallas de error más seguras que no muestran detalles de las excepciones.
- Corregidos los errores de arranque cuando el escaneo de recibos está desactivado y mejorado el rendimiento al cargar la lista de gastos.
- Las instrucciones de configuración ahora indican que hay que iniciar el servicio antes de abrir la interfaz web.

Notas completas: https://github.com/spliit-app/spliit/releases/tag/1.24.0 y https://github.com/spliit-app/spliit/releases/tag/1.25.0`,
    de_DE: `Spliit auf 1.25.0 aktualisiert.

- Monatliche Ausgaben nach Kategorien lassen sich in einem gestapelten Diagramm und einer Kategorieaufschlüsselung auswerten.
- Beim erneuten Öffnen einer Ausgabe bleiben betragsbasierte Anteile erhalten; außerdem zeigen Betragsaufteilungen den Restbetrag oder die Differenz an.
- Ausgaben werden nach dem gespeicherten Kalendertag gruppiert, und neue Ausgaben verwenden das richtige lokale Datum.
- Sicherheitsheader und sicherere Fehlerseiten verhindern, dass Ausnahmedetails offengelegt werden.
- Startfehler bei deaktivierter Belegerfassung wurden behoben und das Laden der Ausgabenliste beschleunigt.
- Die Einrichtungsanleitung weist nun darauf hin, den Dienst vor dem Öffnen der Weboberfläche zu starten.

Vollständige Hinweise: https://github.com/spliit-app/spliit/releases/tag/1.24.0 und https://github.com/spliit-app/spliit/releases/tag/1.25.0`,
    pl_PL: `Zaktualizowano Spliit do 1.25.0.

- Analizuj miesięczne wydatki według kategorii na wykresie skumulowanym i w zestawieniu kategorii.
- Ponowne otwarcie wydatku zachowuje udziały kwotowe, a podział według kwoty pokazuje teraz pozostałą kwotę lub różnicę.
- Wydatki są grupowane według zapisanego dnia kalendarzowego, a nowe wydatki otrzymują prawidłową datę lokalną.
- Dodano nagłówki bezpieczeństwa oraz bezpieczniejsze ekrany błędów, które nie ujawniają szczegółów wyjątków.
- Naprawiono błędy uruchamiania przy wyłączonym skanowaniu paragonów i przyspieszono wczytywanie listy wydatków.
- Instrukcja konfiguracji informuje teraz o konieczności uruchomienia usługi przed otwarciem interfejsu internetowego.

Pełne informacje: https://github.com/spliit-app/spliit/releases/tag/1.24.0 oraz https://github.com/spliit-app/spliit/releases/tag/1.25.0`,
    fr_FR: `Spliit mis à jour vers 1.25.0.

- Analysez les dépenses mensuelles par catégorie grâce à un graphique empilé et une ventilation par catégorie.
- La réouverture d'une dépense conserve les parts définies par montant, et le partage par montant affiche désormais le reste ou l'écart.
- Les dépenses sont regroupées selon leur jour calendaire enregistré, et les nouvelles dépenses utilisent la bonne date locale.
- Des en-têtes de sécurité et des écrans d'erreur plus sûrs empêchent l'affichage des détails des exceptions.
- Correction des erreurs de démarrage lorsque l'analyse des reçus est désactivée et amélioration des performances de chargement de la liste des dépenses.
- Les instructions de configuration indiquent désormais de démarrer le service avant d'ouvrir l'interface web.

Notes complètes : https://github.com/spliit-app/spliit/releases/tag/1.24.0 et https://github.com/spliit-app/spliit/releases/tag/1.25.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
