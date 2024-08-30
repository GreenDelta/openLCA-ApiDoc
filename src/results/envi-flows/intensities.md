# Intensities

This method returns the total interventions related to one unit of product output or waste
input of a technosphere flow \\(j\\) in the supply chain. This includes direct, upstream,
and downstream contributions related to one unit of this flow. Mathematically, it is the
column \\(M[:, j]\\) of the intensity matrix \\(M\\):

$$
M = B * A^{-1}
$$

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-flows-of-one/{tech-flow}`                        |
| IPC         | `result/total-flows-of-one`                                                    |
| Python IPC  | `Result.get_total_flows_of_one`                                                |
| Return type | [`List[EnviFlowValue]`](http://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html) |

It is also possible to get the intensity result of a single flow:

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-flow-of-one/{envi-flow}/{tech-flow}`             |
| IPC         | `result/total-flow-of-one`                                                     |
| Python IPC  | `Result.get_total_flow_of_one`                                                 |
| Return type | [`EnviFlowValue`](http://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |
| Parameter type | [`EnviFlow`](http://greendelta.github.io/olca-schema/classes/EnviFlow.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html) |

