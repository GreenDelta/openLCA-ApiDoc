(async () => {
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "data/get/providers",
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   result: [
  //     {
  //       provider: {
  //         "@type": "Process",
  //         "@id": "ba98a130-d92c-4c40-8fe9-c8cab5b956ab",
  //         name: "electricity production, wind, 1-3MW turbine, onshore",
  //         processType: "LCI_RESULT",
  //         flowType: "PRODUCT_FLOW"
  //       },
})();