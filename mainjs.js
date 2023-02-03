//Test

//8 kyu Find the Remainder


function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    return n > m ? n % m : m % n
    
  }

  //Arrow function

  const remainder = (n, m) => {
    n > m ? n % m : m % n
  }

// 8 kyu Fundamentals: Return  

//Solution
function add(a,b){
    return a+b
}

function divide(a,b){
    return a/b
}

function multiply(a,b){
    return a*b
}

function mod(a,b){
    return a%b
}
   
function exponent(a,b){
    return a**b
}
    
function subt(a,b){
    return a-b
}

/* Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!. */

//solution

const rps = (p1, p2) => {
    if(p1 === p2){
      return 'Draw!'
    } else if(p1 == 'scissors' && p2 == 'paper'){
      return 'Player 1 won!'
    } else if (p1 == 'scissors' && p2 == 'rock'){
      return 'Player 2 won!'
    } else if(p1 == 'rock' && p2 == 'scissors'){
      return 'Player 1 won!'
    } else if (p1 == 'rock' && p2 == 'paper'){
      return 'Player 2 won!'
    } else if(p1 == 'paper' && p2 == 'rock'){
      return 'Player 1 won!'
    } else if (p1 == 'paper' && p2 == 'scissors'){
      return 'Player 2 won!'
    }
  };

 /*  Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array. */

 function take(arr, n) {
    let newArr = []
    arr.forEach((element,index) => {
      if (index < n){
        newArr.push(element)
      }
    });
    return newArr
 }

/*  Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests. */
 
//solution
const  twoDecimalPlaces = n => +n.toFixed(2)

/* Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead */

//solution 1 (most readable)

function bump(x){
  let numOfBums = 0
  x.split('').forEach( element =>{
    if (element == 'n'){
      numOfBums += 1
    }
  })
  return numOfBums <= 15 ? 'Woohoo!' : 'Car Dead'
}

//Solution alternative (codewars flex)
function bump(x){
  let newArr = x.split('').filter( element => element === "n")
  return newArr.length <= 15 ? 'Woohoo!' : 'Car Dead'
}

//Solution three -> even moar flexi. Don't try this at home
const bump = (x) => x.split('').filter( element => element === "n").length <= 15 ? 'Woohoo!' : 'Car Dead'

const bumpy = (x) => x.split('n')

console.log(bumpy('__n__n__n'))

/* My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula! */

//solution
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
  return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
}

/* Your task is to sum the differences between consecutive pairs in the array in descending order. */

//Solution
function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

/* Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array: */

// Solution

function warnTheSheep(queue) {
  if(queue[queue.length - 1] === 'wolf'){
    return `Pls go away and stop eating my sheep`
  }
  
  let wolfIndex = queue.findIndex((element, index) => element == "wolf")
  let sheepToEat = queue.length - (wolfIndex + 1)
  
  return `Oi! Sheep number ${sheepToEat}! You are about to be eaten by a wolf!`
}

/* Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

You are given 5 variables;

sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

sharkSpeed = how fast it can move in metres/second.

pontoonDistance = how far you need to swim to safety in metres.

youSpeed = how fast you can swim in metres/second.

dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

The pontoon, you, and the shark are all aligned in one dimension.

If you make it, return "Alive!", if not, return "Shark Bait!". */

//Solution
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin){
    sharkSpeed *= 0.5
  }
  return sharkDistance/sharkSpeed <= pontoonDistance/youSpeed ? 'Shark Bait!' : 'Alive!'
}

//Training JS #10: loop statement --for

//Solution
function pickIt(arr){
  var odd=[],even=[];
  //coding here
  arr.forEach( num => num % 2 === 0 ? even.push(num) : odd.push(num))
  
  return [odd,even];
}

/* Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.*/

//solution
function arithmetic(a, b, operator){
  //your code here!
  switch(operator){
      case "add":
       operator = "+"
        break;
      case "subtract":
        operator = "-"
        break;
      case "multiply":
        operator = "*"
        break;
      case "divide":
        operator = "/"
        break;
  }
  
  let string = a + operator + b
  
  return eval(string)
}

/* Given a non-empty array of integers, return the result of multiplying the values together in order. Example: */

//Solution
function grow(x){
  return x.reduce( (a, b) => a * b)
}

//8 kyu KATA

// add the value "codewars" to the websites array 1,000 times

//Solution
var websites = []

for (i = 0; i<1000; i++){
  websites.push('codewars')
}

//8 kyu Kata

//Solution
function calculateTip(amount, rating) {
  rating = rating.toLowerCase()
  if( rating === 'terrible'){
    return amount * 0
  }else if (rating === 'poor'){
    return Math.ceil(amount * .05)
  }else if (rating === 'good'){
    return Math.ceil(amount * .1)
  }else if (rating === 'great'){
    return Math.ceil(amount * .15)
  }else if (rating === 'excellent'){
    return Math.ceil(amount * .20)
  }else{
    return 'Rating not recognised'
  }
  }

  //8kyu check sperm

  function chromosomeCheck(sperm) {
    if (sperm == 'XX'){
      return "Congratulations! You're going to have a daughter."
    }else{
      return "Congratulations! You're going to have a son."
    }
  }
  
//Task

/*   Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name. */

//Solution
const combineNames = (name, surname) => `${name} ${surname}`

//Training arrays

function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  
  arr.push(el)
  
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  
  return arr
}

//New Task

/* 8 kyu
Get number from string */

//Solution

function getNumberFromString(s) {
  return Number(s.split('').filter(a => a <= '9' && a >= '0').join(''))
  
}

//8 kyu

/* Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string */

//Solution

function remove (string) {
  //coding and coding....
  let newArr = string.split('')
  
  let testArr = newArr.filter( (e, i) => e != '!' /*|| i == newArr.length - 1*/)
  
  return testArr.join('') + '!';  
}

//8 kyu

//Find out whether the shape is a cube

//Solution

var cubeChecker = function(volume, side){
  if(volume < 0 || side < 0){
    return false
  }
  
  return volume / side / side == side ? true : false;
};

//8 kyu
//Sentence Smash

//Solution
const smash = words => words.join(' ')

//8 kyu
//Find the position!

//Solution
const ALPHABET = ["!","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const position = letter => `Position of alphabet: ${ALPHABET.indexOf(letter.toUpperCase())}`

//8 kyu
//A Strange Trip to the Market

//Solution

function isLockNessMonster(s) {
  return s.includes("tree fiddy") || s.includes("3.50");
}

//8 kyu
//Return the day

//Solution
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

function whatday(num) { 

  // put your code here
  if (num < 8 && num > 0){
  return daysOfTheWeek[num - 1]
  }else{
    return 'Wrong, please enter a number between 1 and 7'
  }

}

/* 7 kyu
Minimize Sum Of Array (Array Series #1) */

// Solution
function minSum(arrr) {
  // your code here
  const arr = arrr.sort((a,b)=>a-b)
  
  let total = 0
  
  for (let i = 0; i < arr.length / 2; i++){
    total += arr[i] * arr[ arr.length - 1 - i]
  }
  
  return total
}

/* 7 kyu
Greet Me */

//Solution
const greet = name => `Hello ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`

/* 6 kyu
The Vowel Code */

//solution

//First function - encode the string
function encode(string) {
  return string.split('').map( function (letter) {
      switch (letter) {
        case "a":
          return 1
          break
        case "e":
          return 2
          break
        case "i":
          return 3
          break
        case "o":
          return 4
          break
        case "u":
          return 5
          break
        default:
          return letter
      }
    } ).join('')
}

//Second function - decode the string
function decode(string) {
  return string.split('').map( function (letter) {
      switch (Number(letter)) {
        case 1:
          return "a"
          break
        case 2:
          return "e"
          break
        case 3:
          return "i"
          break
        case 4:
          return "o"
          break
        case 5:
          return "u"
          break
        default:
          return letter
      }
    } ).join('')
}

/* 6 kyu
Mexican Wave */

//solution
function wave(str){
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split('');
    if(copy[i] !== ' ') {
    copy[i] = copy[i].toUpperCase()
    newArr.push(copy.join(''))
    }
  }
  return newArr
}

/* 7 kyu
Number of Decimal Digits */

//Solution
function digits(n) {
  // code goes herew
  return n.toString().length
}

/* 7 kyu
Gauß needs help! (Sums of a lot of numbers). */

//Solution
function f(n){
  //insert your code here.... and go crazy!
     let total = 0
    
    if (typeof n != "number" || n < 1 || n.toString().includes('.')){
      return false
    }
  
    
    for(let i = 1; i <= n; i++){
      total += i
    }
    return total
  };

/*   8 kyu
Take the Derivative */

//solution
const derive = (coefficient,exponent) => `${coefficient * exponent}x^${exponent-1}`

/* 8 kyu
Define a card suit */

//Solution

const defineSuit = card => card.includes('♣') ? "clubs" : card.includes('♦') ? "diamonds" : card.includes('♥') ? "hearts" :  "spades" 

/* 8 kyu
Who ate the cookie? */

//solution
function cookie(x){
  // ...
  return `Who ate the last cookie? It was ${typeof x === "string" ? "Zach" : x.toString() == x ? "Monica" : "the dog"}!`
}

/* 7 kyu
Sum of Triangular Numbers */

//solution
function sumTriangularNumbers(n) {
  let sum=0,total=0;
  
  for (let i=0;i<=n;i++){
    sum+=i*1
    total+=sum
  }
  
  return total
}

/* Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]

The websites array has already been defined for you using the following code:

var websites = []; */

// add the value "codewars" to the already defined websites array
let websites = []

websites.push('codewars')

//8 kyu

//solution
function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
  }