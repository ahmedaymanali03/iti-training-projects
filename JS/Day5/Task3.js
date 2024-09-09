
var arr = [];

for(var i = 0; i < 5; i++){
    arr[i] = parseInt(prompt("Enter a number: "));
}
document.write("<h1>Array: " + arr + "</h1><br>");
document.write("<h1>Array Asc: " + arr.sort(function(a,b){return a-b}) + "</h1><br>");
document.write("<h1>Array Desc: " + arr.sort(function(a,b){return b-a}) + "</h1><br>");
