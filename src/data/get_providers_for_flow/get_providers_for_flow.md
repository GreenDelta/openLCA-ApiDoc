# Get providers for a flow

This method returns the processes that produce a given product (as output) or
provide the treatment of a given waste flow (as input). Thus, the flow parameter
of this method needs to be a product or waste flow (or an ID of that flow). The
returned providers can be linked to respective product inputs or waste outputs
of other processes in a product system.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get/providers` | `GET data/providers/{id}` | `@id` of the flow | [`List[TechFlow]`](https://greendelta.github.io/olca-schema/classes/TechFlow.html) |

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include get_providers_for_flow.js}}
```

## Python IPC

```py
{{#include get_providers_for_flow.py}}
```
