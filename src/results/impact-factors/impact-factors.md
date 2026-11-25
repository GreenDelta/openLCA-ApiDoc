# Impact factors

These methods return the characterisation factors of an impact category and
the contributions of the intervention flows to the result of an impact category.

| Method              | Parameters                   | Returns                                                                                      | Formula                 |
| ------------------- | ---------------------------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| `impact-factors-of` | `impactCategory`             | [`List[EnviFlowValue]`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) | \\(C[k, :]\\)           |
| `impact-factor-of`  | `impactCategory`, `enviFlow` | [`EnviFlowValue`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html)       | \\(C[k, i]\\)           |
| `flow-impacts-of`   | `impactCategory`             | [`List[EnviFlowValue]`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) | \\(C[k, :] diag(g)\\)   |
| `flow-impact-of`    | `impactCategory`, `enviFlow` | [`EnviFlowValue`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html)       | \\(C[k, i] \ g_i\\)     |

## Impact factors

The method `impact-factors-of` returns the characterisation factors of an
impact category \\(k\\) for the intervention flows of the result. Mathematically,
it is the row \\(C[k, :]\\) of the characterisation matrix \\(C\\). The method
`impact-factor-of` returns the characterisation factor \\(C[k, i]\\) of a single
flow \\(i\\).

## Flow impacts

The method `flow-impacts-of` returns the contribution of each intervention flow
\\(i\\) to the result of an impact category \\(k\\). Mathematically, it is the
row \\(k\\) of the characterisation matrix \\(C\\) multiplied with the inventory
result \\(g\\):

$$
C[k, :] \ diag(g)
$$

The method `flow-impact-of` returns the impact \\(C[k, i] \ g_i\\) of a single
flow \\(i\\).
