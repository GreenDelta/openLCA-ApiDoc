import olca_ipc as ipc
import olca_schema as o

client = ipc.Client()
process = client.get(o.Process, "eacc4872-6f4e-4ff1-946e-c1bddeda24be")
print(process)
# Process(
#   id='eacc4872-6f4e-4ff1-946e-c1bddeda24be',
#   exchanges=[Exchange(amount=1.0, flow=Ref(id='b254bbdf- ...
