# Total process results

The total result of a process (technosphere flow) \\(j\\) is the result related
to the total requirements \\(t_j\\) of that flow in the calculated product
system. It includes the direct, upstream, and downstream contributions related
to \\(t_j\\). Mathematically, it is the [intensity](../intensities/intensities.md)
of the flow scaled by its [totality
factor](../requirements/requirements.md#totality-factors) \\(tf_j\\).

| Method                   | Parameters                   | Returns                                                                                      | Formula                        |
| ------------------------ | ---------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------ |
| `total-interventions-of` | `techFlow`                   | [`List[EnviFlowValue]`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) | \\(M[:, j] \ tf_j\\)           |
| `total-intervention-of`  | `enviFlow`, `techFlow`       | [`EnviFlowValue`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html)       | \\(M[i, j] \ tf_j\\)           |
| `total-impacts-of`       | `techFlow`                   | [`List[ImpactValue]`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html)     | \\(N[:, j] \ tf_j\\)           |
| `total-impact-of`        | `impactCategory`, `techFlow` | [`ImpactValue`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html)           | \\(N[k, j] \ tf_j\\)           |
| `total-costs-of`         | `techFlow`                   | `number`                                                                                     | \\(q^T A^{-1}[:, j] \ tf_j\\)  |
| `total-cost-values`¹     |                              | [`List[TechFlowValue]`](https://greendelta.github.io/olca-schema/classes/TechFlowValue.html) | \\(q^T A^{-1} diag(tf)\\)    |

¹ only available via REST

## Intervention flows

The method `total-interventions-of` returns the total intervention flows of a
technosphere flow \\(j\\): the column \\(j\\) of the intensity matrix \\(M\\)
scaled by the totality factor \\(tf_j\\). The method `total-intervention-of`
returns this value for a single flow \\(i\\).

## Impact categories

The method `total-impacts-of` returns the total impacts of a technosphere flow
\\(j\\): the column \\(j\\) of the impact intensity matrix \\(N\\) scaled by the
totality factor \\(tf_j\\). The method `total-impact-of` returns this value for
a single impact category \\(k\\).

### Examples

#### JSON-RPC via Fetch API

```js,run
{{#include total-impacts.js:body}}
```

## Costs

The method `total-costs-of` returns the total life cycle costs of a technosphere
flow \\(j\\). Via JSON-RPC, the value is returned as plain number. Via REST,
the method `total-cost-values` returns the total life cycle costs of all
technosphere flows.
