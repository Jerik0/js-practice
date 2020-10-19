// JAVASCRIPT PRACTICE


// EASY SECTION

// ======================= LOGIC GATES =======================
// Write a function nand that takes two Boolean values. 
// If both values are true, the result should be false. 
// In the other cases the return should be true.
const nand = (bool1, bool2) => {
  return (bool1 && bool2) ? false : true;
}

// Write a function nor that takes two Boolean values. 
// If both values are false, the result should be true. 
// In the other cases the return should be false.
const nor = (bool1, bool2) => {
  return (bool1 || bool2) ? false : true;
}

// Write a function xor that takes two Boolean values. 
// If both values are different, the result should be true. 
// If both values are the same, the result should be false.
const xor = (bool1, bool2) => {
  return ((bool1 !== bool2) && (bool1 || bool2)) ? true : false;
}

// ======================= STRING PARSING ======================= 
// Write a function add that takes a string with a summation task 
// and returns its result as a number. Two natural numbers should be added. 
// The summation task is a string of the form '102+17'.
const add = str => {
  let str2 = str.substring(str.indexOf('+'));
  let int1 = parseInt(str);
  let int2 = parseInt(str2);
  return int1 + int2;
}

// ======================= EQUALITY AND NUMBER STUFF ======================= 
// Write a function isEven that checks if a passed number is even. 
// If the given number is even, true should be returned, otherwise false.
const isEven = num => {
  return num % 2 === 0;
}

// Write a function unequal that checks 3 values for strict inequality. 
// The function should return true if all three parameters are strict unequal. Otherwise false.
const unequal = (num1, num2, num3) => {
  return ((num1 === num2) || (num2 === num3) || (num3 === num1)) ? false : true;
}

// Write a function isThreeDigit that checks if a number is greater than or equal to 100 and less than 1000.
const isThreeDigit = num => {
  return num >= 100 && num < 1000;
}

// INTERMEDIATE SECTION

// Create a function called isPangram that determines whether or not a string is a pangram.
const isPangram = str => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newString = [];

  str.split('').forEach(character => {
    if (alphabet.includes(character) && !newString.includes(character)) {
      newString.push(character)
    }
  })
  return alphabet === newString.sort().join('');
}

console.log(isPangram('qwertyuiopasdfghjklzxcvbnm')); // true
console.log(isPangram('qwertyuiopasdfghjvbnm')); // false

// Write a function named evaluateExpression, that takes three arguments: 
// two operands and an operator, and returns the number that results from 
// applying the operator to the opperands.
const evaluateExpression = (oper1, oper2, op) => {
  return eval(`${oper1}${op}${oper2}`);
}

console.log(evaluateExpression(5,7,'+')); // 12
console.log(evaluateExpression(8,2,'*')); // 16

// Write a function removeChar that takes two arguments, a character, ch, 
// and a string, s, and returns a string with all the characters in s execpt ch. 
// removeChar("a", "apple") should return "pple". removeChar("a", "banana") 
// should return "bnn", and removeChar("i", "Mississippi") should return "Msssspp".
const removeChar = (ch, str) => {
  const stringArray = str.split('');
  let newArray = [];
  stringArray.forEach(el => {
    if( el !== ch ) {
      newArray.push(el)
    }
  })
  return newArray.join('');
}

console.log(removeChar("a", "apple")); // pple
console.log(removeChar("a", "banana")); // bnn
console.log(removeChar('i', 'mississippi')); // mssspp

// Write a function called formatDate that takes in a date of any kind and formats it to be in the format
// 01/01/2020

// check if string contains an int. if not, return error message.
// build new date from all integers in string. if [0] and [2] are '0', just add slashes.
// check for length of string. if length is > 10 and the last 4 chars are not '2020', add '20' on the end.
const formatDate = (stringInput, dateFormatType) => {
  let unwantedCharacters = 'abcdefghijklmnopqrstuvwxyz';
  let numberString = '0123456789';
  let dateCharacters = [];

  // Create array of only numerics and separating characters ("/", "." or "-") from the input string with no spaces.
  stringInput.replace(/\s/g, '').split('').forEach(ch => {
    if (!unwantedCharacters.includes(ch)) {
      dateCharacters.push(ch);
    }
  })

  // Create a string for the date to be split into day, month, and year.
  let dateString = dateCharacters.join('');
  let nonNumericIndexesArray = [];

  // Assign variables for each set of numeric characters between non-numeric characters.
  dateCharacters.forEach((el, ind) => {
    if(!numberString.includes(parseInt(el))) {
      nonNumericIndexesArray.push(ind);
    }
  });

  // Separate the month, day and year by indexes of the separating characters.
  let month = dateString.substring(0, nonNumericIndexesArray[0]);
  let day = dateString.substring(nonNumericIndexesArray[0] + 1, nonNumericIndexesArray[1]);
  let year = dateString.substring(nonNumericIndexesArray[1] + 1, dateString.length);

  // Make year four digits and month and day two digits each.
  if ( year.length === 2 ) {
    year = `20${year}`;
  }
  if ( month.length === 1 ) {
    month = `0${month}`;
  }
  if ( day.length === 1 ) {
    day = `0${day}`;
  }

  let formattedDate;
  switch(dateFormatType) {
    case 1: {
      formattedDate = `${year}${month}${day}`;
    } break;
    case 2: {
      formattedDate = `${month}-${day}-${year}`;
    } break;
    case 3: {
      formattedDate = `${month}.${day}.${year}`;
    } break;
    default: {
      formattedDate = `${month}/${day}/${year}`;
    } break;
  }
  return formattedDate;
}

console.log(formatDate('12-12-2020')); // 12/12/2020
console.log(formatDate('12/12/2020')); // 12/12/2020
console.log(formatDate('we were there 9-23-18')); // 09/23/2018
console.log(formatDate('5.23.05', 1)); // 20050523
console.log(formatDate('12-12/20', 3)); // 12.12.2020
console.log(formatDate('4-3/20', 2)); // 04-03-2020