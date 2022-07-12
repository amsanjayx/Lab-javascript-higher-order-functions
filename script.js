// Function #1: Array Slice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFood = foods.slice(foods.indexOf("burger"), foods.indexOf("springRoll"));
console.log(modifiedFood);

// Function #2: Array Splice
const foods2 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood2 = foods2.splice(2, 0, "noodles", "icecream");
console.log(foods2);

// Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(numberArray)
{
    return numberArray.filter(function (number) 
    {
        if (number % 2 === 0) 
        {
            return number;
        }
    }
    );
}
let even = isEven(numberArray);
console.log(even);

function isPrime(numberArray) {
    return numberArray.filter((number) => 
    {
        for (let i = 2; i <= Math.sqrt(number); i++) 
        {
            if (number % i === 0) 
            {
                return false;
            }
        }
        return true;
    }
    );
}
let prime = isPrime(numberArray);
console.log(prime);

// Function #4: Reject
function nonPrime(numberArray) {
    let noprime =  numberArray.filter((number) => 
    {
        for (let i = 2; i <= Math.sqrt(number); i++) 
        {
            if (number % i === 0) 
            {
                return true;
            }
        }
        return false;
    }
    );
    return noprime;
}
let nonprime = nonPrime(numberArray);
console.log(nonprime);

// Function #5: Lambda
const numberArrays = [12,324,213,4,2,3,45,4234];
function isEvens(numberArrays)
{
    let evens = numberArrays.filter(
        ele => ele % 2 == 0
    );
    return evens;
}
console.log(isEvens(numberArrays));

// Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray)
{
    let numbers = myArray.map(
        ele => ele * ele
    );
    return numbers;
}
console.log(findSquareOfNumbers(myArray));

// Function #7: Reduce
const myArrays = [2, 3, 5, 10];
function multiply(myArrays)
{
    let arrayr = myArrays.reduce(
        (accumulator, currentValue) => accumulator * currentValue
    );
    return arrayr;
}
let ans = multiply(myArrays);
console.log(ans);