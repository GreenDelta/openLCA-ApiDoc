# Technosphere requirements

These methods return results for the technosphere flows of the calculated
product system: the final demand, the scaling factors, the total requirements,
the totality factors, and the scaled or unscaled inputs and outputs of the
technosphere flows of a single process.

| Method                   | Parameters | Returns                                                                                      | Formula                      |
| ------------------------ | ---------- | -------------------------------------------------------------------------------------------- | ---------------------------- |
| `demand`                 |            | [`TechFlowValue`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html)       | \\(f\\)                      |
| `scaling-factors`        |            | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) | \\(s\\)                      |
| `total-requirements`     |            | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) | \\(t\\)                      |
| `total-requirements-of`  | `techFlow` | [`TechFlowValue`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html)       | \\(t_j\\)                    |
| `totality-factors`¹      |            | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) | \\(tf\\)                     |
| `totality-factor-of`¹    | `techFlow` | [`TechFlowValue`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html)       | \\(tf_j\\)                   |
| `scaled-tech-flows-of`   | `techFlow` | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) | \\(s_j A[:, j]\\)            |
| `unscaled-tech-flows-of` | `techFlow` | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) | \\(A[:, j]\\)                |

¹ only available via JSON-RPC

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

### Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include demand.js}}
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

### Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include scaling-factors.js}}
```

## Total requirements

The total requirements of the technosphere flows are the amounts that are
needed to fulfill the demand of the calculated product system. Mathematically,
this is the diagonal of the technology matrix \\(A\\) scaled by the scaling
vector \\(s\\):

$$
t = diag(s) \ diag(A)
$$

The method `total-requirements` returns the total requirements of all
technosphere flows and `total-requirements-of` the total requirements
\\(t_j = s_j \ A[j, j]\\) of a single technosphere flow \\(j\\).

### Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include total-requirements.js}}
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

As the calculation of a totality factor \\(tf_j\\) requires to solve the
complete system for one unit of technosphere flow \\(j\\), it is almost always a
better idea to only query the totality factors that are really needed via
`totality-factor-of` instead of `totality-factors`.

## Scaled technosphere flows

The method `scaled-tech-flows-of` returns the scaled inputs and outputs of the
linked product and waste flows of a process \\(j\\) related to the final demand
of the product system. Mathematically, it is the scaled column \\(j\\) of the
technology matrix \\(A\\):

$$
s_j \ A[:,j]
$$

The returned values are negative for inputs and positive for outputs of the
respective flows. Also, the returned values contain the total requirements of
the technosphere flow \\(j\\) to which the other requirements are related.

### Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include scaled-tech-flows.js}}
```

## Unscaled technosphere flows

The method `unscaled-tech-flows-of` returns the inputs and outputs of the linked
product and waste flows of a process \\(j\\) related to the quantitative
reference of that process, without applying a scaling factor. Mathematically, it
is just the column \\(j\\) of the technology matrix \\(A\\):

$$
A[:, j]
$$

### Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include unscaled-tech-flows.js}}
```
