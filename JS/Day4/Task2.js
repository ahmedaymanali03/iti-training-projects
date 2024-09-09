var name;
var mobilephone;
var ardyphone;
var email;

do{
    name = prompt("Enter your name: ");
    if(name == ""){
        alert("Please enter your name");
    }
    RegExp = /^[a-zA-Z]+$/;
    if(!RegExp.test(name)){
        alert("Please enter only letters");
    }
} while(name == "" || !RegExp.test(name));

do{
    ardyphone = prompt("Enter your ardyphone: ");
    if(ardyphone == ""){
        alert("Please enter your mobile phone");
    }
    RegExp = /^[0-9]{8}$/;
    if(!RegExp.test(ardyphone)){
        alert("Please enter only valid numbers");
    }
}while(ardyphone == "" || !RegExp.test(ardyphone));

do{
    mobilephone= prompt("Enter your  mobilephone: ");
    if( mobilephone == ""){
        alert("Please enter your  mobilephone");
    }
    RegExp = /^(011|012|010|015)[0-9]{8}$/;
    if(!RegExp.test( mobilephone)){
        alert("Please enter only valid numbers");
    }
} while( mobilephone == "" || !RegExp.test( mobilephone));

do{
    email = prompt("Enter your email: ");
    if(email == ""){
        alert("Please enter your email");
    }
    RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!RegExp.test(email)){
        alert("Please enter a valid email");
    }
}
while(email == "" || !RegExp.test(email));
document.write("<h1>Name: " + name + "</h1><br>");
document.write("<h1>Mobile Phone: " + mobilephone + "</h1><br>");
document.write("<h1>Ardy Phone: " + ardyphone + "</h1><br>");
document.write("<h1>Email: " + email + "</h1><br>");
