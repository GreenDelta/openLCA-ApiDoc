// Modify the type or ID and maybe do not take the ID of a flow that is used in
// thousands of processes...
const v = await call("data/get/usage", {
  "@type": "Flow",
  "@id": "e87f039d-d9ce-4242-ac18-c9284cc80f3d",
});
console.log(v);
