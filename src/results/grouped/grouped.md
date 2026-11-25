# Grouped results

These methods return the results of the analysis groups of the calculated
product system. An analysis group is a set of processes of the system for which
the results are aggregated.

| Method                      | Parameters       | Returns                                                                                |
| --------------------------- | ---------------- | -------------------------------------------------------------------------------------- |
| `grouped-flow-results-of`   | `enviFlow`       | [`List[GroupValue]`](https://greendelta.github.io/olca-schema/classes/GroupValue.html) |
| `grouped-impact-results-of` | `impactCategory` | [`List[GroupValue]`](https://greendelta.github.io/olca-schema/classes/GroupValue.html) |
| `grouped-cost-results`      |                  | [`List[GroupValue]`](https://greendelta.github.io/olca-schema/classes/GroupValue.html) |

These methods are only available via JSON-RPC.

## Intervention flows

The method `grouped-flow-results-of` returns the grouped results of an
intervention flow.

## Impact categories

The method `grouped-impact-results-of` returns the grouped results of an impact
category.

## Costs

The method `grouped-cost-results` returns the grouped results of the life cycle
costs.
