import olca_ipc as ipc
import olca_schema as o

client = ipc.Client()
mass = client.get(o.FlowProperty, name="Mass")
print(mass)
# FlowProperty(
#   name='Mass',
#   id='93a60a56-a3c8-11da-a746-0800200b9a66',
#   unit_group=Ref(id='93a60a57-a4c8-11da-a746-0800200c9a66', ...
