
function task1(){
let x = 5;
let y = 10;
console.log("x="+x);
console.log("y="+y);

[x, y] = [y, x];

console.log("x="+x); 
console.log("y="+y); 
}

function task2(){
   
    function findMax(...numbers) {
        let max = numbers[0];
        for (let number of numbers) {
            if (number > max) {
                max = number;
            }
        }
        return max;
    }
    let numbers = [3, 5, 7, 2, 1, 9];
    console.log(findMax(...numbers));
    
    
    function findMinMax(...numbers) {
        let max = numbers[0];
        let min = numbers[0];
        
        for (let number of numbers) {
            if (number > max) {
                max = number;
            }
            if (number < min) {
                min = number;
            }
        }
        
        return { min, max };
    }
    
    const result = findMinMax(3, 5, 7, 2, 1, 9);
    console.log("Max value:", result.max);
    console.log("Min value:", result.min); 

}

function task3(){
    var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

    
    const allStrings = fruits.every(fruit => typeof fruit === 'string');
    console.log(allStrings); 
    
    
    const someStartWithA = fruits.some(fruit => fruit.startsWith('a'));
    console.log(someStartWithA);
    
    const filteredFruits = fruits.filter(fruit => fruit.startsWith('b') || fruit.startsWith('s'));
    console.log(filteredFruits); 
    
    const likedFruits = fruits.map(fruit => `I like ${fruit}`);
    likedFruits.forEach(likedFruit => console.log(likedFruit));
    


}