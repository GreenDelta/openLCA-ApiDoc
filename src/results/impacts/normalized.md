# Normalized results

This method returns the normalized impact assessment result of the calculated
product system. Mathematically, it is the impact assessment result \\(h\\)
devided by the respective normalization values \\(nv\\):

$$
diag(nv)^{-1} * h
$$

|            |                                                                      |
|------------|----------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-impacts/normalized`                    |
| IPC         | `result/total-impacts/normalized`                                    |
| Python IPC  | `Result.get_total_impacts_normalized`                                |
| Return type | [`List[ImpactValue]`](http://greendelta.github.io/olca-schema/classes/ImpactValue.html) |

## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include normalized.ts:body}}
```

