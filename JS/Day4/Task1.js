var word=prompt("Enter word: ");
var con=confirm("case sensitve?");
var isPalindrome=true;
for(var i=0;i<word.length/2;i++){
    if(con){
        if(word[i]!=word[word.length-i-1]){
            isPalindrome=false;
            break;
        }
    }else{
        if(word[i].toLowerCase()!=word[word.length-i-1].toLowerCase()){
            isPalindrome=false;
            break;
        }
    }
}
if(isPalindrome){
    document.write("<h1>"+word+" is a palindrome</h1>");
}
else{
    document.write("<h1>"+word+" is not a palindrome</h1>");
}