// This would delete the source that we created in the put-example ... so
// nothing bad should happen
const v = await call("data/delete", {
  "@type": "Source",
  "@id": "91bbc461-4ce1-4f83-b95d-de0909575174",
});
console.log(v);
