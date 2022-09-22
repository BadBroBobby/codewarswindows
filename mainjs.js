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