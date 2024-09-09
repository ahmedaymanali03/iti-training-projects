var name;
var age;
var color;
var selectedGender;
var counter = 0;
var cookieArray = {}; 





function updateCookieArray() {
    var ca = document.cookie.split(';');
    cookieArray = {};
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].split('=');
        var key = c[0].trim();
        var val = c[1];
        if (key && val) {
            cookieArray[key] = val;
        }
    }
    console.log("Updated Cookie Array:", cookieArray);
}

function incrementCounter() {
    counter = getCookie("counter");
    if (counter) {
        counter = parseInt(counter) + 1;
    } else {
        counter = 1;
    }
    setCookie("counter", counter, 7);
    return counter;
}

function setAndDisplayCounter() {
    counter = incrementCounter();
}

function saveFormData() {
    name = document.getElementById("userName").value;
    age = document.getElementById("age").value;
    var genderElements = document.getElementsByName("gender");
    selectedGender = null;

    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            selectedGender = genderElements[i].value;
            break;
        }
    }
    color = document.getElementById("color").value;

    setCookie("username", name, 7);
    setCookie("age", age, 7);
    setCookie("gender", selectedGender, 7);
    setCookie("color", color, 7);
    open("task1.1.html");
}



function listCookies() {
    updateCookieArray();
    console.log(cookieArray);
    return cookieArray;
}


window.onload = function() {
    updateCookieArray();
    setAndDisplayCounter();
    listCookies();
};

function printsomedata() {
    updateCookieArray();
    name = getCookie("username") || "Unknown";
    age = getCookie("age") || "Unknown";
    selectedGender = getCookie("gender") || "Not specified";
    color = getCookie("color") || "black";
    counter = getCookie("counter") || 0;
    var image = document.getElementById("image");

    if (selectedGender == "male") {
        image.src = "1.jpg";
    } else if (selectedGender == "female") {
        image.src = "2.jpg";
    } else {
        image.src = "";
    }

   var hello= document.getElementById("welcome");
    hello.innerHTML = "Hello " ;
    var nameElement = document.getElementById("name");
    nameElement.innerHTML = name;
    nameElement.style.color = color;
    var timesVisited = document.getElementById(" times visited");
    timesVisited.innerHTML = "You have visited this page ";
    var counterElement = document.getElementById("counter");
    counterElement.innerHTML = counter;
    counterElement.style.color = color;
  }
    
