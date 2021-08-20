/**
 * Reword: given an array and a target number, 
 * return the count of the number of pairs in the array that sum up to the target number
 * 
 * Facts: 
 * array is not sorted
 * No duplicate numbers in the array
 */

function countPairs(arr, targetNum) {
    //sort the array from small to large
    arr.sort((a, b) => a - b);
    console.log(arr)
    //initialize start/end
    let head = 0;
    let tail = arr.length - 1;
    let count = 0;
    //loop 
    while (head < tail) {
        console.log(arr[head],arr[tail])
        //add number together
        let sum = (arr[head] + arr[tail]);
        //if sum and target equal, add 1 to count
        if (sum === targetNum) {
            head++;
            tail--;
            count++;
        }
        //if sum is smaller than target, shift start up
        else if (sum < targetNum) {
            head++;
        }
        //if they are the same, add 1 to count and shift both towards the middle
        else {
            //if sum is larger than target, shift end down
            tail--;
        }  
    }
    return count;
}

/**
 * Runtime:
 * sort is O(log n )
 * while loop is O(n)
 * O(nlogn)
 */

