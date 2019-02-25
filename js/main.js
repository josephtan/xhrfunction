var apiURL = "https://jsonplaceholder.typicode.com/users/1";

/**
 * Reusable xhr function with callback
 */

function requestXhr(url, method, contentType, status, timeout, callback) {
    let xhr = new XMLHttpRequest();
    xhr.timeout = timeout;
    xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === status) {
                callback(null, xhr.response);
            } else {
                callback(xhr.status, null);
            }
        }
        return callback;
    };
    xhr.ontimeout = function () {
        console.log('Error the request has timed out.');
    };
    xhr.open(method, url, true);
    xhr.setRequestHeader( "Content-Type", contentType);
    xhr.send();
}




function handleJSONURL(error, jsondata) {
    if (error) throw error;
    var jsonList = JSON.parse(jsondata);
    console.log(jsonList);
    console.log("ID: " + jsonList.id);
    console.log("name: " + jsonList.name);
    console.log("email: " + jsonList.email);
}

requestXhr(apiURL, "GET", "application/json",200,5000,handleJSONURL);