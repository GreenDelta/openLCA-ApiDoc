import olca_ipc as ipc
import olca_schema as schema

client = ipc.Client()
ref = client.put(schema.Source(name="Inter-process communication with openLCA"))
print(ref)
# Ref(
#     id="16cba9b2-2987-4735-9f3e-96fedf8449dd",
#     name="Inter-process communication with openLCA",
#     model_type="Source",
# )
