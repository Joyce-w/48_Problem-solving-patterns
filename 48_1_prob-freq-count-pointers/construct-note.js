
/*Rewording: check if msg has characters in str

Facts: 
str can be more than msg
only lowercase letters are given, no spaces or special characters 
Does not need to use all the letters in the given str to build msg

EdgeCases:
empty strings? 



Runtime: O(M+N)
*/

function countFreq(strType) {
    let frequencies = new Map();
    //loop through strType
    for (let el of strType) {
        //get the value for the key or set it as 0
        let val = frequencies.get(el) || 0
        //set the val of the key
        frequencies.set(el, val+=1 || 1)
    }
    return frequencies;
}

function constructNote(msg, str) {
    //If str length is less than msg return false
    if (msg.length > str.length) return false;
 
    //create a frequency counter for msg, str
    const msgFreqCounter = countFreq(msg);
    const strFreqCounter = countFreq(str);

    //loop through msgFreq
    for (let key of msgFreqCounter.keys()) {
        //check if the key is in the strFreq
        if (!strFreqCounter.has(key)) return false;
        //check if the value of the key in msg is the same or less than the value of strFreq
        if (msgFreqCounter.get(key) > strFreqCounter.get(key)) return false;        
    }
    return true;
}


/**Runtime
 * In countFreq, we loop through once: O(n)
 * In constructNote, we loop through twice: O(n)
 * O(2n) => O(n)
*/

