# Get providers of technosphere flows

Technosphere flows are products or waste flows that can be linked in a product
system model. For products, the providers are processes that produce this
product as output. For waste flows, providers are waste treatment processes
with an input of that waste flow. These provider and flow pairs can be linked
to product inputs and waste outputs of other processes in a product system.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get/providers` | `GET data/providers` | | [`List[TechFlow]`](https://greendelta.github.io/olca-schema/classes/TechFlow.html) |

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include get_providers.js}}
```

## Python IPC

```py
{{#include get_providers.py}}
```
