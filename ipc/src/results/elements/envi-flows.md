# Intervention flows

This method returns the \\(m\\) intervention flows of a result. These are
the flows that cross the boundary with the environment of the calculated
system (this is why the short name is `EnviFlow` in the API). In regionalized
calculations these flows can be pairs of flows and locations, the same flow
can occur in different locations (with possibly different characterisation
factors). The rows of the intervention matrix are indexed by these \\(m\\)
intervention flows (and the columns by the \\(n\\) technosphere flows): 

$$
B \in \mathbb{R}^{m \times n}
$$

|            |                                 |
|------------|---------------------------------|
| REST       | `result/{result-id}/envi-flows` |
| IPC        | `result/envi-flows`             |
| Python IPC | `Result.get_envi_flows`         |
| Return type | [`List[EnviFlow]`](http://greendelta.github.io/olca-schema/classes/EnviFlow.html) |

## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include envi-flows.ts:body}}
```
