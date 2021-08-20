/**Reword: Given two strings, check to see if str1 occurs sequentially in str2
 * 
 * Str1 must be  same or less characters
 */


function isSubsequence(str1, str2) {
    //return false if str1 is longer in length than str2
    if (str1.length > str2.length) return false;
    //create left/right pointer 
    let leftPointer = 0;
    let rightPointer = 0;
    //loop while the pointer is less than the length of str2
    while (leftPointer < str1.length && rightPointer < str2.length) {
        console.log(str1[leftPointer],str2[rightPointer])
        //if pointer right is not equal to pointer left, move pointer right
        if (str1[leftPointer] !== str2[rightPointer]) rightPointer++;
        // if pointer right = pointer left, move both pointers right
        if (str1[leftPointer] === str2[rightPointer]) {
            leftPointer++;
            rightPointer++
        }
    }
    console.log(leftPointer)
    //if left pointer is the length than return true else false
    return (leftPointer === str1.length) ? true : false;
}

/**Runtime:
 * while loop is looping both strings O(M) & O(N)
 * O(m+n)
 */