# Get providers for a flow

This method returns the processes that produce a given product (as output) or
provide the treatment of a given waste flow (as input). Thus, the flow parameter
of this method needs to be a product or waste flow (or an ID of that flow). The
returned providers can be linked to respective product inputs or waste outputs
of other processes in a product system.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get/providers` | `GET data/providers/{id}` | `@id` of the flow | [`List[TechFlow]`](https://greendelta.github.io/olca-schema/classes/TechFlow.html) |

## Examples

### Python IPC

```py
{{#include get_providers_for_flow.py}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/). It uses the [`call`
helper](../../intro.md#running-the-javascript-examples) for the JSON-RPC calls.

```js,run
{{#include get_providers_for_flow.js}}
```
