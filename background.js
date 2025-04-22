// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "showPopup") {
    console.log("Amazon checkout page detected. Show popup.");
    sendResponse({ success: true });
  }
});

// Check for a specific pattern in web requests
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const detectedUrl = details.url;

    // Regular expression to match the Amazon checkout URL
    const specialPattern = /https:\/\/www\.amazon\.com\/checkout\/entry\/cart\?oldCustomerId=/;

    // URL to open when the pattern is detected
    //insert your affliate link const newUrl = "https://www.amazon.com/?tag=";

    if (specialPattern.test(detectedUrl)) {
      console.log(`Pattern detected in URL: ${detectedUrl}`);

      // Open the specific URL in a new tab
      chrome.tabs.create({ url: newUrl, active: true }, (newTab) => {
        // Close the tab after 1 second
        setTimeout(() => {
          chrome.tabs.remove(newTab.id, () => {
            console.log("Affiliate tab closed after 1 second.");
          });
        }, 1000);
      });
    }
  },
  {
    urls: ["*://www.amazon.com/*"] 
  }
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "trackPurchase") {
    console.log("Tracking purchase:", message.amount);

  }
});