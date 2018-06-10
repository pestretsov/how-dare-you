function notification_trigger(urls, details) {
    const bkg = chrome.extension.getBackgroundPage();

    const res = urls.filter(url => details.url.includes(url));
    if (res.length > 0) {
        alert("HOW DARE YOU!");
    }
};

const urls = ["youtube.com/"]; // shouldn't be hardcoded -- mb get it from user's settings?

chrome.webNavigation.onCompleted.addListener(details => notification_trigger(urls, details));
