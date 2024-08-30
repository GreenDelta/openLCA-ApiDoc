(async () => {
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "data/get",
      params: {
        "@type": "FlowProperty",
        "name": "Mass",
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   result: {
  //     "@type": "FlowProperty",
  //     "@id": "93a60a56-a3c8-11da-a746-0800200b9a66",
  //     name: "Mass",
  //     category: "Technical flow properties",
  //     version: "00.00.000",
  //     flowPropertyType: "PHYSICAL_QUANTITY",
})();