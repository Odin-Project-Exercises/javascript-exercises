const reverseString = function(string) {
    let lengthOfString = string.length;
    let reversedString = "";
    for(let i = lengthOfString - 1; i >= 0; i--){
        reversedString += string[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
