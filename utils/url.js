const url_regex = RegExp("^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)\/?([^:\/\n]+)?");

function get_domain(url) {
    return url_regex.exec(url)[1];
}

function get_category(url) {
    return url_regex.exec(url)[2];
}

function parse_url(url) {
    return {
        domain: get_domain(url),
        category: get_category(url),
        full: url
    };
}
