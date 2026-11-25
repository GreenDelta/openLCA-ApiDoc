# Technosphere requirements

These methods return results for the technosphere flows of the calculated
product system: the final demand, the scaling factors, the total requirements,
the totality factors, and the scaled or unscaled inputs and outputs of the
technosphere flows of a single process.

## Final demand

In openLCA, a product system is calculated for a single demand value for a
technosphere flow: a product output or waste input of the system. It is the
quantitative reference of the system. In the general case, a system can have
multiple demand values organized in a final demand vector \\(f\\) which is
indexed in the same way as the technology matrix (note that a multi-demand
system can be transformed into a single demand system by simply adding an
additional process column to the technology matrix). In the result calculation,
the technology matrix \\(A\\) is scaled by a scaling vector \\(s\\) to fulfill
the final demand:

$$
f = \sum_j{A[:, j] \ s_j} = A s
$$

|             |                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/demand`                                                          |
| JSON-RPC    | `result/demand`                                                                          |
| Python IPC  | `Result.get_demand`                                                                      |
| Return type | [`TechFlowValue`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html)   |

### Examples

#### JSON-RPC via Fetch API

```js,run
{{#include demand.js:body}}
```

## Scaling factors

The scaling vector \\(s\\) contains for each process \\(j\\) a factor \\(s_j\\)
by which the process needs to be scaled to fulfill the demand of the product
system. Mathematically, it can be calculated by solving the following equation
for \\(s\\) where \\(A\\) is the technology matrix and \\(f\\) the final demand
vector of the system:

$$
A s = f
$$

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/scaling-factors`                                                     |
| JSON-RPC    | `result/scaling-factors`                                                                     |
| Python IPC  | `Result.get_scaling_factors`                                                                 |
| Return type | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |

### Examples

#### JSON-RPC via Fetch API

```js,run
{{#include scaling-factors.js:2:22}}
```

## Total requirements

This method returns the total requirements of technosphere flows that are
needed to fulfill the demand of the calculated product system. Mathematically,
this is the diagonal of the technology matrix \\(A\\) scaled by the scaling
vector \\(s\\):

$$
t = diag(s) \ diag(A)
$$

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/total-requirements`                                                  |
| JSON-RPC    | `result/total-requirements`                                                                  |
| Python IPC  | `Result.get_total_requirements`                                                              |
| Return type | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |

It is also possible to get just the total requirements value of a single
technosphere flow \\(j\\):

$$
t_j = s_j \ A[j, j]
$$

|             |                                                                                         |
| ----------- | --------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/total-requirements-of/{tech-flow}`                              |
| JSON-RPC    | `result/total-requirements-of`                                                          |
| Python IPC  | `Result.get_total_requirements_of`                                                      |
| Parameter   | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)            |
| Return type | [`TechFlowValue`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html)  |

### Examples

#### JSON-RPC via Fetch API

```js,run
{{#include total-requirements.js:2:23}}
```

## Totality factors

The concept of totality factors is a bit complicated, but they are very useful
for visualizations like Sankey diagrams. In short, they scale an
[intensity](../intensities/intensities.md) result to a [total process
result](../process-totals/process-totals.md). An intensity result is related to
one unit of product output (waste input) of a technosphere flow \\(j\\)
including the direct, upstream, and downstream contributions. Multiplying such
an intensity with the totality factor \\(tf_j\\) gives the total result related
to the total requirements of product (waste) \\(j\\). Directly multiplying the
intensity with the total requirements would double count possible loops.

Mathematically, the totality factor of a technosphere flow \\(j\\) is calculated
by multiplying the total requirements \\(t_j\\) of that flow by a loop factor
\\(\lambda_j\\):

$$
tf_j = \lambda_j \ t_j
$$

Where the loop factor is calculated via:

$$
\lambda_j = \frac{1}{A[j, j] \ A^{-1}[j, j]}
$$

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| REST        | –                                                                                            |
| JSON-RPC    | `result/totality-factors`                                                                    |
| Python IPC  | –                                                                                            |
| Return type | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |

As the calculation of a totality factor \\(tf_j\\) requires to solve the
complete system for one unit of technosphere flow \\(j\\), it is almost always a
better idea to only query the API for totality factors that are really needed:

|             |                                                                                         |
| ----------- | --------------------------------------------------------------------------------------- |
| REST        | –                                                                                       |
| JSON-RPC    | `result/totality-factor-of`                                                             |
| Python IPC  | –                                                                                       |
| Parameter   | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)            |
| Return type | [`TechFlowValue`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html)  |

## Scaled technosphere flows

This method returns the scaled inputs and outputs of the linked product and
waste flows of a process \\(j\\) related to the final demand of the product
system. Mathematically, it is the scaled column \\(j\\) of the technology matrix
\\(A\\):

$$
s_j \ A[:,j]
$$

The returned values are negative for inputs and positive for outputs of the
respective flows. Also, the returned values contain the total requirements of
the technosphere flow \\(j\\) to which the other requirements are related.

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/scaled-tech-flows-of/{tech-flow}`                                    |
| JSON-RPC    | `result/scaled-tech-flows-of`                                                                |
| Python IPC  | `Result.get_scaled_tech_flows_of`                                                            |
| Parameter   | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)                 |
| Return type | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |

### Examples

#### JSON-RPC via Fetch API

```js,run
{{#include scaled-tech-flows.js:2:32}}
```

## Unscaled technosphere flows

This method returns the inputs and outputs of the linked product and waste flows
of a process \\(j\\) related to the quantitative reference of that process,
without applying a scaling factor. Mathematically, it is just the column \\(j\\)
of the technology matrix \\(A\\):

$$
A[:, j]
$$

|             |                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------- |
| REST        | `GET result/{result-id}/unscaled-tech-flows-of/{tech-flow}`                                  |
| JSON-RPC    | `result/unscaled-tech-flows-of`                                                              |
| Python IPC  | `Result.get_unscaled_tech_flows_of`                                                          |
| Parameter   | [`TechFlow`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)                 |
| Return type | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |

### Examples

#### JSON-RPC via Fetch API

```js,run
{{#include unscaled-tech-flows.js:2:29}}
```
