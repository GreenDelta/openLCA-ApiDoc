# Direct contributions

Direct contributions are the results that are directly related to the processes
of the calculated product system, without their upstream or downstream
contributions. For each result element, these results form a matrix with the
result elements as rows and the processes (technosphere flows) \\(j\\) as
columns, scaled by the scaling vector \\(s\\). There are methods for getting a
row (the contributions of all processes to a single result element), a column
(the direct result of a single process), or a single value of this matrix.

| Method                    | Parameters                 | Returns                                                                                      | Formula                  |
| ------------------------- | -------------------------- | -------------------------------------------------------------------------------------------- | ------------------------ |
| `flow-contributions-of`   | `enviFlow`                 | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) | \\(G[i, :]\\)            |
| `direct-interventions-of` | `techFlow`                 | [`List[EnviFlowValue]`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) | \\(G[:, j]\\)            |
| `direct-intervention-of`  | `enviFlow`, `techFlow`     | [`EnviFlowValue`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html)       | \\(G[i, j]\\)            |
| `impact-contributions-of` | `impactCategory`           | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) | \\(H[k, :]\\)            |
| `direct-impacts-of`       | `techFlow`                 | [`List[ImpactValue]`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html)     | \\(H[:, j]\\)            |
| `direct-impact-of`        | `impactCategory`, `techFlow` | [`ImpactValue`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html)         | \\(H[k, j]\\)            |
| `cost-contributions`      |                            | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) | \\(q^T diag(s)\\)        |
| `direct-costs-of`         | `techFlow`                 | `number`                                                                                     | \\(q_j s_j\\)            |

## Intervention flows

The direct contributions of the processes to the inventory result are given by
the scaled intervention matrix \\(G\\):

$$
G = B \ diag(s)
$$

* `flow-contributions-of` returns the row \\(G[i, :]\\): the direct
  contribution of each process \\(j\\) in the system to the inventory result of
  a flow \\(i\\).
* `direct-interventions-of` returns the column \\(G[:, j]\\): the direct
  intervention flows of a process \\(j\\) related to the final demand of the
  product system.
* `direct-intervention-of` returns the single value \\(G[i, j]\\).

### Examples

#### Contributions to a flow

```js,run
{{#include flow-contributions.js:2:32}}
```

#### Direct interventions of a process

```js,run
{{#include direct-interventions.js:2:31}}
```

## Impact categories

The direct contributions of the processes to the impact assessment result are
given by the direct impact matrix \\(H\\):

$$
H = C \ B \ diag(s)
$$

* `impact-contributions-of` returns the row \\(H[k, :]\\): the direct
  contribution of each process \\(j\\) in the system to the impact assessment
  result of an impact category \\(k\\).
* `direct-impacts-of` returns the column \\(H[:, j]\\): the direct impacts of a
  process \\(j\\) related to the final demand of the product system.
* `direct-impact-of` returns the single value \\(H[k, j]\\).

### Examples

#### Contributions to an impact category

```js,run
{{#include impact-contributions.js:body}}
```

#### Direct impacts of a process

```js,run
{{#include direct-impacts.js:body}}
```

## Costs

For costs, there is only a single result row: the net-costs \\(q\\) of the
processes scaled by the scaling vector \\(s\\):

$$
q^T diag(s)
$$

* `cost-contributions` returns the direct contribution of each process \\(j\\)
  in the system to the total cost result.
* `direct-costs-of` returns the direct costs \\(q_j s_j\\) of a process
  \\(j\\). Via JSON-RPC, the value is returned as plain number.

### Examples

#### olca-ipc.ts

```js,run
{{#include cost-contributions.js}}
```
