# Upstream results

This method returns the upstream cost results for a given path in an upstream contribution tree. If the path is empty, the root of that tree is returned.

|             |                                                                                           |
|-------------|-------------------------------------------------------------------------------------------|
| REST        | `POST result/{result-id}/upstream-costs-of`                                               |
| IPC         | `result/upstream-costs-of`                                                                |
| Python IPC  | `Result.get_upstream_costs_of`                                                            |
| Return type | [`List[UpstreamNode]`](http://greendelta.github.io/olca-schema/classes/UpstreamNode.html) |
| Parameter   | the upstream path encoded as string                                                       |
