# Create a product system

This method creates a product system for a given process. It recursively links
the processes of that system according to the given linking configuration.

|              |                                                                                        |
| ------------ | -------------------------------------------------------------------------------------- |
| Rest API     | `GET /data/{type}/all`                                                                 |
| JSON-RPC     | `data/get/all`                                                                         |
| Python IPC   | `Client.get_all`                                                                       |
| Parameter    | [`Ref[Process]`](https://greendelta.github.io/olca-schema/classes/Ref.html)            |
| Parameter    | [`LinkingConfig`](https://greendelta.github.io/olca-schema/classes/LinkingConfig.html) |
| Return type: | [`Ref[ProductSystem]`](https://greendelta.github.io/olca-schema/classes/Ref.html)      |


## Examples

### Python IPC

```py
{{#include create-system.py}}
```
