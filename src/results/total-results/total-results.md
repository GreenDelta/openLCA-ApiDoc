# Total results

These methods return the overall results of the calculated product system
related to its final demand: the inventory result, the impact assessment result
(also normalized and weighted), and the total life cycle costs.

| Method                       | Parameters       | Returns                                                                                      | Formula                       |
| ---------------------------- | ---------------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| `total-flows`                |                  | [`List[EnviFlowValue]`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) | \\(g\\)                       |
| `total-flow-value-of`        | `enviFlow`       | [`EnviFlowValue`](https://greendelta.github.io/olca-schema/classes/EnviFlowValue.html)       | \\(g_i\\)                     |
| `total-impacts`              |                  | [`List[ImpactValue]`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html)     | \\(h\\)                       |
| `total-impact-value-of`      | `impactCategory` | [`ImpactValue`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html)           | \\(h_k\\)                     |
| `total-impacts/normalized`¹  |                  | [`List[ImpactValue]`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html)     | \\(diag(nv)^{-1} h\\)         |
| `total-impacts/weighted`¹    |                  | [`List[ImpactValue]`](https://greendelta.github.io/olca-schema/classes/ImpactValue.html)     | \\(diag(w) diag(nv)^{-1} h\\) |
| `total-costs`                |                  | [`CostValue`](https://greendelta.github.io/olca-schema/classes/CostValue.html)               | \\(q^T s\\)                   |

¹ Python: `get_normalized_impacts` and `get_weighted_impacts`; olca-ipc.ts:
`getNormalizedImpacts` and `getWeightedImpacts`

## Inventory result

The inventory result \\(g\\) of the calculated product system is the amount
\\(g_i\\) of each intervention flow \\(i\\) that crosses the boundary to the
environment related to the final demand of the product system. It can be
calculated by multiplying the intervention matrix \\(B\\) with the scaling
vector \\(s\\):

$$
g = B s
$$

The method `total-flows` returns the complete inventory result and
`total-flow-value-of` the result \\(g_i\\) of a single flow \\(i\\).

### Examples

#### JSON-RPC via Fetch API

```js,run
{{#include total-flows.js:2:22}}
```

## Impact assessment result

The impact assessment result \\(h\\) of the calculated product system can be
calculated by multiplying the characterisation matrix \\(C\\) with the inventory
result \\(g\\):

$$
h = C g
$$

The method `total-impacts` returns the complete impact assessment result and
`total-impact-value-of` the result \\(h_k\\) of a single impact category
\\(k\\).

### Examples

#### JSON-RPC via Fetch API

```js,run
{{#include total-impacts.js:body}}
```

## Normalized results

If a normalization and weighting set was selected in the calculation setup, the
normalized impact assessment result can be retrieved. Mathematically, it is the
impact assessment result \\(h\\) divided by the respective normalization values
\\(nv\\):

$$
diag(nv)^{-1} h
$$

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

If a normalization and weighting set was selected in the calculation setup, the
weighted impact assessment result can be retrieved. Mathematically, it is the
impact assessment result \\(h\\) divided by the respective normalization values
\\(nv\\) and multiplied with the respective weighting factors \\(w\\):

$$
diag(w) \ diag(nv)^{-1} h
$$

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

If costs were included in the calculation setup, the method `total-costs`
returns the total life cycle costing (LCC) result of the calculated product
system. It is the vector \\(q\\) with the net-costs of the processes multiplied
with the scaling vector \\(s\\). The returned value contains the reference
currency of the database.

$$
q^T s
$$

### Examples

#### olca-ipc.ts

```js,run
{{#include total-costs.js}}
```
