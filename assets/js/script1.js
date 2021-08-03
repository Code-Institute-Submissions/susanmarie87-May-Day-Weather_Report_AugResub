function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 5) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 140) {
        text = "Please Enter More Than 140 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}

var api_key = '5bdc8787fb8043f5821fa588bc2377c3';
var latitude = '51.0';
var longitude = '7.0';

var api_url = 'https://api.opencagedata.com/geocode/v1/json'

var request_url = api_url +
    '?' +
    'key=' + api_key +
    '&q=' + encodeURIComponent(latitude + ',' + longitude) +
    '&pretty=1' +
    '&no_annotations=1';

// see full list of required and optional parameters:
// https://opencagedata.com/api#forward

var request = new XMLHttpRequest();
request.open('GET', request_url, true);

request.onload = function () {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes

    if (request.status === 200) {
        // Success!
        var data = JSON.parse(request.responseText);
        alert(data.results[0].formatted); // print the location

    } else if (request.status <= 500) {
        // We reached our target server, but it returned an error

        console.log("unable to geocode! Response code: " + request.status);
        var data = JSON.parse(request.responseText);
        console.log('error msg: ' + data.status.message);
    } else {
        console.log("server error");
    }
};

request.onerror = function () {
    // There was a connection error of some sort
    console.log("unable to connect to server");
};

request.send(); // make the request