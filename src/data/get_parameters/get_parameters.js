const v = await call("data/get/parameters", {
  "@type": "ProductSystem",
  "@id": "0db1eda6-a34e-4c82-b06b-19f27c92495a",
});
console.log(v);
// [
//   { name: "param_a", value: 994, isProtected: false },
//   { name: "param_b", value: 0.7237, isProtected: false },
//   { name: "param_c", value: 0, isProtected: false },
