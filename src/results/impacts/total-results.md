# Total process result

This method returns the total impact result related to the total requirements \\(t_j\\) of
a technosphere flow \\(j\\) in the calculated product system. This includes the direct,
upstream, and downstream contributions related to $t_j$. Mathematically, it is the column
\\(j\\) of the impact intensity matrix \\(N\\) scaled by the totality factor \\(tf_j\\):


$$
M[:,j] * tf_j
$$


|                |                                                                                         |
| -------------- | --------------------------------------------------------------------------------------- |
| REST           | `GET result/{result-id}/total-impacts-of/{tech-flow}`                                   |
| IPC            | `result/total-impacts-of`                                                               |
| Python IPC     | `Result.get_total_impacts_of`                                                           |
| Return type    | [`List[ImpactValue]`](http://greendelta.github.io/olca-schema/classes/ImpactValue.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html)             |


It is also possible to get the total impact result for a single impact category:


|                |                                                                                   |
| -------------- | --------------------------------------------------------------------------------- |
| REST           | `GET result/{result-id}/total-impact-of/{impact-category}/{tech-flow}`            |
| IPC            | `result/total-impact-of`                                                          |
| Python IPC     | `Result.get_total_impact_of`                                                      |
| Return type    | [`ImpactValue`](http://greendelta.github.io/olca-schema/classes/ImpactValue.html) |
| Parameter type | [`Ref[ImpactCategory]`](http://greendelta.github.io/olca-schema/classes/Ref.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html)       |


## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include total-results.ts:body}}
```
