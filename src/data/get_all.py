import olca_ipc as ipc
import olca_schema as o

client = ipc.Client()
for group in client.get_all(o.UnitGroup):
    print(group.name)
# Units of area
# Units of energy
# Units of length
# Units of mass
# ...
