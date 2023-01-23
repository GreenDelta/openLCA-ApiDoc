# Impact assessment result

This method returns the impact assessment result of the calculated product
system. It can be calculated by multiplying the characterisation matrix \\(C\\)
with the inventory result \\(g\\):

$$
h = C * g
$$

|            |                                                                      |
|------------|----------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-impacts`                              |
| IPC         | `result/total-impacts`                                              |
| Python IPC  | `Result.get_total_impacts`                                          |
| Return type | [`List[ImpactValue]`](http://greendelta.github.io/olca-schema/classes/ImpactValue.html) |

It is also possible to get the impact result \\(h_k\\) for a single impact category
\\(k\\):

|            |                                                                                       |
|------------|---------------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-impact-value-of/{impact-category}`                     |
| IPC         | `result/total-impact-value-of`                                                       |
| Python IPC  | `Result.get_total_impact_value_of`                                                   |
| Return type | [`ImpactValue`](http://greendelta.github.io/olca-schema/classes/ImpactValue.html)                  |
| Parameter type | [`Ref[ImpactCategory]`](http://greendelta.github.io/olca-schema/classes/Ref.html) |


## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include impact-result.ts:body}}
```
