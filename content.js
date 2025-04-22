(function () {
  function extractPurchaseDetails() {
   
    const amountElement = document.querySelector("order-summary-line-definition"); 
    if (amountElement) {
      const amount = parseFloat(amountElement.innerText.replace(/[^0-9.]/g, ""));
      console.log("Purchase amount:", amount);

      chrome.runtime.sendMessage({ action: "trackPurchase", amount: amount });
    }
  }

  if (window.location.href.includes("checkout/entry/cart?oldCustomerId=")) {
    console.log("Checkout page with oldCustomerId detected.");

    chrome.runtime.sendMessage({ action: "detectCheckout" });


    extractPurchaseDetails();
  }
})();