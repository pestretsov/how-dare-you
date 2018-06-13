function is_url_in_list(url, list) {
    log(list);
    return list.filter(u => u.domain === url.domain && u.category === url.category).length > 0;
};

function notification_trigger(blacklist, whitelist, url) {
    if (is_url_in_list(url, whitelist)) {
        return;
    }

    if (is_url_in_list(url, blacklist)) {
        alert("HOW DARE YOU!");
    }
};

const blacklist = ["youtube.com", "kinovod.net"]; // shouldn't be hardcoded -- mb get it from user's settings?
const whitelist = ["youtube.com/embed"]; 

const parsed_blacklist = blacklist.map(url => parse_url(url));
const parsed_whitelist = whitelist.map(url => parse_url(url));

chrome.webNavigation.onCompleted.addListener(
    details => notification_trigger(parsed_blacklist, parsed_whitelist, parse_url(details.url))
);
