# Get the usage of a data set

Returns references to the data sets that use a specified data set. For
example, for a flow, these are the processes that have the flow as an input or
output, the impact categories with characterization factors for that flow, etc.
For a process, these are the product systems that contain the process, and so
on. If the data set is not used anywhere, an empty list is returned. This is
the same search that openLCA runs before a data set is deleted.

|             |                               |
| ----------- | ----------------------------- |
| Rest API    | `GET /data/{type}/{id}/usage` |
| JSON-RPC    | `data/get/usage`              |
| Python/IPC  | `Client.get_usage`            |
| Return type | [`List[Ref]`](https://greendelta.github.io/olca-schema/classes/Ref.html) |


## Examples

### Python IPC

```py
{{#include get_usage.py}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include get_usage.ts}}
```
