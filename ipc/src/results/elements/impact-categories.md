# Impact categories

This method returns the \\(l\\) impact categories of a result.
The rows of the impact matrix \\(C\\) are indexed by these
impact categories and the columns by the \\(m\\) intervention
flows of the system. \\(C\\) contains the respective characterisation
factors of the intervention flows.

$$
C \in \mathbb{R}^{l \times m}
$$

|            |                                        |
|------------|----------------------------------------|
| REST       | `result/{result-id}/impact-categories` |
| IPC        | `result/impact-categories`             |
| Python IPC | `Result.get_impact_categories`         |
| Return type | [`List[Ref[ImpactCategory]]`](http://greendelta.github.io/olca-schema/classes/Ref.html) |


## Examples

### Python IPC

```py
{{#include _elements.py:impacts}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include impact-categories.ts:2:31}}
```
