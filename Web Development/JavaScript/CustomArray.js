function forEachArray(array, callback){
    for (let i =0 ;i<array.length; i++){
        console.log(callback(array[i]))
    }
}


function mapArray(array, callback){
    var newArray = []
    for (i=0; i<array.length; i++){
        newArray[i] = callback(array[i])}
    console.log(newArray);
}

function filterArray(array, callback){
    let newArray = []
    for (i=0; i< array.length; i++){
        if (callback(array[i])){
            newArray[newArray.length]=(array[i])
        }
    }
    console.log(newArray)
}

// Checking above functions

function callbackFunction(x){
    return x**2;
}
function callbackFilter(x){
    return x%2 === 0;
}
array = [1,2,3,4,5,6];
forEachArray(array,callbackFunction);
mapArray(array,callbackFunction);
filterArray(array,callbackFilter);