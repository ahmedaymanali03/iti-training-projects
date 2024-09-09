function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    updateCookieArray();
}

function getCookie(name) {
    updateCookieArray();
    console.log("Getting cookie: " + name);
    return cookieArray[name] ? cookieArray[name] : undefined;
}
function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
    updateCookieArray();
}
function hasCookie(name) {
    return getCookie(name) !== undefined;
}