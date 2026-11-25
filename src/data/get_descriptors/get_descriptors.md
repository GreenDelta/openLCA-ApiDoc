# Get descriptors

This function is useful for exploring the content of a database. It returns a
list of data set descriptors for a given data set type. A descriptor contains
just a few information, like the name or category path, to understand the
content of a data set. Descriptors are valid [data set
references](https://greendelta.github.io/olca-schema/classes/Ref.html); they can
be used to reference a data set in a given context (e.g. referencing a process
as calculation target in a calculation setup).

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get/descriptors` | `GET data/{type}` | `@type` | [`List[Ref]`](https://greendelta.github.io/olca-schema/classes/Ref.html) |

## Examples

### Python IPC

```py
{{#include get_descriptors.py}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/). It uses the [`call`
helper](../../intro.md#running-the-javascript-examples) for the JSON-RPC calls.

```js,run
{{#include get_descriptors.js}}
```
