function notification_trigger(urls, details) {
    const bkg = chrome.extension.getBackgroundPage();

    const res = urls.filter(url => details.url.includes(url));
    if (res.length > 0) {
        alert("HOW DARE YOU!")
    }
};
    
const filter = {urls: ["<all_urls>"]};

const opt_extraInfoSpec = [];

const urls = ["youtube.com/"]

chrome.webNavigation.onCompleted.addListener(details => notification_trigger(urls, details));
