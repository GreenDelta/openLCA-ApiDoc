import olca_ipc as ipc
import olca_schema as o

client = ipc.Client()
refs = client.get_descriptors(o.FlowProperty)
for ref in refs:
    print(ref.name)
# Area
# Area*time
# Duration
# Energy
