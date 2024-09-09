var newWindow = window.open("", "", "width=200,height=100");
newWindow.document.write("<body><div id='typing'></div></body>");
newWindow.focus();
var message = "Hello World!";
var i = 0;
var typingDiv = newWindow.document.getElementById("typing");

var interval = setInterval(function() {
    typingDiv.innerHTML += message[i]; 
    i++;
    if (i === message.length) {
        clearInterval(interval);
        
        
        setTimeout(function() {
            newWindow.close();
        }, 2000);
    }
}, 100);