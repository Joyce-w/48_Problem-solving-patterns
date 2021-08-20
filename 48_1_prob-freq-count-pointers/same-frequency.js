/**
 * Reword: 
 * given two positive integers, 
 * find out if the numbers have the same frequency of digits
 * 
 * 
 * Edge cases:
 * what if they are different lengths?
 */


//make helper function to count frequencies
function countFreq(nums) {
    //initalize a map to old numbers as keys
    let frequencies = new Map();
    //seperate  numbers 
    nums = ("" + nums).split('');
    //loop over 
    for (let digit of nums) {
        digit = +digit;
        let val = frequencies.get(+digit) || 0;
        frequencies.set(digit, val+1)
    }
    return frequencies;
}

function sameFrequency(num1, num2) {
    //if they are not the same length, return false
    if (num1.toString().length !== num2.toString().length) return false;
    //make freq obj of num1 & num2
    let num1Freq = countFreq(num1);
    let num2Freq = countFreq(num2);
    //loop thru num1Freq
    for (let key of num1Freq.keys()) {
        //check to see if the digit is in num2Freq
        if (!num2Freq.has(key)) return false;
        //check to see if the values are the same occurances
        if (num1Freq[key] !== num2Freq[key]) return false;
    }
    //return true if everything passes      
    return true;
}

/** RunTime
 * countFreq: .split is O(n) + for loop is O(n).  O(2n) => O(n)
 * sameFrequency. toString() is O(n) + for of loop is O(n). O(2n) => O(n)
 * O(m+n) = O(n)
*/

// sameFrequency(9876, 6789) => true
// console.log(sameFrequency(96, 6789) )