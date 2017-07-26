// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(){
    if (number1 > number2)
{
    return num1;
}  else (number1 < number2)
    return number2;}
max (5,2)

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
    if ((num1 >= num2)&&(num1 >= num3)) {
           return num1;
       } else if ((num2 >= num1)&&(num2 >= num3)){
            return num2;
       } else if (( num3 >= num1)&& (num3 >= num2)){
            return num3;}

maxOfThree (10,5,2)


// 3.
// Write a function that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
    if (char == "a") or "e" or "i" or "o" or "u" or "A" or "E" or "I" or "O" or "U" {
        console.log("True");
    } else {
        console.log("False");
    }

isVowel("a");
    // Your answer here
}
if char == 'a' or 'e' or 'i' or 'o' or 'u' or 'A' or 'E' or 'I' or 'O' or 'U':
        return True

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum (a, b) {
    a + b = c
}
sum(5,10)


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg (c,d,e) {
   return c+d+e/3
}
let result = avg(5,8,8);
console.log(result);


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength (a) {
    return str.length;
}
console.log(let result2 = getLength("apple"));


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan (popcorn,pumpkin) {
    if(popcorn > pumpkin){
        return true;
    } else {
        return false;
    }
}

greaterThan (6,10)


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(string) {
    console.log( "Hello "+ string;)
}
greet("Teacher");


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib (object, verb, adj, noun) {
    console.log (object + " is " + verb + " feel " + adj + " about " + noun+ " ,mind is blowing up!" );
}
madlib("Ruby","coding","frustrated","JavaScript");
