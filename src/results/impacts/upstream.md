# Upstream results

This method returns the upstream results for a given path in an upstream contribution tree related to an impact category. If the path is empty, the root of that tree is returned.

|             |                                                                                           |
|-------------|-------------------------------------------------------------------------------------------|
| REST        | `POST result/{result-id}/upstream-impacts-of/{impact-category}`                           |
| IPC         | `result/upstream-impacts-of`                                                              |
| Python IPC  | `Result.get_upstream_impacts_of`                                                          |
| Return type | [`List[UpstreamNode]`](http://greendelta.github.io/olca-schema/classes/UpstreamNode.html) |
| Parameter   | [`Ref[ImpactCategory]`](http://greendelta.github.io/olca-schema/classes/Ref.html)         |
| Parameter   | the upstream path encoded as string                                                       |
