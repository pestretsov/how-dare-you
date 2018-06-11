const url_regex = RegExp("^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)");

function get_domain_from_url(url) {
    return url_regex.exec(url)[1];
}
