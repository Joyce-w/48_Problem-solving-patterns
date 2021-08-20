/**
 * Reword: Given array and a target value, return true if a pair averages to the target value. If not return false;
 * Facts: array has to be more than 2 in length
 * array is sorted. something to take advantage of!
 * 
 * Edge cases:
 * array is empty
 * no str, space, special characters can be passed in? 
 */

//make helper function go grab the average
function average(num1, num2) {
    //return the average of those numbers
    return (num1 + num2) / 2;
}

function averagePair(arr, target) {
    //declare left and right pointers
    let left = 0;
    let right = arr.length - 1;

    //loop while the left is less than the right 
    while (left < right) {
        //average left/right
        let avg = average(arr[left], arr[right]);
        //if average is more than target, shift right pointer down
        if (avg > target) {
            right--;
        }
        //if average is less than target, shift left pointer up
        else if (avg < target) {
            left++
        }
        //return if they are equal       
        else{ return true};
    }
    return false;
}

/**Runtime
 * average: O(1)
 * averagePair: while loop is O(n)
 * O(1 + n) => O(n)
 */

averagePair([1, 2, 2, 3, 3, 5, 7, 8], 2)

// pointer1: 1
// pointer2: 8
// avg: 4.5 // needs to go lower to get to 2, shift right pointer down

// pointer1: 1
// pointer2: 2
// avg: 1.5 // needs to go higher, shift left pointer up 
