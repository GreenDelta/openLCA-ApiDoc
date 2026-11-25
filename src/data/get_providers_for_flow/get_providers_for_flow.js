// Change the ID of the flow for which you want to get the possible providers.
const v = await call("data/get/providers", {
  "@type": "Flow",
  "@id": "761145b7-3abe-48a5-a426-da5da6c36674",
});
console.log(v);
