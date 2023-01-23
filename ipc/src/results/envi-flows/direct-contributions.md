# Direct contributions

This method returns the direct contribution of each process \\(j\\) in the
system to the inventory result of a flow \\(i\\). Mathematically, it is
the row \\(G[i, :]\\) of the scaled intervention matrix \\(G\\):

$$
G = B * diag(s)
$$

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/direct-flow-values-of/{envi-flow}`                     |
| IPC         | `result/direct-flow-values-of`                                                 |
| Python IPC  | `Result.get_direct_flow_values_of`                                             |
| Return type | [`List[TechFlowValue]`](http://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |
| Parameter type | [`EnviFlow`](http://greendelta.github.io/olca-schema/classes/EnviFlow.html) |


## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include direct-contributions.ts:2:32}}
```

