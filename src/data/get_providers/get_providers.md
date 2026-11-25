# Get providers of technosphere flows 

Returns the available process–flow provider pairs for technosphere flows
(products and waste flows) that can be linked inside a product system:

* Products: Providers are processes that generate the product as an output
  (linkable to product inputs of other processes).

* Waste flows: Providers are waste treatment processes that accept the waste as
  an input (linkable to waste outputs of other processes).

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
