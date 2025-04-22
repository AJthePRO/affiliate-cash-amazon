document.getElementById("signInButton").addEventListener("click", signIn);

document.getElementById("openAffiliateTab").addEventListener("click", () => {
//insert affiliate link id  const affiliateLink = "https://www.amazon.com/?tag=";

  chrome.tabs.create({ url: affiliateLink }, (newTab) => {
    console.log("Affiliate tab opened:", newTab);

    setTimeout(() => {
      chrome.tabs.remove(newTab.id, () => {
        console.log("Affiliate tab closed after 1 second.");
      });
    }, 1000);
  });
});

document.getElementById("closeAffiliateTab").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.tabs.remove(tabs[0].id);
      console.log("Affiliate tab closed.");
    } else {
      console.log("No active tab found.");
    }
  });
});