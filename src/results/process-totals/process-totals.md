# Total process results

The total result of a process (technosphere flow) \\(j\\) is the result related
to the total requirements \\(t_j\\) of that flow in the calculated product
system. It includes the direct, upstream, and downstream contributions related
to \\(t_j\\). Mathematically, it is the [intensity](../intensities/intensities.md)
of the flow scaled by its [totality
factor](../requirements/requirements.md#totality-factors) \\(tf_j\\).

## Intervention flows

This method returns the total intervention flows of a technosphere flow
\\(j\\). Mathematically, it is the column \\(j\\) of the intensity matrix
\\(M\\) scaled by the totality factor \\(tf_j\\):

$$
M[:, j] \ tf_j
$$

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/total-interventions-of/{tech-flow}`                                  |
| JSON-RPC    | `result/total-interventions-of`                                                              |
| Python IPC  | `Result.get_total_interventions_of`                                                          |
| Parameter   | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)                 |
| Return type | [`List[EnviFlowValue]`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |

It is also possible to get the total result \\(M[i, j] \ tf_j\\) of a single
flow \\(i\\):

|             |                                                                                        |
| ----------- | -------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/total-intervention-of/{envi-flow}/{tech-flow}`                 |
| JSON-RPC    | `result/total-intervention-of`                                                         |
| Python IPC  | `Result.get_total_intervention_of`                                                     |
| Parameter 1 | [`EnviFlow`](https://greendelta.github.io/olca-schema/classes/EnviFlow.html)           |
| Parameter 2 | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)           |
| Return type | [`EnviFlowValue`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |

## Impact categories

This method returns the total impacts of a technosphere flow \\(j\\).
Mathematically, it is the column \\(j\\) of the impact intensity matrix \\(N\\)
scaled by the totality factor \\(tf_j\\):

$$
N[:, j] \ tf_j
$$

|             |                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/total-impacts-of/{tech-flow}`                                    |
| JSON-RPC    | `result/total-impacts-of`                                                                |
| Python IPC  | `Result.get_total_impacts_of`                                                            |
| Parameter   | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)             |
| Return type | [`List[ImpactValue]`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html) |

```js,run
{{#include total-impacts.js:body}}
```

It is also possible to get the total result \\(N[k, j] \ tf_j\\) of a single
impact category \\(k\\):

|             |                                                                                    |
| ----------- | ---------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/total-impact-of/{impact-category}/{tech-flow}`             |
| JSON-RPC    | `result/total-impact-of`                                                           |
| Python IPC  | `Result.get_total_impact_of`                                                       |
| Parameter 1 | [`Ref[ImpactCategory]`](https://greendelta.github.io/olca-schema/classes/Ref.html) |
| Parameter 2 | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)       |
| Return type | [`ImpactValue`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html) |

## Costs

This method returns the total life cycle costs of a technosphere flow \\(j\\).
Via JSON-RPC, the value is returned as plain number:

$$
q^T A^{-1}[:, j] \ tf_j
$$

|             |                                                                              |
| ----------- | ---------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/total-costs-of/{tech-flow}`                          |
| JSON-RPC    | `result/total-costs-of`                                                      |
| Python IPC  | `Result.get_total_costs_of`                                                  |
| Parameter   | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html) |
| Return type | `number`                                                                     |
