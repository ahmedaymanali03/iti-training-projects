var query = location.search.replace("?","");
 var arr = query.split("&");
 var assArray = [];
for(var i =0 ; i<arr.length; i++){
    var key = arr[i].split("=")[0];
    var val = arr[i].split("=")[1];
    assArray[key] = val;
}
document.write("<h1>Welcome ya "+ assArray['name'] + " At My Profile</h1>")
document.write("<h1>Your Email is: "+ assArray['email'] + "</h1>")
