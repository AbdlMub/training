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

  