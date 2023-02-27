// // Even or Odd
function even_or_odd(number) {
    if (number%2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

// // Convert a Boolean to a string
function booleanToString(b){
    return String(b);
  }

// Price of Mangoes
function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
  }

// Quarter of the year
const quarterOf = (month) => {
    // Your code here
    return Math.ceil(month / 3);
  }

// The 'if' function
function _if(bool, func1, func2) {
    if (bool) { func1(); }
    else { func2(); }
  }

// Third Angle of a Triangle 
function otherAngle(a, b) {
    return 180-(a+b);
  }

// Century from Year 
function century(year) {
  let result = 0;
  
  for (let i = 0; i < year; i++) {
    if (i % 100 === 0) {
      result++;
    }
  }
  return result;
}

// Is n divisble by x and y 
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

// Cats and Shelves
function solution(start, finish) {
    var diff = finish - start
    return Math.floor(diff / 3) + (diff % 3)
  }

  