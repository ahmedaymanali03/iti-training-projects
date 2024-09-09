
var x = 0;
var y = 0;


var speed = 50;
var win;
var interval;

function openWindow() {
    win = window.open("task1.1.html", "", "width=100,height=100");
    win.focus();
    startMovement();
}

function startMovement() {
    interval = setInterval(moveWindow, 500); 
}

function moveWindow() {
   
    if (x < window.screen.availWidth - 100 || y < window.screen.availHeight - 100) {
        
        x += speed;
        y += speed;
        win.moveTo(x, y);
    } else {
        stopMovement();
    }
}

function stopMovement() {
   
    clearInterval(interval);
    win.close();
}
