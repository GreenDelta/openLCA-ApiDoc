# Weighted results

This method returns the weighted impact assessment result of the calculated
product system. Mathematically, it is the impact assessment result \\(h\\)
devided by the respective normalization values \\(nv\\) and multiplied with
the respective weighting factors \\(w\\):

$$
diag(w) * diag(nv)^{-1} * h
$$

|            |                                                                      |
|------------|----------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-impacts/weighted`                      |
| IPC         | `result/total-impacts/weighted`                                      |
| Python IPC  | `Result.get_total_impacts_weighted`                                  |
| Return type | [`List[ImpactValue]`](http://greendelta.github.io/olca-schema/classes/ImpactValue.html) |


## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include weighted.ts:body}}
```

### olca-ipc.py

The example below shows how to get weighted impact assessment results using
olca-ipc.py:

```py
{{#include weighted.py}}
```
