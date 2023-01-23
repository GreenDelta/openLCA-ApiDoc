import olca_ipc as ipc
import olca_schema as schema

client = ipc.Client()
refs = client.get_descriptors(schema.FlowProperty)
for ref in refs:
    print(ref.name)
# Area
# Area*time
# Duration
# Energy
