(async () => {
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "data/get/all",
      params: {
        "@type": "UnitGroup"
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   result: [
  //     {
  //       "@type": "UnitGroup",
  //       "@id": "838aaa21-0117-11db-92e3-0800200c9a66",
  //       name: "Units of mass*length",
  //       category: "Technical unit groups",
  //       version: "00.00.000",
  //       defaultFlowProperty: {
})();