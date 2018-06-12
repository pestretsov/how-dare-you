function notification_trigger(blacklist_urls, details) {
    const url = details.url;
    const domain = get_domain_from_url(url);

    if (blacklist_urls.includes(domain)) {
        alert("HOW DARE YOU!");
    }
};

const blacklist_urls = ["youtube.com", "kinovod.net"]; // shouldn't be hardcoded -- mb get it from user's settings?

chrome.webNavigation.onCompleted.addListener(details => notification_trigger(blacklist_urls, details));
