# Get the parameters of a data set

Returns the local parameters defined for the specified root entity:

* Processes and impact categories: Returns a list of `Parameter` objects.

* Product systems: Returns a list of `ParameterRedef` objects (parameter redefinitions).

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get/parameters` | `GET data/{type}/{id}/parameters` | `@type`, `@id` | [`List[Parameter]`](https://greendelta.github.io/olca-schema/classes/Parameter.html) or [`List[ParameterRedef]`](https://greendelta.github.io/olca-schema/classes/ParameterRedef.html) |

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include get_parameters.js}}
```

## Python IPC

```py
{{#include get_parameters.py}}
```
