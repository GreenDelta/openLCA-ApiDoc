# Grouped results

Returns the analysis group results for a given impact category.

|             |                             |
| ----------- | --------------------------- |
| Rest API    | `GET result/{result-id}/grouped-impact-results-of/{impact-category}` |
| JSON-RPC    | `result/grouped-impact-results-of` |
| Snake case  | `result.get_grouped_impact_results_of` |
| Camel case  | `result.getGroupedImpactResultsOf` |
| Return type | [`List[GroupValue]`](http://greendelta.github.io/olca-schema/classes/GroupValue.html) |
| Parameter 1 | [`Ref[ImpactCategory]`](http://greendelta.github.io/olca-schema/classes/Ref.html) |
