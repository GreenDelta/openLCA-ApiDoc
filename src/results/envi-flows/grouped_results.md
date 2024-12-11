# Grouped results

Returns the analysis group results for a given flow.

|             |                             |
| ----------- | --------------------------- |
| Rest API    | `GET result/{result-id}/grouped-flow-results-of/{envi-flow}` |
| JSON-RPC    | `result/grouped-flow-results-of` |
| Snake case  | `result.get_grouped_flow_results_of` |
| Camel case  | `result.getGroupedFlowResultsOf` |
| Return type | [`List[GroupValue]`](http://greendelta.github.io/olca-schema/classes/GroupValue.html) |
| Parameter 1 | [`EnviFlow`](http://greendelta.github.io/olca-schema/classes/EnviFlow.html) |
