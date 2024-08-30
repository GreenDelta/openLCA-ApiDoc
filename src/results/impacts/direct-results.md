# Direct process result

This method returns the direct impacts of a process \\(j\\) in the
calculated product system. Mathematically, it is the column \\(H[:, j]\\)
of the direct impact matrix:

$$
H = C * B * diag(s)
$$

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/direct-impacts-of/{tech-flow}`                         |
| IPC         | `result/direct-impacts-of`                                                     |
| Python IPC  | `Result.get_direct_impacts_of`                                                 |
| Return type | [`List[ImpactValue]`](http://greendelta.github.io/olca-schema/classes/ImpactValue.html)            |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html) |

It is also possible to get the direct process result \\(H[k, j]\\) for a single
impact category \\(k\\):

|            |                                                                                       |
|------------|---------------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/direct-impact-of/{impact-category}/{tech-flow}`              |
| IPC         | `result/direct-impact-of`                                                            |
| Python IPC  | `Result.get_direct_impact_of`                                                        |
| Return type | [`ImpactValue`](http://greendelta.github.io/olca-schema/classes/ImpactValue.html)                  |
| Parameter type | [`Ref[ImpactCategory]`](http://greendelta.github.io/olca-schema/classes/Ref.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html)       |


## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include direct-results.ts:body}}
```
