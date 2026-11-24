import olca_ipc as ipc
import olca_schema as o

client = ipc.Client()
providers = client.get_providers(
    flow=o.Ref(id="7f6bb533-2d3c-43a6-ac60-6eef299d7c52")
)
for p in providers:
    print(p)
# TechFlow(
#   provider=Ref(id='71dab7ae-4d58-4f73-8449-5967c296bcde', ...
#   flow=Ref(id='7f6bb533-2d3c-43a6-ac60-6eef299d7c52', ...
