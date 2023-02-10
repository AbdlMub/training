// function booleanToString(b){

//     if (b) { return "true";}
//     else { return "false"; }



// }

// function createArray(number) {
//     var newArray = [];

//     for (var counter = 1; counter <= number;) {
//         newArray.push(counter);
//     }

//     return newArray;
// }

// // Get first char of each string and convert it to Upper case in case its lower case
// let firstLetterOfFirstName = firstname.charAt(0).toUpperCase();
// let firstLetterOfSurName = surname.charAt(0).toUpperCase();
// // initialize name and sur variables to return them later
// let name, sur;
// // get values of  both our fake name and sur fake name obj
// let firstValues = Object.values(firstFakeName);
// let surValues = Object.values(surFakeName);

// if (
//     // check if the first char is not a number
//     isNaN(Number(firstLetterOfFirstName)) &&
//     isNaN(Number(firstLetterOfSurName))
// ) {
//     // loop through firstValues array
//     for (let i = 0; i < firstValues.length; i++) {
//         // check if the first letter of the current value is equal to the first letter
//         // of the name received as an argument
//         if (firstValues[i].charAt(0).toUpperCase() === firstLetterOfFirstName)
//             // if the letters are equal assign the fake name to the name variable we want to return
//             Name = firstValues[i];
//     }
//     // check if the first letter of the current value is equal to the first letter
//     // of the surname received as an argument
//     for (let i = 0; i < surValues.length; i++) {
//         // if the letters are equal assign the fake surname to the sur variable we want to return
//         if (surValues[i].charAt(0).toUpperCase() === firstLetterOfSurName)
//             sur = surValues[i];
//     }
//     // return the alias
//     return `${Name} ${sur}`;
//     // in case one of the first chars of the argument strings is a number return this:
// } else return "Your name must start with a letter from A - Z.";

// console.log(aliasGen("Iris", "N"));

// function getSumOfDigits(integer) {
//     let intArray = n.toString().split("");

//     let sum = intArray.reduce(function (a, b)){
//         return parseInt(a) + parseInt(b);
// }

// return sum;
// }

// function gooseFilter(birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(item => !geese.includes(item))
//

// var today = new Date();
// var day = today.getDay();
// var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



//function greet(name){
  //  return ("Hello, " + name + "!");
    //if(name === "Johnny")
      //return ("Hello, my love!");
  //}


// Fizz Buzz Excercise 

  // Divisible by 3 => Fizz
  // Divisible by 5 => Buzz 
  // Divisible by both 3 and 5 => FizzBuzz
  // Not divisble by 3 or 5 => input
  // Not a number => 'Not a number'

  


  // const output = fizzBuzz(8);
  // console.log(output);

  // function fizzBuzz(input) {
  //   if (typeof input !== 'number')
  //       return 'Not a number';

  //       if ((input % 3 === 0) && (input % 5 === 0))
  //       return 'FizzBuzz';

  //   if (input % 3 === 0)
  //      return 'Fizz';
       
  //   if (input % 5 === 0)
  //      return 'Buzz';
       

  //     return input;

  // }

// Speed Limit = 70 
// 5 -> 1 point 
// Math.floor(1.3)
// 12 points -> suspended

// checkSpeed(71);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint)
//   console.log('Ok');
//   else {
//     let points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12)
//     console.log('License Suspended');
//     else
//     console.log('Points', points);
//   }


// }

// showNumbers(20);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
//     console.log(i, message);

//   }
// }

// const isActive = true;
// const name = 'Mosh';
// if (isActive) console.log('Hello');

function createCircle(radius) {
  return {
    radius, 
    draw() {
      console.log('draw');
    }
  };
}



