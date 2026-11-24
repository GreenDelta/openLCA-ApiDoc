import sys

import olca_ipc as ipc
import olca_schema as o

client = ipc.Client()

# this example tries to find a process with this name
# and builds a product system from it
process_name = "grape production | grape | Cutoff, U"

process_ref = client.find(o.Process, process_name)
if process_ref is None:
    print(f"Could not find process: {process_name}")
    sys.exit(1)

config = o.LinkingConfig(
    prefer_unit_processes=True,
    provider_linking=o.ProviderLinking.PREFER_DEFAULTS,
)
system_ref = client.create_product_system(process_ref, config)
if system_ref is None:
    print("Failed to create the product system")
    sys.exit(1)
print(f"created product system {system_ref.name}, id={system_ref.id}")
