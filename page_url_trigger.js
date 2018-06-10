var callback = function(details) {
    if (details.url.includes("youtube")) {
        var bkg = chrome.extension.getBackgroundPage();
        bkg.console.log('foo');
    }
};
    
var filter = {urls: ["<all_urls>"]};

var opt_extraInfoSpec = [];

chrome.webRequest.onCompleted.addListener(callback, filter, opt_extraInfoSpec);
