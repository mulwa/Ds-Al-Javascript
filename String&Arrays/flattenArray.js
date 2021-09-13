function flatten(nestedArray){
    let newArray = [];

    for(let i=0;i < nestedArray.length; i++){
        let currentValue = nestedArray[i];
        if(Array.isArray(currentValue)){
            for(let j= 0; j< currentValue.length; j++){
                newArray.push(currentValue[j]);
            }
        }else{
            newArray.push(currentValue);        
        }
    }
    return newArray;
}

console.log(flatten([1,5,9,8,[4,6]]));