/**
 * Reword: 
 * two arrays of different lengths are given
 * return object created from keys/values
 * if keys > values than the values in the object is null
 * 
 * Edge cases:
 * what if there are repeat keys?
 */


function twoArrayObject(arr1, arr2) {
    //initialize obj
    let obj = {};
    //loop the length of arr1
    for (let el in arr1) {
        //add arr1 as key and arr2 as value into obj
        if (!obj[arr1[el]]) {
            //if arr 2 is undefined use null    
            if (!arr2[el]) {
                obj[arr1[el]] = null;
            } else {
                obj[arr1[el]] = arr2[el];
            }
        }
    }
    //return obj
    return obj
}

twoArrayObject(["a", "b", "c"], [1, 2, 3, 4])


/**Runtime
 * twoArrayObj loops the length of arr1: O(n)
 */