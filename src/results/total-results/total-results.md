# Total results

These methods return the overall results of the calculated product system
related to its final demand: the inventory result, the impact assessment result
(also normalized and weighted), and the total life cycle costs.

## Inventory result

This method returns the inventory result \\(g\\) of the calculated product
system. This is the amount \\(g_i\\) of each intervention flow \\(i\\) that
crosses the boundary to the environment related to the final demand of the
product system. It can be calculated by multiplying the intervention matrix
\\(B\\) with the scaling vector \\(s\\):

$$
g = B s
$$

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/total-flows`                                                         |
| JSON-RPC    | `result/total-flows`                                                                         |
| Python IPC  | `Result.get_total_flows`                                                                     |
| Return type | [`List[EnviFlowValue]`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |

It is also possible to get the inventory result \\(g_i\\) of a single flow
\\(i\\):

|             |                                                                                         |
| ----------- | --------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/total-flow-value-of/{envi-flow}`                                |
| JSON-RPC    | `result/total-flow-value-of`                                                            |
| Python IPC  | `Result.get_total_flow_value_of`                                                        |
| Parameter   | [`EnviFlow`](https://greendelta.github.io/olca-schema/classes/EnviFlow.html)            |
| Return type | [`EnviFlowValue`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html)  |

### Examples

#### JSON-RPC via Fetch API

```js,run
{{#include total-flows.js:2:22}}
```

## Impact assessment result

This method returns the impact assessment result \\(h\\) of the calculated
product system. It can be calculated by multiplying the characterisation matrix
\\(C\\) with the inventory result \\(g\\):

$$
h = C g
$$

|             |                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/total-impacts`                                                   |
| JSON-RPC    | `result/total-impacts`                                                                   |
| Python IPC  | `Result.get_total_impacts`                                                               |
| Return type | [`List[ImpactValue]`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html) |

It is also possible to get the impact result \\(h_k\\) of a single impact
category \\(k\\):

|             |                                                                                     |
| ----------- | ----------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/total-impact-value-of/{impact-category}`                    |
| JSON-RPC    | `result/total-impact-value-of`                                                      |
| Python IPC  | `Result.get_total_impact_value_of`                                                  |
| Parameter   | [`Ref[ImpactCategory]`](https://greendelta.github.io/olca-schema/classes/Ref.html)  |
| Return type | [`ImpactValue`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html)  |

### Examples

#### JSON-RPC via Fetch API

```js,run
{{#include total-impacts.js:body}}
```

## Normalized results

If a normalization and weighting set was selected in the calculation setup, this
method returns the normalized impact assessment result. Mathematically, it is
the impact assessment result \\(h\\) divided by the respective normalization
values \\(nv\\):

$$
diag(nv)^{-1} h
$$

|             |                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/normalized-impacts`                                              |
| JSON-RPC    | `result/total-impacts/normalized`                                                        |
| Python IPC  | `Result.get_normalized_impacts`                                                          |
| Return type | [`List[ImpactValue]`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html) |

### Examples

#### Python IPC

```py
{{#include normalized.py}}
```

#### JSON-RPC via Fetch API

```js,run
{{#include normalized.js:body}}
```

## Weighted results

If a normalization and weighting set was selected in the calculation setup, this
method returns the weighted impact assessment result. Mathematically, it is the
impact assessment result \\(h\\) divided by the respective normalization values
\\(nv\\) and multiplied with the respective weighting factors \\(w\\):

$$
diag(w) \ diag(nv)^{-1} h
$$

|             |                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/weighted-impacts`                                                |
| JSON-RPC    | `result/total-impacts/weighted`                                                          |
| Python IPC  | `Result.get_weighted_impacts`                                                            |
| Return type | [`List[ImpactValue]`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html) |

### Examples

#### Python IPC

```py
{{#include weighted.py}}
```

#### JSON-RPC via Fetch API

```js,run
{{#include weighted.js:body}}
```

## Costs

If costs were included in the calculation setup, this method returns the total
life cycle costing (LCC) result of the calculated product system. It is the
vector \\(q\\) with the net-costs of the processes multiplied with the scaling
vector \\(s\\). The returned value contains the reference currency of the
database.

$$
q^T s
$$

|             |                                                                                      |
| ----------- | ------------------------------------------------------------------------------------ |
| REST        | `GET result/{result-id}/total-costs`                                                 |
| JSON-RPC    | `result/total-costs`                                                                 |
| Python IPC  | `Result.get_total_costs`                                                             |
| Return type | [`CostValue`](https://greendelta.github.io/olca-schema/classes/CostValue.html)       |

### Examples

#### olca-ipc.ts

```js,run
{{#include total-costs.js}}
```
