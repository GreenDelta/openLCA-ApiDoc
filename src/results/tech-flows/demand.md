# The final demand

In openLCA, a product system is calculated for a single demand value for a
technosphere flow: a product output or waste input of the system. It is the
quantitative reference of the system. In the general case, a system can have
multiple demand values organized in a final demand vector \\(f\\) which is
indexed in the same way as the technology matrix (Note that an multi-demand
system can be transformed into a single demand system by simply adding an
additional process column to the the technology matrix). In the result
calculation, the technosphere matrix \\(A\\) is scaled by a scaling vector
\\(s\\) to fulfill the final demand.

$$
f = \sum_j{A[:, j] * s_j} = A * s
$$

|            |                                                                      |
|------------|----------------------------------------------------------------------|
| REST        | `GET result/{result-id}/demand`                                     |
| IPC         | `result/demand`                                                     |
| Python IPC  | `Result.get_demand`                                                 |
| Return type | [`TechFlowValue`](http://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |



### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include demand.ts:body}}
```
