# Tag results

Returns the tag results for a given impact category.

|             |                             |
| ----------- | --------------------------- |
| Rest API    | `GET result/{result-id}/tag-results-of-impact/{impact-category}` |
| JSON-RPC    | `result/tag-results-of-impact` |
| Snake case  | `result.get_tag_results_of_impact` |
| Camel case  | `result.getTagResultsOfImpact` |
| Return type | [`List[TagValue]`](http://greendelta.github.io/olca-schema/classes/TagValue.html) |
| Parameter 1 | [`Ref[ImpactCategory]`](http://greendelta.github.io/olca-schema/classes/Ref.html) |
