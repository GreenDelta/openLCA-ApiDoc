# Get providers of technosphere flows

Technosphere flows are products or waste flows that can be linked in a product
system model. For products, the providers are processes that produce this
product as output. For waste flows, providers are waste treatment processes
with an input of that waste flow. These provider and flow pairs can be linked
to product inputs and waste outputs of other processes in a product system.

|              |                                                                                    |
| ------------ | ---------------------------------------------------------------------------------- |
| Rest API     | `GET /data/providers`                                                              |
| JSON-RPC     | `data/get/providers`                                                               |
| Python IPC   | `Client.get_providers`                                                             |
| Return type: | [`List[TechFlow]`](https://greendelta.github.io/olca-schema/classes/TechFlow.html) |

## Examples

### Python IPC

```py
{{#include get_providers.py}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include get_providers.ts:2:22}}
```
