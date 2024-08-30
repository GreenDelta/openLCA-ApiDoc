# The currency of cost results

This method returns the currency of cost results if available. This is typically
the reference currency of the underlying database.

|            |                                                                      |
|------------|----------------------------------------------------------------------|
| REST        | `GET result/{result-id}/currency`                                   |
| IPC         | `result/currency`                                                   |
| Python IPC  | `Result.get_currency`                                               |
| Return type | [`Ref[Currency]`](http://greendelta.github.io/olca-schema/classes/Ref.html) |

## Examples

### Python IPC

```py
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include costs.ts:body}}
```

