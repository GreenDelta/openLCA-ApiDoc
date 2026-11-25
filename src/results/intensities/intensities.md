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

| Method                  | Parameters                   | Returns                                                                                      | Formula                 |
| ----------------------- | ---------------------------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| `flow-intensities-of`   | `techFlow`                   | [`List[EnviFlowValue]`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) | \\(M[:, j]\\)           |
| `flow-intensity-of`     | `enviFlow`, `techFlow`       | [`EnviFlowValue`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html)       | \\(M[i, j]\\)           |
| `impact-intensities-of` | `techFlow`                   | [`List[ImpactValue]`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html)     | \\(N[:, j]\\)           |
| `impact-intensity-of`   | `impactCategory`, `techFlow` | [`ImpactValue`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html)           | \\(N[k, j]\\)           |
| `cost-intensities-of`   | `techFlow`                   | `number`                                                                                     | \\(q^T A^{-1}[:, j]\\)  |

## Intervention flows

The intensities of the intervention flows are given by the intensity matrix
\\(M\\):

$$
M = B \ A^{-1}
$$

The method `flow-intensities-of` returns the column \\(M[:, j]\\), the
intervention flows related to one unit of the technosphere flow \\(j\\), and
`flow-intensity-of` the intensity \\(M[i, j]\\) of a single flow \\(i\\).

## Impact categories

The intensities of the impact categories are given by the impact intensity
matrix \\(N\\):

$$
N = C \ B \ A^{-1} = C \ M
$$

The method `impact-intensities-of` returns the column \\(N[:, j]\\), the impacts
related to one unit of the technosphere flow \\(j\\), and `impact-intensity-of`
the intensity \\(N[k, j]\\) of a single impact category \\(k\\).

### Examples

#### JSON-RPC via Fetch API

```js,run
{{#include impact-intensities.js:body}}
```

## Costs

The method `cost-intensities-of` returns the life cycle costs related to one
unit of the technosphere flow \\(j\\). Via JSON-RPC, the value is returned as
plain number:

$$
q^T A^{-1}[:, j]
$$
