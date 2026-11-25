# Intensities

Intensities are the total results related to one unit of product output or
waste input of a technosphere flow \\(j\\) in the supply chain. They include the
direct, upstream, and downstream contributions related to one unit of this flow.
For each result element, the intensities form a matrix with the result elements
as rows and the technosphere flows as columns. There are methods for getting a
column (all intensities of a technosphere flow) or a single value of this
matrix.

To get the total result related to the total requirements of a technosphere
flow, an intensity needs to be multiplied with the [totality
factor](../requirements/requirements.md#totality-factors) of that flow. This is
done by the methods for the [total process
results](../process-totals/process-totals.md).

## Intervention flows

The intensities of the intervention flows are given by the intensity matrix
\\(M\\):

$$
M = B \ A^{-1}
$$

This method returns the column \\(M[:, j]\\), the intervention flows related to
one unit of the technosphere flow \\(j\\):

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/flow-intensities-of/{tech-flow}`                                     |
| JSON-RPC    | `result/flow-intensities-of`                                                                 |
| Python IPC  | `Result.get_flow_intensities_of`                                                             |
| Parameter   | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)                 |
| Return type | [`List[EnviFlowValue]`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |

It is also possible to get the intensity \\(M[i, j]\\) of a single flow \\(i\\):

|             |                                                                                        |
| ----------- | -------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/flow-intensity-of/{envi-flow}/{tech-flow}`                     |
| JSON-RPC    | `result/flow-intensity-of`                                                             |
| Python IPC  | `Result.get_flow_intensity_of`                                                         |
| Parameter 1 | [`EnviFlow`](https://greendelta.github.io/olca-schema/classes/EnviFlow.html)           |
| Parameter 2 | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)           |
| Return type | [`EnviFlowValue`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |

## Impact categories

The intensities of the impact categories are given by the impact intensity
matrix \\(N\\):

$$
N = C \ B \ A^{-1} = C \ M
$$

This method returns the column \\(N[:, j]\\), the impacts related to one unit
of the technosphere flow \\(j\\):

|             |                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/impact-intensities-of/{tech-flow}`                               |
| JSON-RPC    | `result/impact-intensities-of`                                                           |
| Python IPC  | `Result.get_impact_intensities_of`                                                       |
| Parameter   | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)             |
| Return type | [`List[ImpactValue]`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html) |

```js,run
{{#include impact-intensities.js:body}}
```

It is also possible to get the intensity \\(N[k, j]\\) of a single impact
category \\(k\\):

|             |                                                                                    |
| ----------- | ---------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/impact-intensity-of/{impact-category}/{tech-flow}`         |
| JSON-RPC    | `result/impact-intensity-of`                                                       |
| Python IPC  | `Result.get_impact_intensity_of`                                                   |
| Parameter 1 | [`Ref[ImpactCategory]`](https://greendelta.github.io/olca-schema/classes/Ref.html) |
| Parameter 2 | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)       |
| Return type | [`ImpactValue`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html) |

## Costs

This method returns the life cycle costs related to one unit of the
technosphere flow \\(j\\). Via JSON-RPC, the value is returned as plain number:

$$
q^T A^{-1}[:, j]
$$

|             |                                                                              |
| ----------- | ---------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/cost-intensities-of/{tech-flow}`                     |
| JSON-RPC    | `result/cost-intensities-of`                                                 |
| Python IPC  | `Result.get_cost_intensities_of`                                             |
| Parameter   | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html) |
| Return type | `number`                                                                     |
