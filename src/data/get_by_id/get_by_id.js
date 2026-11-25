// This should return the flow property "Mass" when you are connected to a
// database with openLCA reference data. Try to change the type to Process with
// an ID from your database for example.
const v = await call("data/get", {
  "@type": "FlowProperty",
  "@id": "93a60a56-a3c8-11da-a746-0800200b9a66"
});
console.log(v);
