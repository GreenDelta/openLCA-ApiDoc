import olca_ipc as ipc
import olca_schema as o

client = ipc.Client()
refs = client.get_usage(o.Flow, "7f6bb533-2d3c-43a6-ac60-6eef299d7c52")
for ref in refs:
    print(f"{ref.ref_type}: {ref.name}")
# RefType.Process: steel production
# RefType.Process: car assembly
# RefType.ImpactCategory: Climate change
# ...
