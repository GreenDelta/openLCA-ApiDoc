# Upstream results

This method returns the upstream results for a given path in an upstream contribution tree related to an intervention flow. If the path is empty, the root of that tree is returned.

|             |                                                                                           |
|-------------|-------------------------------------------------------------------------------------------|
| REST        | `POST result/{result-id}/upstream-interventions-of/{envi-flow}`                           |
| IPC         | `result/upstream-interventions-of`                                                        |
| Python IPC  | `Result.get_upstream_interventions_of`                                                    |
| Return type | [`List[UpstreamNode]`](http://greendelta.github.io/olca-schema/classes/UpstreamNode.html) |
| Parameter   | [`EnviFlow`](http://greendelta.github.io/olca-schema/classes/EnviFlow.html)               |
| Parameter   | the upstream path encoded as string                                                       |
