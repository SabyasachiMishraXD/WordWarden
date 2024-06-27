chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "checkGrammar",
      title: "Check Grammar",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "checkGrammar") {
      const selectedText = info.selectionText;
      chrome.tabs.sendMessage(tab.id, { text: selectedText });
    }
  });
  