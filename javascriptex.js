// Fizz Buzz Excercise 

  // Divisible by 3 => Fizz
  // Divisible by 5 => Buzz 
  // Divisible by both 3 and 5 => FizzBuzz
  // Not divisble by 3 or 5 => input
  // Not a number => 'Not a number'


  const output = fizzBuzz(8);
  console.log(output);

  function fizzBuzz(input) {
    if (typeof input !== 'number')
        return 'Not a number';

        if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
       return 'Fizz';
       
    if (input % 5 === 0)
       return 'Buzz';
       

      return input;

  }

// Demerit points 

  // Speed Limit = 70 
// 5 -> 1 point 
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(71);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint)
  console.log('Ok');
  else {
    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
    console.log('License Suspended');
    else
    console.log('Points', points);
  }


}

// Show even and odd numbers

showNumbers(20);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
    console.log(i, message);

  }
}