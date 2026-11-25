// You need to change the ID of the product system for which you want to get the
// possible parameters. You can also change the type to Process or
// ImpactCategory to get defined parameters of these types.
const v = await call("data/get/parameters", {
  "@type": "ProductSystem",
  "@id": "eb00c506-35d1-4046-8018-f70573d67e60",
});
console.log(v);
