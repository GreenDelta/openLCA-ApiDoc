import olca_ipc as ipc
import olca_schema as o

client = ipc.Client()
ref = client.delete(
    o.Ref(ref_type=o.RefType.Source, id="16cba9b2-2987-4735-9f3e-96fedf8449dd")
)
print(ref)
# Ref(
#     id="16cba9b2-2987-4735-9f3e-96fedf8449dd",
#     name="Inter-process communication with openLCA",
# ...
