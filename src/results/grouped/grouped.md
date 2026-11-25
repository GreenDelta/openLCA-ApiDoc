# Grouped results

These methods return the results of the analysis groups of the calculated
product system. An analysis group is a set of processes of the system for which
the results are aggregated.

## Intervention flows

|             |                                                                                        |
| ----------- | -------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/grouped-flow-results-of/{envi-flow}`                           |
| JSON-RPC    | `result/grouped-flow-results-of`                                                       |
| Python IPC  | `Result.get_grouped_flow_results_of`                                                   |
| Parameter   | [`EnviFlow`](https://greendelta.github.io/olca-schema/classes/EnviFlow.html)           |
| Return type | [`List[GroupValue]`](https://greendelta.github.io/olca-schema/classes/GroupValue.html) |

## Impact categories

|             |                                                                                        |
| ----------- | -------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/grouped-impact-results-of/{impact-category}`                   |
| JSON-RPC    | `result/grouped-impact-results-of`                                                     |
| Python IPC  | `Result.get_grouped_impact_results_of`                                                 |
| Parameter   | [`Ref[ImpactCategory]`](https://greendelta.github.io/olca-schema/classes/Ref.html)     |
| Return type | [`List[GroupValue]`](https://greendelta.github.io/olca-schema/classes/GroupValue.html) |

## Costs

|             |                                                                                        |
| ----------- | -------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/grouped-cost-results`                                          |
| JSON-RPC    | `result/grouped-cost-results`                                                          |
| Python IPC  | `Result.get_grouped_cost_results`                                                      |
| Return type | [`List[GroupValue]`](https://greendelta.github.io/olca-schema/classes/GroupValue.html) |
