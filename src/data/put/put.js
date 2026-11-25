const v = await call("data/put", {
  "@type": "Source",
  "@id": "91bbc461-4ce1-4f83-b95d-de0909575174",
  "name": "Inter-process communication with openLCA",
  // ...
});
console.log(v);
// {
//   "@type": "Source",
//   "@id": "91bbc461-4ce1-4f83-b95d-de0909575174",
//   name: "Inter-process communication with openLCA"
// }
