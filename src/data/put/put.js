// This will insert the given source data set into the database, if it already
// exists there, it will update it. (In openLCA, press F5 in the navigation to
// see it after the method call.)
const v = await call("data/put", {
  "@type": "Source",
  "@id": "91bbc461-4ce1-4f83-b95d-de0909575174",
  "name": "Inter-process communication with openLCA",
  // ...
});
console.log(v);
