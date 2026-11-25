# Impact factors

These methods return the characterisation factors of an impact category and
the contributions of the intervention flows to the result of an impact category.

## Impact factors

This method returns the characterisation factors of an impact category \\(k\\)
for the intervention flows of the result. Mathematically, it is the row
\\(C[k, :]\\) of the characterisation matrix \\(C\\):

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/impact-factors-of/{impact-category}`                                 |
| JSON-RPC    | `result/impact-factors-of`                                                                   |
| Python IPC  | `Result.get_impact_factors_of`                                                               |
| Parameter   | [`Ref[ImpactCategory]`](https://greendelta.github.io/olca-schema/classes/Ref.html)           |
| Return type | [`List[EnviFlowValue]`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |

It is also possible to get the characterisation factor \\(C[k, i]\\) of a
single flow \\(i\\):

|             |                                                                                        |
| ----------- | -------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/impact-factor-of/{impact-category}/{envi-flow}`                |
| JSON-RPC    | `result/impact-factor-of`                                                              |
| Python IPC  | `Result.get_impact_factor_of`                                                          |
| Parameter 1 | [`Ref[ImpactCategory]`](https://greendelta.github.io/olca-schema/classes/Ref.html)     |
| Parameter 2 | [`EnviFlow`](https://greendelta.github.io/olca-schema/classes/EnviFlow.html)           |
| Return type | [`EnviFlowValue`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |

## Flow impacts

This method returns the contribution of each intervention flow \\(i\\) to the
result of an impact category \\(k\\). Mathematically, it is the row \\(k\\) of
the characterisation matrix \\(C\\) multiplied with the inventory result
\\(g\\):

$$
C[k, :] \ diag(g)
$$

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/flow-impacts-of/{impact-category}`                                   |
| JSON-RPC    | `result/flow-impacts-of`                                                                     |
| Python IPC  | `Result.get_flow_impacts_of`                                                                 |
| Parameter   | [`Ref[ImpactCategory]`](https://greendelta.github.io/olca-schema/classes/Ref.html)           |
| Return type | [`List[EnviFlowValue]`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |

It is also possible to get the impact \\(C[k, i] \ g_i\\) of a single flow
\\(i\\):

|             |                                                                                        |
| ----------- | -------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/flow-impact-of/{impact-category}/{envi-flow}`                  |
| JSON-RPC    | `result/flow-impact-of`                                                                |
| Python IPC  | `Result.get_flow_impact_of`                                                            |
| Parameter 1 | [`Ref[ImpactCategory]`](https://greendelta.github.io/olca-schema/classes/Ref.html)     |
| Parameter 2 | [`EnviFlow`](https://greendelta.github.io/olca-schema/classes/EnviFlow.html)           |
| Return type | [`EnviFlowValue`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |
