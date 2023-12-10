// *****************************  1  ***********************
// Create a variable called carName, assign the value Volvo to it.
var carName = 'volvo'

// *****************************  2  ***********************
// Use comments to describe the correct data type of the following variables:
// Create a variable called length, assign the value 16 to it.
var length = 16; 
// Create a variable called lastName, assign the Johnson 16 to it.
var lastName = "Johnson"; 
// Create a variable called isGreaterThan10, assign the length > 10 to it.
var isGreaterThan10 = length > 10;


// *****************************  3  ***********************
// Fix the errors in the following functions:

function square1(x) { 
return x * x ; 
} 

function square2 (x) {
return x * x ; 
}

function  square3 (x) { 
return x * x;
}


// *****************************  4  ***********************
// Write a JavaScript program that accept two integers and display the larger.
function largest(int1,int2) {

  if (int1>int2){
    return int1
  }
  return int2
}


// *****************************  5  ***********************
/*
Create a function called 'add'.
Tell it to accept two arguments (number1 and number2)
 - To pass multiple arguments into function we separate them with a comma.
Tell it to return a sum of number1 and number2.
Call the function passing numbers 2 and 3 as arguments.
- To see the result you can console.log it.
*/

function add (number1, number2) {
  // TODO: your work goes here
  return number1 + number2
}
add(2,3)

// *****************************  6  ***********************
/*
Create another function named 'subtract',
Tell it to accept 2 arguments, number1 and number2, and subtract
number2 from number1 then return that value.
Call it with the numbers 5 and 1 and console.log the result.
*/

function subtract(number1, number2) {
  // TODO: your work goes here
  return number1 - number2

}
subtract (5,1)

// *****************************  7  ***********************
/*
So now we have 2 functions from the previous task - add and subtract.
Let's tell the machine to decide which to run depending on the
arithmetical operator (+,-,/, * etc).
If the operator is '+', we should use the add function,
else we should use the subtract function.
Step 1 - Create a variable called operator and let it be equal to '+'.
Step 2 - Create 2 variables with any 2 numbers.
Step 3 - Create an if/else statement based on what operator we have.
If we have an operator equal to '+', we call the add function with our numbers,
else we call the subtract function with our numbers.
Don't forget to console.log it to see the result.
TODO: your work goes here
*/
var operator = '+'
var x = 5
var y = 23
if (operator === '+'){
  return add (x,y)
}
else {
  return subtract(x,y)
}


// *****************************  8  ***********************
// Let's create 2 more functions and name them 'divide' and 'multiply'.

function divide(number1,number2) {
  // TODO: your work goes here
  return number1/number2
}

function multiply(number1,number2) {
  return number1*number2
  // TODO: your work goes here
}

// *****************************  9  ***********************
/*
let's extend our 'if else' check that we already created by adding
'else if' operator is equal to '-' - call 'subtract' function,
'else if' operator is equal to '/' - call 'divide' function,
'else if' operator is equal to '*' - call 'multiply' function
else console.log - "Sorry, we don't know this operator".
(Copy it to here and comment out the first version)
*/
if (operator === '+'){
  return add (x,y)
}
else if ( operator === '-') {
  return subtract(x,y)
}
else if { (operator === '/')
return divide(x,y)
}
else if {(operator ==='*')
return multiply(x,y)
}
else {
return  "Sorry, we don't know this operator"
}

// *****************************  10  ***********************
/*
Implement the previous logic in a function called calculate
that returns the result of the operation.
calculate takes the following parameters:
operator : a sign describing the operation that we want to do
number1 : the left side of the operant
number2 : the right side of the operant
*/

function calculate(operator, number1, number2) {
  // TODO: your work goes here
  if (operator === '+'){
    return add (number1,number2)
  }
  else if ( operator === '-') {
    return subtract (number1,number2)
  }
  else if  (operator === '/'){
  return divide (number1,number2)
  }
  else if (operator ==='*'){
  return multiply(number1,number2)}
  
  else {
  return  "Sorry, we don't know this operator"
  }
}

/*
invoke your function to do the following operations and test the result
divide 15 by 5
add 6 to 4
multiply 5 by 3
subtract 10 from 100
*/



// *****************************  11  ***********************
/*
To convert Celsius to Fahrenheit, you can use the following formula:
F=C×1.8+32
write a function that converts temperature from celsius to Farenheit
convertTemp(12) => 53.6
*/

function convertTemp(number) {
  // TODO: your work goes here
  return (number*1.8) +32
}

// *****************************  12  ***********************
/*
Create a function called capitalize that takes the name of your favorite foo 
and returns the same food with the first letter being capitalized.
capitalize("pizza") => "Pizza"
*/

function capitalize(food) {
  // TODO: your work goes here
 return food.charAt(0).toUpperCase()+food.slice(1);

}

// *****************************  13  ***********************
/*
Create a function called billing that takes 3 item prices and helps you do the following:
* the price is the sum of all items
* the tip is 15% of the price
* the total to pay is price + tip
* the function should return the following string
   billing(10.25, 3.99, 7.15)
   => "your total is $24.60. thank you for the $3.20 tip"
NOTE: use toFixed() pass it the number of decimal points you want to use.
For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.
*/

function billing(item1,item2,item3) {
  var price=item1+item2+item3;
  var tip = (price*15)/100;
var total= price +tip ;
     return 'your total is '+price+' thank you for the '+tip.toFixed(2)+ ' tip'

    // TODO: your work goes here
  }

// *****************************  14  ***********************
/*
Here is an awesome messages:
 "Hi, my name is Julia. I love cats. In my spare time, I like to play video games."
 Declare a function that takes three variables for each part of the sentence 
 that changes (firstName, interest, and hobby).
 Use your variables and string concatenation to create your own awesome message.
*/

function createAwesomeMessage(firstName, interest, hobby) {
  var message = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + ".";
  return message;

  // TODO: your work goes here
}

// *****************************  15  ***********************
// Write a function that returns "even" if the number is even and "odd" if the number is odd

  function parity(number) {
    if (number % 2===0){
      return 'even'
    }
    return 'odd'
    // TODO: your work goes here
  }

// *****************************  16  ***********************
/*
 Given an integer number number, return the difference between the product of its digits and the sum of its digits.
 subtractProductAndSum(234) => 15
 Explanation: 
 Product of digits = 2 * 3 * 4 = 24 
 Sum of digits = 2 + 3 + 4 = 9 
 Result = 24 - 9 = 15
*/

function subtractProductAndSum(number) {
  // TODO: your work goes here
}

// *****************************  17  ***********************
/*
Write a JavaScript function to remove a character at the specified position of a given string 
and return the new string.
 removeCharacter("Hello", 2) => "Helo"
*/

function removeCharacter(string, position) {
  
 var t=string.slice(0, position) + string.slice(position + 1);
 return t

  // TODO: your work goes here
}

// *****************************  18  ***********************
// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values

function nearestTo100(number1, number2) {
  if ((Math.abs(100-number1))<(Math.abs(100-number2)))
  {return number1}
  return number2
  // TODO: your work goes here
}

// *****************************  19  ***********************
/*
 Write a JavaScript program to check whether the last digit of the three given positive integers is same.
 lastDigit(23, 2563, 1254823) => true
 lastDigit(293, 3568, 29) => false
*/

function lastDigit(num1, num2, num3) {
  var x = num1%10
  var y =num2%10
  var z =num3%10
  if ((x===y)&&(x===z)){
    return true
  }
  return false
  // TODO: your work goes here
}

// *****************************  20  ***********************
/*
A murder mystery is a game typically played at parties wherein one of the partygoersis secretly, and unknowingly, playing a murderer,
and the other attendees must determine who among them is the criminal.
Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier.
Here's what we know! In this murder mystery there are:
* four rooms: the ballroom, gallery, billiards room, and dining room,
* four weapons: poison, a trophy, a pool stick, and a knife,
* four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
We also know that each weapon corresponds to a particular room, so...
* the poison belongs to the ballroom,
* the trophy belongs to the gallery,
* the pool stick belongs to the billiards room,
* and the knife belongs to the dining room.
And we know that each suspect was located in a specific room at the time of the murder.
Mr. Parkes was located in the dining room.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Kalehoff was located in the ballroom.
To help solve this mystery, write a combination of conditional statements that:
sets the value of weapon based on the room and
sets the value of solved to true if the value of room matches the suspect's room
your function should take a room name and a suspect and 
return the following outputs:
murder("gallery", "Ms. Van Cleve") => "Ms. Van Cleve did it in the gallery with the trophy!"
murder("ballroom", "Ms. Van Cleve") => "There is no way Ms. Van Cleve did it!"
*/

function murder(room, name) {
  // TODO: your work goes here
 
  if ((room==='ballroom')&&(name==='Mr. Kalehoff')){
    return name+' did itin the '+room+' withe the poison' 
  }
  else if ((room==='galler')&&(name==='Ms. Van Cleve')) {
    return name+' did itin the '+room+' withe the trophy '
  }
  else if ((room==='billiards room')&&(name==='Mrs. Sparr')){
    return name+' did itin the '+room+' withe the pool stick '
  }
else if ((room==='dining room')&&(name==='Mr. Kalehoff')){
  return name+' did itin the '+room+' withe the knife'
}
else {
  return 'theree is no way '+name+' did it!'
}

}