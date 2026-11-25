const v = await call("data/get", {
  "@type": "FlowProperty",
  "name": "Mass",
});
console.log(v);
// {
//   "@type": "FlowProperty",
//   "@id": "93a60a56-a3c8-11da-a746-0800200b9a66",
//   name: "Mass",
//   category: "Technical flow properties",
//   version: "00.00.000",
//   flowPropertyType: "PHYSICAL_QUANTITY",
