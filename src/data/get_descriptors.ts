(async () => {
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "data/get/descriptors",
      params: {
        "@type": "FlowProperty"
      }
    })
  });
  let descriptors = await resp.json();
  console.log(descriptors);
  // {
  //   jsonrpc: "2.0",
  //   id: 1,
  //   result: [
  //     {
  //       "@type": "FlowProperty",
  //       "@id": "838aaa20-0117-11db-92e3-0800200c9a66",
  //       name: "Goods transport (mass*distance)",
  //       category: "Technical flow properties",
  //       refUnit: "t*km"
  //     },
})();