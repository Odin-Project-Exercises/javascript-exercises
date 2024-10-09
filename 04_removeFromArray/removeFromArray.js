const removeFromArray = function(array) {
    let newArray = [];
    for(let i = 1; i < arguments.length; i++){
        removeElement(array, arguments[i]);
        if(i == arguments.length - 1){
            break;
        }
        array = newArray;
        newArray = [];
    }

    function removeElement(array, num){
        for(elements in array){
            if(array[elements] !== num){
                newArray.push(array[elements]);
            }
        }

    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
