import olca_ipc as ipc
import olca_schema as o

client = ipc.Client()
process_ref = client.find(o.Process, "aluminium foil production")
config = o.LinkingConfig(
    prefer_unit_processes=True,
    provider_linking=o.ProviderLinking.PREFER_DEFAULTS,
)
system_ref = client.create_product_system(process_ref, config)
print(f"created product system {system_ref.name}, id={system_ref.id}")
# created product system aluminium foil production, id=fbc33e47-ee...
