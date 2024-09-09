var word;
var letter;
word=prompt("Enter word: ");
letter=prompt("Enter letter: ");
var count=0;
for(var i=0;i<word.length;i++){
    if(word[i]==letter){
        count++;
    }
}
document.write("<h1>Number of "+letter+" in "+word+" is: "+count+"</h1>");
