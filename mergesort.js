
function split(wholeArray) {
    var firstHalf;
    var secondHalf;
    if(wholeArray.length % 2 === 0) {
        firstHalf = wholeArray.slice(0,wholeArray.length/2);
        secondHalf = wholeArray.slice(wholeArray.length/2);
    }
    else {
        firstHalf = wholeArray.slice(0,(wholeArray.length + 1)/2);
        secondHalf = wholeArray.slice((wholeArray.length+1)/2);
    }
    return [firstHalf, secondHalf];
}
function merge(arr1, arr2) {
    var result = [];
    if(arr1.length === 0) {
        return result = result.concat(arr2);
    }
    if(arr2.length === 0) {
        return result = result.concat(arr1);
    }
    if(arr1[0] < arr2[0]) {
        result.push(arr1.shift());
    }
    else if(arr1[0] > arr2[0]) {
        result.push(arr2.shift());
    }
    return result = result.concat(merge(arr1,arr2));
}

function mergeSort(arr) {
    if(arr.length < 2) return arr;
    var [first, second] = split(arr);
    return merge(mergeSort(first), mergeSort(second));
}