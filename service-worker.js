const LOGIN_PW  = "Template=userpass_key";
const LOGIN_IDG = "Template=idg_key";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete") return;
  const url = tab.url || "";
  if (!url.includes("portal.nap.gsic.titech.ac.jp")) return;

  if (url.includes(LOGIN_PW) || url.includes(LOGIN_IDG)) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["content.js"]
    }).catch(err => console.error("inject failed:", err));
  }
});
