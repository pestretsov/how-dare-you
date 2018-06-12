const url_regex = RegExp("^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)");

function get_domain(url) {
    return url_regex.exec(url)[1];
}

function parse_url(url) {
    return {
        domain: get_domain(url),
        full: url
    };
}
