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
/* const ALPHABET = ["!","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const position = letter => `Position of alphabet: ${ALPHABET.indexOf(letter.toUpperCase())}` */

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

//7 kyu

//solution
function printerError(s) {
  // your code
const colors = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m" ]
let rational = s.split("").filter( letter => !colors.includes(letter))

return `${rational.length}/${s.length}`
}

//8 kyu

//Solution

function whoIsPaying(name){
  //your code here
  return name.length <= 2 ? [name] : [name, name[0] + name[1]]
}

//7 kyu
//Convert an array of strings to array of numbers

//Solution
const toNumberArray = stringarray => stringarray.map( string => +string)

//8 kyu
//Classy Classes

//Solution
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return `${this.name}s age is ${this.age}`
  }
}

//8 kyu
//Thinkful - Number Drills: Blue and red marbles

//Solution
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  // Your code here.
  let currentBlue = blueStart-bluePulled;
  let currentRed = redStart-redPulled;
  let totalMarbs = currentBlue + currentRed
  
  return  currentBlue / totalMarbs
}

//7 kyu
//Power of two

//Solution
function isPowerOfTwo(n){
  return Number.isInteger(Math.log2(n));
  
}

//7 kyu
//esreveR

//Solution
reverse = function(array) {
  // TODO: program me!
  let newArr = []
  
  for(let i = array.length - 1; i>=0; i--){
    newArr.push(array[i])
  }
  
  return newArr
}

//7 kyu
//Switcheroo

//Solution
function switcheroo(x){
  let newStr = ''
  
  for(let i = 0; i < x.length; i++){
    if(x[i] === 'a'){
      newStr += 'b'
    }else if(x[i] === 'b'){
      newStr += 'a'
    }else{
      newStr += 'c'
    }
  }
  return newStr
}

//6 kyu
//Who likes it?

//Solution
function likes(names) {
  // TODO
  if (names.length === 0){
    return 'no one likes this'
  }else if(names.length === 1){
    return `${names[0]} likes this`
  }else if(names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  }else if(names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }else{
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

//8 kyu
//Exclusive "or" (xor) Logical Operator

//Solution
const xor = function (a,b) {
  if((a === true && b === false) || (b === true && a === false) ){
    return true
  }else{
    return false
  }
}

//8 kyu
//String cleaning

//solution
function stringClean(s){
  const numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
  // Function will return the cleaned string
  return s.split('').filter( letter => {
    if(numbers.includes(letter)){
      return ""
    }else{
      return letter
    }
  }).join("")
}

//7 kyu
//Even numbers in an array

//Solution
const evenNumbers = function (array, number) {
  // good luck
  let newArr = array.filter( number => number % 2 === 0).slice(-number)
  return newArr
}

//8 kyu
//Do you speak "English"?

//Solution
const spEng = function (sentence){
  //write your code here
    return sentence.toLowerCase().includes('english') ? true : false
  }

//8 kyu
//Cat years, Dog years

//Solution
var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let humanYear = humanYears
  
  let catYears = 15
  
  let dogYears = 15
  
  if(humanYear === 2){
    catYears += 9
    dogYears += 9
  }else if(humanYear === 1){
    return [humanYear, catYears, dogYears]
  }else{
    catYears += 9
    catYears += (humanYear - 2) * 4
    dogYears += 9
    dogYears += (humanYear - 2) * 5
  }
  
  return  [humanYear, catYears, dogYears];
}

//7 kyu
//Sum of Minimums!

//Solution
function sumOfMinimums(arr) {
  // your code here
  let sum = 0
  
  for(let i = 0; i < arr.length; i++){
    sum += Math.min(...arr[i])
  }
  
  return sum
}

//8 kyu
//Grasshopper - Bug Squashing

//Solution
var health = 100
var position = 0
var coins = 0

function main () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}

//8 kyu
//Convert to Binary

//Solution
function toBinary(n){
  return Number((n >>> 0).toString(2));
}

//8 kyu
//get ascii value of character

//Solution
function getASCII(c){
  // ...
  return c.charCodeAt()
}

//8 kyu
//Leonardo Dicaprio and Oscars

//Solution
function leo(oscar){
  if(oscar === 88){
    return "Leo finally won the oscar! Leo is happy"
  }else if(oscar === 86){
    return "Not even for Wolf of wallstreet?!"
  }else if(oscar < 88){
    return "When will you give Leo an Oscar?"
  }else{
    return "Leo got one already!"
  }
}

//7 kyu
//Find the middle element

//solution
function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}

//8 kyu
//Multiplication table for number

//Solution
function multiTable(number) {
  // good luck
  let tableString = ''
  for(let i = 1; i <= 10; i++){
    tableString += `${i} * ${number} = ${i * number}`
    if(i != 10){
      tableString += '\n'
    }
  }
  return tableString
}

//8 kyu
//OOP: Object Oriented Piracy

//Solution
class Ship {
  constructor(draft,crew){
  this.draft = draft;
  this.crew = crew;
   }
   isWorthIt() {
     return this.draft - (this.crew * 1.5) > 20 ? true : false
   }
 }

 //8 kyu
//Freudian translator

//Solution
function toFreud(string) {
  if(string == ""){
    return ""
  }
return string.split(' ').map(word => word = 'sex').join(' ');
}

function kebabize(str) {
  const uppercaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F',
                             'G', 'H', 'I', 'J', 'K', 'L',
                             'M', 'N', 'O', 'P', 'Q', 'R',
                             'S', 'T', 'U', 'V', 'W', 'X',
                             'Y', 'Z']
  let strWithSpace = ""
  let trash = []
  
  str.split('').forEach( (letter, index) => {
    if(letter / 1 || letter == 0){
      trash.push(letter)
    }else if(uppercaseAlphabet.includes(letter)){
      strWithSpace += " "
      strWithSpace += letter
    }else{
      strWithSpace += letter
    }
  })
  
  
 /* if(strWithSpace.split(" ").join('-').toLowerCase()[0] === "-"){
    strWithSpace.slice(2)
  }*/
  
  return strWithSpace.trim().split(" ").join('-').toLowerCase()
}

//6 kyu
//Data Reverse

//Solution
function dataReverse(data) {
  // Your code here
  //container array for data
  let dataArray = []
  
  //store each 8 bit long segment in dataArray
  for(let i = 0; i < data.length / 8; i++){
    let arrSlice = data.slice(0 + ( i*8 ), 8 + ( i*8 ))
    dataArray.push(arrSlice)
  }
  //reverse and flat nested array and return.
  return dataArray.reverse().flat()
  
  //reverse array
  
  //join array into string and return
}
// 8 kyu
// Find the Integral

//Solution
function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`
}

//7 kyu
//Sum of Cubes
function sumCubes(n){
  let sum = 0
  for(let i = 1; i <= n; i++){
    sum += Math.pow(i, 3)
  }
  return sum
}

//7 kyu
//Parts of a list

//Solution
function partList(arr){
  let newArr = []
  for(let i = 1; i < arr.length; i++){
    newArr.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')])
  }
  return newArr
}

//8 kyu
// Parse Float

//Solution
function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

//7 kyu
//Ordered Count of Characters

//Solution
function orderedCount (s) {
  const counts = {};
  for (const c of s) {
    if (counts[c]) {
      counts[c]++;
    } else {
      counts[c] = 1;
    }
  }
  const tuples = [];
  for (const c of s) {
    if (counts[c]) {
      tuples.push([c, counts[c]]);
      counts[c] = 0;
    }
  }
  return tuples;
}

//8 kyu
//Polish alphabet

//Solution
const polishLetters = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z",
}

const correctPolishLetters = string =>{
  return string.split('').map(letter => {
    if (letter in polishLetters) {
      return polishLetters[letter];
    } else {
      return letter;
    }
  }).join('');
}

//7kyu
//Product Of Maximums Of Array (Array Series #2)

//Solution
function maxProduct(numbers, size){
  //your code here
  const maxArr = []
  
  numbers.sort( (a,b) => a-b ).reverse()
  
  
  for(let i = 0; i< size; i++ ){
    maxArr.push(numbers[i])
  }
  
  return maxArr.reduce( (a,b) => a * b)
}

//7 kyu
//The Office I - Outed

//Solution
function outed(meet, boss){
  let sum = 0
  let numOfPeople = 0
  for(let person in meet){
    sum += meet[person]
    numOfPeople++
  }
  sum += meet[boss]
  numOfPeople++
  return sum / numOfPeople <= 5 ? "Get Out Now!" : "Nice Work Champ!"
}

//8 kyu
//Alan Partridge II - Apple Turnover

//Solution
function apple(x){
  return Math.pow(x, 2) > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}

//8 kyu
//Bin to Decimal

//Solution
const binToDec = (bin) => parseInt(bin, 2)

//8 kyu
//Pythagorean Triple

//Solution
function isPythagoreanTriple(integers) {
  // Good luck friends!
  let aSqr = Math.pow(integers[0], 2)
  let bSqr = Math.pow(integers[1], 2)
  let cSqr = Math.pow(integers[2], 2)
  
  if( aSqr + bSqr == cSqr || bSqr + cSqr == aSqr || cSqr + aSqr == bSqr ){
    return true
  }else{
    return false
  }
}

//7 kyu
//Simple consecutive pairs

//Solution
function pairs(ar){
  //..
   let count = 0
   
   for (let i = 0; i < ar.length; i += 2) {
     if (ar[i] - ar[i + 1] == 1 || ar[i] - ar[i + 1] == -1) {
       count += 1;
     }
   }
   return count
 };

//7 kyu
//Functional Addition
//Solution
 function add(n) {
  return function(x) {
    return x + n;
  }
}

//7 kyu
//Squares sequence

//Solution  
function squares(x, n) {
  let numArr = [x]
  
  //check for n <= 0
  if(n < 1){
    return []
  }
  
  for(let i = 1; i < n; i++){
    numArr.push(Math.pow(numArr[i - 1], 2) )
  }
  return numArr
}

//7 kyu
// Indexed capitalization
//Solution
function capitalize(s,arr){
  let strArr = s.split('')
  
  return strArr.map( (letter, index) => arr.includes(index) ? letter.toUpperCase() : letter).join('');
};

//8 kyu
//Color Ghost

//solution
var Ghost = function() {
  // your code goes here
  let colors = ['white', 'yellow', 'purple', 'red']
  this.color = colors[Math.floor(Math.random() * colors.length)]
}

//8 kyu
//Training JS #18: Methods of String object--concat() split() and its good friend join()
//solution
function splitAndMerge(string, separator) {
  return string.split(' ').map(word => word.split('').join(separator)).join(' ')
}
//8 kyu
//Price of Mangoes
//solution
function mango(quantity, price){  
  return (quantity - Math.floor(quantity / 3)) * price
}

//8 kyu
//Logical calculator
//solution
function logicalCalc(booleans, operator) {
  if (operator === "AND") {
    return booleans.reduce((acc, curr) => acc && curr);
  } else if (operator === "OR") {
    return booleans.reduce((acc, curr) => acc || curr);
  } else if (operator === "XOR") {
    return booleans.reduce((acc, curr) => acc !== curr);
  } else {
    return false; // Invalid operator
  }
}

//8 kyu
//Crash Override
//solution
function aliasGen(fName, lName){
  let first = firstName[fName[0].toUpperCase()]
  let last = surname[lName[0].toUpperCase()]
  
  if(first && last){
    return `${first} ${last}`
  }else{
    return "Your name must start with a letter from A - Z."
  }
}

//8 kyu
//Grader

//solution
const grade = {
  F: "F",
  A: "A",
  B: "B",
  C: "C",
  D: "D",
}
function grader(score) {
  if(score > 1 || score < .6){
    return grade.F
  }else if(score >= 0.9){
    return grade.A
  }else if(score >= 0.8){
    return grade.B
  }else if(score >= 0.7){
    return grade.C
  }else if(score >= 0.6){
    return grade.D
  }
}

//7 kyu
//Smallest value of an array

//Solution
function min(arr, toReturn) {
  // TODO
  if(toReturn == 'value'){
    return Math.min(...arr)
  }else{
    let smalVal = Math.min(...arr)
    return arr.indexOf(smalVal)
  }
}

//8 kyu
//Classic Hello World

//Solution
class Solution{
  static main() {
    console.log("Hello World!")
  }
}

//8 kyu
//Training JS #9: loop statement --while and do..while
//Solution
function padIt(str,n){
  let i = 0
  while(i < n){
    if(i % 2 == 0){
      str = '*' + str
    }else{
      str = str + '*'
    }
    i++
  }
  return str
}

//8 kyu
//Calculate Price Excluding VAT

//Solution
function excludingVatPrice(price){
  if(price === null){
    return -1
  }else{
    return Number((price / 1.15).toFixed(2))
  }
}

//7 kyu
//The old switcheroo

//Solution 1
function vowel2index(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let strArr = str.split('')
  
  return strArr.map( (letter, index) => vowels.includes(letter.toLowerCase()) ? index + 1 : letter).join('')
}
//Solution 2
const vowels =  ["a","e","i","o","u"]
function vowel2index(str) {
   //code me
  return str.split('').map( (letter, index) => vowels.includes(letter.toLowerCase()) ? index + 1 : letter ).join('')
}

//8 kyu
//pick a set of first elements

//Solution
function first(arr, n) {
  // return arr.slice(0, n)
  if(n === undefined){
    return arr.slice(0, 1)
  }else if(n === 0){
    return []
  }else{
    return arr.slice(0, n)
  }
}

//8 kyu
//Reversed sequence

//Solution
const reverseSeq = n => {
  let reversedNumArr = [];
  
  for(let i = n; i > 0; i--){
    reversedNumArr.push(i)
  }
  
  return reversedNumArr
};

//8 kyu
//Classy Extentions

//Solution
class Cat extends Animal {
  speak(){
    return `${this.name} meows.`
  }
}

//7 kyu
//The Office IV - Find a Meeting Room

//Solution
function meeting(x){
  if(x.every( currentVal => currentVal == "X" )){
    return 'None available!'
  }else{
    return x.findIndex( currentVal => currentVal === 'O')
  }
}