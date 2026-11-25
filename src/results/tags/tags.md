# Tag results

These methods return the results aggregated by the tags of the processes in the
calculated product system.

## Intervention flows

|             |                                                                                    |
| ----------- | ---------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/tag-results-of-flow/{envi-flow}`                           |
| JSON-RPC    | `result/tag-results-of-flow`                                                       |
| Python IPC  | `Result.get_tag_results_of_flow`                                                   |
| Parameter   | [`EnviFlow`](https://greendelta.github.io/olca-schema/classes/EnviFlow.html)       |
| Return type | [`List[TagValue]`](https://greendelta.github.io/olca-schema/classes/TagValue.html) |

## Impact categories

|             |                                                                                    |
| ----------- | ---------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/tag-results-of-impact/{impact-category}`                   |
| JSON-RPC    | `result/tag-results-of-impact`                                                     |
| Python IPC  | `Result.get_tag_results_of_impact`                                                 |
| Parameter   | [`Ref[ImpactCategory]`](https://greendelta.github.io/olca-schema/classes/Ref.html) |
| Return type | [`List[TagValue]`](https://greendelta.github.io/olca-schema/classes/TagValue.html) |

## Costs

|             |                                                                                    |
| ----------- | ---------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/tag-results-of-costs`                                      |
| JSON-RPC    | `result/tag-results-of-costs`                                                      |
| Python IPC  | `Result.get_tag_results_of_costs`                                                  |
| Return type | [`List[TagValue]`](https://greendelta.github.io/olca-schema/classes/TagValue.html) |
