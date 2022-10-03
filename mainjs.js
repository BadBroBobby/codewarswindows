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