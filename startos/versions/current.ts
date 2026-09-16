import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.26.0:0',
  releaseNotes: {
    en_US: `Updated Spliit to 1.26.0.

- Even splits now preview the exact saved allocation, so a leftover cent stays with the participant shown.
- Monthly spending charts open at the latest month and keep the largest total visible.
- Input limits protect groups, expenses, and pagination from oversized requests, with retry controls when group or balance loading fails.

Full notes: https://github.com/spliit-app/spliit/releases/tag/1.26.0`,
    es_ES: `Spliit actualizado a 1.26.0.

- Los repartos equitativos muestran ahora la asignación exacta que se guardará, de modo que el céntimo sobrante permanece con el participante indicado.
- Los gráficos de gasto mensual se abren en el mes más reciente y mantienen visible el total más alto.
- Los límites de entrada protegen los grupos, los gastos y la paginación frente a solicitudes demasiado grandes, con controles para reintentar la carga de grupos o saldos si falla.

Notas completas: https://github.com/spliit-app/spliit/releases/tag/1.26.0`,
    de_DE: `Spliit auf 1.26.0 aktualisiert.

- Gleichmäßige Aufteilungen zeigen jetzt genau die gespeicherte Verteilung an, sodass ein Restcent bei der angezeigten Person bleibt.
- Diagramme für monatliche Ausgaben öffnen beim neuesten Monat und halten den höchsten Gesamtbetrag sichtbar.
- Eingabegrenzen schützen Gruppen, Ausgaben und Seitennavigation vor übergroßen Anfragen; fehlgeschlagene Ladevorgänge für Gruppen oder Salden lassen sich erneut versuchen.

Vollständige Hinweise: https://github.com/spliit-app/spliit/releases/tag/1.26.0`,
    pl_PL: `Zaktualizowano Spliit do 1.26.0.

- Równe podziały pokazują teraz dokładny zapisany przydział, dzięki czemu nadmiarowy grosz pozostaje przy wskazanym uczestniku.
- Wykresy miesięcznych wydatków otwierają się na najnowszym miesiącu i zachowują widoczność najwyższej sumy.
- Limity danych wejściowych chronią grupy, wydatki i stronicowanie przed zbyt dużymi żądaniami, a po nieudanym wczytaniu grup lub sald można ponowić próbę.

Pełne informacje: https://github.com/spliit-app/spliit/releases/tag/1.26.0`,
    fr_FR: `Spliit mis à jour vers 1.26.0.

- Les partages égaux affichent désormais la répartition exacte qui sera enregistrée, afin que le centime restant reste attribué au participant indiqué.
- Les graphiques de dépenses mensuelles s'ouvrent sur le mois le plus récent et gardent le total le plus élevé visible.
- Des limites de saisie protègent les groupes, les dépenses et la pagination contre les requêtes trop volumineuses, avec la possibilité de réessayer si le chargement des groupes ou des soldes échoue.

Notes complètes : https://github.com/spliit-app/spliit/releases/tag/1.26.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
