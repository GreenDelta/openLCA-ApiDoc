# Get providers for a flow

Returns the provider processes (`Ref`) for a specific product or waste flow
(passed as a flow reference or ID):

* Product flow: Returns processes that produce the product as an output.

* Waste flow: Returns waste treatment processes that accept the waste as an input.

The returned providers can be linked to matching product inputs or waste outputs
in a product system.

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
