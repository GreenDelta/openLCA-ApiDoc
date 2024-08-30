# Delete a data set

Deletes the specified data set from the database. This method is not available
when the server runs in read-only mode.

|              |                                                                    |
| ------------ | ------------------------------------------------------------------ |
| Rest API     | `DELETE /data/{type}/{id}`                                         |
| JSON-RPC     | `data/delete`                                                      |
| Python/IPC   | `Client.delete`                                                    |
| Return type: | [`Ref`](https://greendelta.github.io/olca-schema/classes/Ref.html) |


## Examples

### Python IPC

```py
{{#include delete.py}}
```


### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include delete.ts:2:20}}
```
