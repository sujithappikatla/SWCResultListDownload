

// on Install of Extension this Callback is called
// chrome.runtime.onInstalled.addListener(() => {

// });
 


chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
  
        console.log("Tab Loaded");
        console.log(tab.title);
        console.log(tab.url);
  
    }
});

// chrome.action.onClicked.addListener(function(tab) {
//     console.log("Click Loaded");
//     // alert('working?');
// });

// chrome.extension.onRequest.addListener(
//     function(request, sender, sendResponse) {
//       // LOG THE CONTENTS HERE
//       console.log(request.content);
//     });


chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  });