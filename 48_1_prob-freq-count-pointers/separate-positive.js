/**
 * Given non-zero arrays 
 * rearrange it so smaller numbers are on right and larger numbers on left
 * 
 * Fact: Determine if number is positive or negative
 */



function separatePositive(arr) {

    let head = 0;
    let tail = arr.length - 1;
    //loop array
    while (head < tail) {
        //compare both values
        //if start is negative & end is positive, swap places
        if (Math.sign(arr[head]) === -1 && Math.sign(arr[tail]) === 1) {
            let temp = arr[head];
            arr[head] = arr[tail]
            arr[tail] = temp;
            head++;
            tail--;
        }
        //if start is negative & end is negative, shift end down 
        else if (Math.sign(arr[head]) === -1 && Math.sign(arr[tail]) === -1) {
            tail--;
        }
        //if start positive & end is negative,shift both towards mid 
        else if (Math.sign(arr[head]) === -1 && Math.sign(arr[tail]) === -1) {
            head++;
            tail--;
        }
        //if both positive, shift head up 
        else if (Math.sign(arr[head]) === 1 && Math.sign(arr[tail]) === 1) {
            head++;
        }
        
    }
    return arr;
}
// var arr = [2, -1, -3, 6, -8, 10]
// console.log(separatePositive(arr))


/**Runtime:
 * while loop worse case loops through arr.length-1 so O(n)
*/
