# Total process results

This method returns the total results related to the total requirements $t_j$ of a technosphere flow
\\(j\\)) in the calculated product system. This includes the direct, upstream, and downstream
contributions related to $t_j$. Mathematically, it is the column \\(j\\) of the intensity matrix
\\(M\\) scaled by the totality factor \\(tf_j\\):

$$
M[:,j] * tf_j
$$

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-flows-of/{tech-flow}`                            |
| IPC         | `result/total-flows-of`                                                        |
| Python IPC  | `Result.get_total_flows_of`                                                    |
| Return type | [`List[EnviFlowValue]`](http://greendelta.github.io/olca-schema/classes/EnviFlowValue.html)            |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html) |

It is also possible to get the total result value for a single flow:

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-flow-of/{envi-flow}/{tech-flow}`                 |
| IPC         | `result/total-flow-of`                                                         |
| Python IPC  | `Result.get_total_flow_of`                                                     |
| Return type | [`EnviFlowValue`](http://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |
| Parameter type | [`EnviFlow`](http://greendelta.github.io/olca-schema/classes/EnviFlow.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html) |


