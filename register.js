let getcookie = document.getElementById("cookieBtn");


function getCookie() {
    chrome.cookies.getAll({
        url : url
    }, function(cookies) {
        console.log("cookie:", cookies)
    }

    )
}

getCookie()
