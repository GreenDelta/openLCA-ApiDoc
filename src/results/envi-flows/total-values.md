# Total values

This method returns for each process \\(j\\) in the product system the total
inventory result for a flow \\(j\\) at this point in the supply chain including
the direct, upstream, and downstream (related to waste treatment) contributions.
Mathematically, this is the row \\(i\\) of the intensity matrix \\(M\\) scaled
by the totality factors \\(tf\\):

$$
M[i,:] * diag(tf)
$$

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-flow-values-of/{envi-flow}`                      |
| IPC         | `result/total-flow-values-of`                                                  |
| Python IPC  | `Result.get_total_flow_values_of`                                              |
| Return type | [`List[TechFlowValue]`](http://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |
| Parameter type | [`EnviFlow`](http://greendelta.github.io/olca-schema/classes/EnviFlow.html) |


## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include total-values.ts:2:32}}
```
