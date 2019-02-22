var proxyURL = "https://my-json-server.typicode.com/typicode/demo/post";

function requestXhr(url, method, status, timeout, callback) {
    /**
     * Reusable xhr function with callback
     */

    let xhr = new XMLHttpRequest();
    xhr.timeout = timeout;
    xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === status) {
                callback(null, JSON.parse(xhr.response));
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
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send({ 'request': "authentication token" });
}

requestXhr(proxyURL, "GET", 200,5000,handleJSONURL);

function handleJSONURL(error, jsondata) {
    if (error) throw error;
    var jsonList = JSON.parse(JSON.stringify(jsondata));
    for (var i = 0; i < jsonList.length; i++) {
        jsondata = jsonList[i];
        console.log(jsondata);
    }
}