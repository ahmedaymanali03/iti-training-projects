
var arr = [];
var sum = 0;
var mul = 1;

for(var i = 0; i < 3; i++){
    arr[i] = parseInt( prompt("Enter a number: "));

    sum += arr[i];
    mul *= arr[i];
    if(i == 0){
        div = arr[i];
    }
    else{
        div /= arr[i];
    }   
}

document.write("<h1>sum=: " + sum + "</h1><br>");

document.write("<h1>mul=: " + mul + "</h1><br>");

document.write("<h1>div=: " + div + "</h1><br>");