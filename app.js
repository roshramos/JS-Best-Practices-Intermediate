//Q1 FALSY OR TRUTHY

// function falsyOrTruthy (elem1, elem2) {
// // This is the short way
//     return !elem1 ? elem1 : elem2;
// // This is the long way
//     if (!elem1) {
//         return elem1;
//     }
//     else {
//         return elem2;
//     }
// }

// console.log (falsyOrTruthy(0, 500))



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

// function reverseString (str ) {
//     let reverseString = '';
//     for (let i = 0; i < str.length; ++i) {
//     //This is how you loop through every character in a string
//         reverseString = str[i] + reverseString;
//     }
//     return reverseString;
// }

// console.log (reverseString('abc'))

/**This can be accomplished with the incremental loop and it is all you need to understand but there are 2 other ways that you can do it is through
 * the 'a decremetal for loop' and 'the array of reverse property'
 * 
 * Decrmenting for Loop:
 *     let reverseString = '';
    for (let i = str.length - 1; i >= 0; --i) {
        reversedString += str[i]
    }
    return reverseString;
*
* IN ORDER TO CONVERT A STRING TO AN ARRAY USE .split('')
* .split('') = String to Array
* .reverse () = Reverses and Array
* .join ('') = Array to String
* Array of reverse property:
*   return str.split('').reverse().join('');
 */


// //Q9 TURN EVERY ELEMENT IN AN ARRAY INTO 0

// function convertToZeros (arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; ++i) {
//         newArr[i] = 0;
//     }
//     return newArr;
// }

// console.log (convertToZeros([5, 100, 0]))

/**Solution 2 - Array 'fill'
 *  return new Array(arr.length).fill(0)
 * 
 * Solution 3 - Array 'map'
 *  return arr.map(elem => elem * 0);
 * 
 * !! MAP CONVERTS EVERY SINGLE OF ARRAY INTO WHATEVER IS ON THE RIGHT HAND SIDE OF '=>' OPERATION
 * !! THE '=>' OPERATION HAS A INVISIBLE RETURN ON IT
 * E.G (elem => *return* elem * 0);
 * SO IF YOU USE {} YOU HAVE TO RETURN IT MANUALLY
 * E.G (elem => {
 *    return 0
 * });
 */

// //Q10 FILTER OUT ALL THE APPLES

// function removeApples (arr) {
//     let noApples = []
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] !== 'Apple') {
//             noApples.push(arr[i]);
//         }
//     }
//     return noApples;
// }

// console.log (removeApples(['Banana', 'Apple', 'Orange', 'Watermelon']))

/**TO ADD AN ELEMENT TO AN ARRAY USE .push 
 * 
 * Solution 2 - Array 'Filter'
 *  return arr.filter(elem => elem !== 'Apple')
 * 
 * The 'elem' can be anything, it can be dog
 * e.g 
 *  return.filter(dog => dog !== 'Apple')
*/

// //Q11 FILTER OUT ALL THE FALSY VALUES

// function filterOutFalsy (arr) {
//     return arr.filter (elem => !!elem === true); 
// }

// console.log (filterOutFalsy(["", 0, null, undefined, "0"]))

/**Solution 2 - For Loop
 *  let truthyArr = [];
    for (let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true){
            truthyArr.push(arr[i]);
        }
    }
    return truthyArr;
 */

// //Q12 TRUTH TO TRUE, FALSY TO FALSE

// function converToBoolean (arr) {
//     return arr.map(elem => !!elem)
// }

// console.log (converToBoolean([500, 0, "JavaScript", "", []]))

/**IF A TRUE VALUE IS NEEDED USE !! */
