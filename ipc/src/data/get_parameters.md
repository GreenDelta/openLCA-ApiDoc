# Get the parameters of a data set

Returns the (local) parameters of the specified data set. In case of processes
and impact categories, a list of parameters is returned. For product systems,
the respective parameter redefinitions are returned.

|              |                          |
|--------------|--------------------------|
| Rest API     | `GET /data/{type}/{id}/parameters` |
| JSON-RPC     | `data/get/parameters`    |
| Python/IPC   | `` |

* Return type:
  * [`List[Parameter]`](https://greendelta.github.io/olca-schema/classes/Parameter.html)
    for processes and impact categories
  * [`List[ParameterRedef]`](https://greendelta.github.io/olca-schema/classes/ParameterRedef.html)
    for product systems


## Examples

### Python IPC

```py
{{#include get_parameters.py}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include get_parameters.ts:2:21}}
```
