// lists all possible providers of the database ... it can take a bit until this
// completes and it may returns a huge list depending on your database
const v = await call("data/get/providers");
console.log(v);
