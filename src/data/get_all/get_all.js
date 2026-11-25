// safe for small collections like UnitGroup; avoid Process or Flow in large
// databases
const v = await call("data/get/all", {
  "@type": "UnitGroup"
});
console.log(v);
