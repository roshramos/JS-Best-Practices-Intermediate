//Q1 FALSY OR TRUTHY

// function falsyOrTruthy (elem1, elem2) {
//     if (!elem1) {
//         return elem1;
//     }
//     else {
//         return elem2;
//     }
// }

// console.log (falsyOrTruthy(0, 500))

// // return !elem1 ? elem1 : elem2; 
// This is the short way


//Q2 RETURN THE LENGHT OF ANY GIVEN ARRAY

// function arrLength (arr) {
//     return arr.length;
// }

// console.log (arrLength([1, 2, 3, 4]));

// //Q3 GET THE LAST ELEMENT IN AN ARRAY

// function arrLength (arr) {
//     return arr[arr.length - 1]
// }

// console.log (arrLength([0, 1, 2 ,3]))


// //Q4 FIND THE SUM OF AN ARRAY

// function arrSum (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; ++i) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log (arrSum([2, 2, 2]))

/**This is how you loop through every element in an array
 * (let i = 0; i < (how many elements); ++i)
 * Both array and strings have a .length property
 * e.g 
 * arr.length 
 * str.length
 */


// //Q5 ADD UP THE NUMBERS FROM A SINGLE NUMBER

// function proggressiveSum (num) {
//     let sum = 0;
//     for (let i = 1; i <= num; ++i) {
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log (proggressiveSum(10))


// //Q6 CALCULATE THE TIME

// function calcTime (seconds) {
//     let timerMinutes = Math.floor (seconds / 60);
//     let timerSeconds = seconds % 60;

//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes
//     }

//     return timerMinutes + ':' + timerSeconds;
// }

// console.log (calcTime(69))


// //Q7 FIND THE LARGEST NUMBER

// function getMax (arr) {
//     let max = arr[0];
//     for (i = 1; i < arr.length; ++i) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max; 
// }

// console.log (getMax([5, 100, 0]))


// //Q8 REVERSE A STRING

function reverseString (str ) {
    let reverseString = '';
    for (let i = 0; i < str.length; ++i) {
    //This is how you loop through every character in a string
        reverseString = str[i] + reverseString;
    }
    return reverseString;
}

console.log (reverseString('abc'))

// //Q9

// function asdf () {

// }

// console.log (asdf())

// //Q10

// function asdf () {

// }

// console.log (asdf())

// //Q3

// function asdf () {

// }

// console.log (asdf())

// //Q3

// function asdf () {

// }

// console.log (asdf())

// //Q3

// function asdf () {

// }

// console.log (asdf())
