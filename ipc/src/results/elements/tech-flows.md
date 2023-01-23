# Technosphere flows

This method returns the \\(n\\) technosphere flows of a result. These are the flows
by which the processes of the calculated system are linked. Each
technosphere flow is a pair of a product or waste flow and a provider where the
provider is typically a process but can also be a product system (a sub-system)
or even another result. The technosphere matrix \\(A\\) is symmetrically indexed
by these technosphere flows:

$$
A \in \mathbb{R}^{n \times n}
$$

|            |                                 |
|------------|---------------------------------|
| REST       | `result/{result-id}/tech-flows` |
| IPC        | `result/tech-flows`             |
| Python IPC | `Result.get_tech_flows`         |
| Return type | [`List[TechFlow]`](http://greendelta.github.io/olca-schema/classes/TechFlow.html) |


## Examples

### Python IPC

```py
{{#include ../results_ipc.py:tech-flows}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include tech-flows.ts:body}}
```
