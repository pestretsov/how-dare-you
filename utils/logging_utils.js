function log(msg) {
    const bkg = chrome.extension.getBackgroundPage();
    bkg.console.log(msg);
}
