function notification_trigger(blacklist_urls, details) {
    const parsed_url = parse_url(details.url);
    const domain = parsed_url.domain;
    
    if (blacklist_urls.includes(domain)) {
        alert("HOW DARE YOU!");
    }
};

const blacklist_urls = ["youtube.com", "kinovod.net"]; // shouldn't be hardcoded -- mb get it from user's settings?

chrome.webNavigation.onCompleted.addListener(details => notification_trigger(blacklist_urls, details));
