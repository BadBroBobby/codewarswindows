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