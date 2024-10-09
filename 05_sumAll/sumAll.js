const sumAll = function(startNum, endNum) {
    if(typeof startNum != "number" || typeof endNum != "number"){
        return "ERROR";
    }
    if(startNum % 1 !== 0 || endNum % 1 !== 0){
        return "ERROR";
    }
    if(startNum < 0 || endNum < 0){
        return "ERROR";
    }
    if(startNum > endNum){
        let temp = startNum;
        startNum = endNum;
        endNum = temp;
    }
    let lengthOfRange = endNum - startNum + 1;
    let sum = 0;
    for(let i = 0; i < lengthOfRange; i++){
        sum += startNum++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
