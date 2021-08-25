function curriedAdd(total) {
    //return 0 if nothing is passed into curriedAdd
    if (total === undefined) return 0;
    return function addNum(num) {
        //return total if empty paramater
        if (num === undefined) return total;
        //if there is a number, add it to the total and return a new addNum
        total += num;
        return addNum;
    }
}

module.exports = { curriedAdd };
