var sum = 0;
var input;

do {
    input = prompt("Please enter a numeric value (enter 0 to stop):");
    var value = parseInt(input); 
    if (isFinite(value)) {
        sum += value;
    } else {
  
        alert("The entered value is not numeric. Please enter a numeric value.");
    }
} while (input !== '0' && sum <= 100);

alert("The total sum of the entered values is: " + sum);