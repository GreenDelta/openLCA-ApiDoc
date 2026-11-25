// This will try to fetch the flow property Mass from your database.
const v = await call("data/get", {
  "@type": "FlowProperty",
  "name": "Mass",
});
console.log(v);
