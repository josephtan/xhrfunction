var proxyURL = "http://13.211.249.108/xhrfunction/?url=https://reqres.in/api/users";

function requestXhr(url, method, contentType, status, timeout, callback) {
    /**
     * Reusable xhr function with callback
     */

    let xhr = new XMLHttpRequest();
    xhr.timeout = timeout;
    xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === status) {
                callback(null, JSON.parse(xhr.response));
                console.log(xhr.response);
            } else {
                callback(xhr.status, null);
            }
        }
        return callback;
    };
    xhr.ontimeout = function () {
        console.log('Timeout');
    };
    xhr.open(method, url, true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", contentType);
    var data = {
        headers: {
            Accept: "application/json",
            Origin: "http://maximum.blog"
        },
        method: 'GET'
    };
    xhr.send(JSON.stringify(data));
}

requestXhr(proxyURL, "POST", "application/json",200,5000,handleJSONURL);

function handleJSONURL(error, jsondata) {
    if (error) throw error;
    var jsonList = JSON.parse(jsondata);
    for (var i = 0; i < jsonList.length; i++) {
        jsondata = jsonList[i];
        console.log(jsondata);
    }
}