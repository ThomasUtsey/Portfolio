function adjacentElementsProduct(inputArray){
    // ``````````````````````````````````BuiltIns`````````````````````````````````
    let highValue = 0;
    let currentValue
        inputArray.forEach((num,i,inputArray) => {
        let currentValue = num * inputArray[i + 1]  
        if(currentValue > highValue) highValue = currentValue
    });

    // ``````````````````````````````````forloop``````````````````````````````````
    // let currentValue;
    // let highValue = 0;

    // for(let i = 0;i<inputArray.length - 1; i++){
    //     let currentValue = inputArray[i] * inputArray[i + 1]  
    //     if(currentValue > highValue) highValue = currentValue
    // }
    return highValue
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));