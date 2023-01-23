import olca_ipc as ipc
import olca_schema as schema

client = ipc.Client()
mass_ref = client.get_descriptor(schema.FlowProperty, name="Mass")
print(mass_ref)
# Ref(
#   id='93a60a56-a3c8-11da-a746-0800200b9a66',
#   category='Technical flow properties',
#   name='Mass',
# ...
