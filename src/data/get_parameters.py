import olca_ipc as ipc
import olca_schema as o

client = ipc.Client()
params = client.get_parameters(
    o.ProductSystem, "0db1eda6-a34e-4c82-b06b-19f27c92495a"
)
for p in params:
    print(f"{p.name}: {p.value}")
# param1: 42
# param2: 21
# ...
