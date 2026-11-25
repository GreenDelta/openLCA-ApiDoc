# Direct contributions

Direct contributions are the results that are directly related to the processes
of the calculated product system, without their upstream or downstream
contributions. For each result element, these results form a matrix with the
result elements as rows and the processes (technosphere flows) \\(j\\) as
columns, scaled by the scaling vector \\(s\\). There are methods for getting a
row (the contributions of all processes to a single result element), a column
(the direct result of a single process), or a single value of this matrix.

## Intervention flows

The direct contributions of the processes to the inventory result are given by
the scaled intervention matrix \\(G\\):

$$
G = B \ diag(s)
$$

### Contributions to a flow

This method returns the direct contribution of each process \\(j\\) in the
system to the inventory result of a flow \\(i\\). Mathematically, it is the row
\\(G[i, :]\\):

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/flow-contributions-of/{envi-flow}`                                   |
| JSON-RPC    | `result/flow-contributions-of`                                                               |
| Python IPC  | `Result.get_flow_contributions_of`                                                           |
| Parameter   | [`EnviFlow`](https://greendelta.github.io/olca-schema/classes/EnviFlow.html)                 |
| Return type | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |

```js,run
{{#include flow-contributions.js:2:32}}
```

### Direct process result

This method returns the direct intervention flows of a process \\(j\\) related
to the final demand of the product system. Mathematically, it is the column
\\(G[:, j]\\):

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/direct-interventions-of/{tech-flow}`                                 |
| JSON-RPC    | `result/direct-interventions-of`                                                             |
| Python IPC  | `Result.get_direct_interventions_of`                                                         |
| Parameter   | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)                 |
| Return type | [`List[EnviFlowValue]`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |

```js,run
{{#include direct-interventions.js:2:31}}
```

### Single value

This method returns the direct result \\(G[i, j]\\) of a flow \\(i\\) and a
process \\(j\\):

|             |                                                                                        |
| ----------- | -------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/direct-intervention-of/{envi-flow}/{tech-flow}`                |
| JSON-RPC    | `result/direct-intervention-of`                                                        |
| Python IPC  | `Result.get_direct_intervention_of`                                                    |
| Parameter 1 | [`EnviFlow`](https://greendelta.github.io/olca-schema/classes/EnviFlow.html)           |
| Parameter 2 | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)           |
| Return type | [`EnviFlowValue`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |

## Impact categories

The direct contributions of the processes to the impact assessment result are
given by the direct impact matrix \\(H\\):

$$
H = C \ B \ diag(s)
$$

### Contributions to an impact category

This method returns the direct contribution of each process \\(j\\) in the
system to the impact assessment result of an impact category \\(k\\).
Mathematically, it is the row \\(H[k, :]\\):

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/impact-contributions-of/{impact-category}`                           |
| JSON-RPC    | `result/impact-contributions-of`                                                             |
| Python IPC  | `Result.get_impact_contributions_of`                                                         |
| Parameter   | [`Ref[ImpactCategory]`](https://greendelta.github.io/olca-schema/classes/Ref.html)           |
| Return type | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |

```js,run
{{#include impact-contributions.js:body}}
```

### Direct process result

This method returns the direct impacts of a process \\(j\\) related to the final
demand of the product system. Mathematically, it is the column \\(H[:, j]\\):

|             |                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/direct-impacts-of/{tech-flow}`                                   |
| JSON-RPC    | `result/direct-impacts-of`                                                               |
| Python IPC  | `Result.get_direct_impacts_of`                                                           |
| Parameter   | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)             |
| Return type | [`List[ImpactValue]`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html) |

```js,run
{{#include direct-impacts.js:body}}
```

### Single value

This method returns the direct result \\(H[k, j]\\) of an impact category
\\(k\\) and a process \\(j\\):

|             |                                                                                    |
| ----------- | ---------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/direct-impact-of/{impact-category}/{tech-flow}`            |
| JSON-RPC    | `result/direct-impact-of`                                                          |
| Python IPC  | `Result.get_direct_impact_of`                                                      |
| Parameter 1 | [`Ref[ImpactCategory]`](https://greendelta.github.io/olca-schema/classes/Ref.html) |
| Parameter 2 | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)       |
| Return type | [`ImpactValue`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html) |

## Costs

For costs, there is only a single result row: the net-costs \\(q\\) of the
processes scaled by the scaling vector \\(s\\):

$$
q^T diag(s)
$$

### Contributions to the total costs

This method returns the direct contribution of each process \\(j\\) in the
system to the total cost result:

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/cost-contributions`                                                  |
| JSON-RPC    | `result/cost-contributions`                                                                  |
| Python IPC  | `Result.get_cost_contributions`                                                              |
| Return type | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |

The example below uses the
[olca-ipc.ts](https://github.com/GreenDelta/olca-ipc.ts) client API:

```js,run
{{#include cost-contributions.js}}
```

### Direct costs of a process

This method returns the direct costs \\(q_j s_j\\) of a process \\(j\\). Via
JSON-RPC, the value is returned as plain number:

|             |                                                                              |
| ----------- | ---------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/direct-costs-of/{tech-flow}`                         |
| JSON-RPC    | `result/direct-costs-of`                                                     |
| Python IPC  | `Result.get_direct_costs_of`                                                 |
| Parameter   | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html) |
| Return type | `number`                                                                     |
