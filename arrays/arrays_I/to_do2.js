// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().copy

function reverse(arr){
    for(var i=0; i<arr.length/2; i++){
        var temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}
// console.log(reverse([1,2,3,4,5,6,7,8,9]))

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// [1,2,3]
// function rotateArr(arr, shiftBy){
//     var newArr = []
//     for(var i=shiftBy+1; i<arr.length; i++){
//         newArr.push(arr[i])
//     }
//     for(var i=0; i<=shiftBy; i++){
//         newArr.push(arr[i])
//     }
//     return newArr
// }
// console.log(rotateArr([1,2,4,5,6,10], 2))

// Second: allow negative shiftBy (shift L, not R).
function rotateNegativeArr(arr, shiftL){
    var newArr = []
    for(var i=shiftL; i<arr.length; i++){
        newArr.push(arr[i])
    }
    for(var i=0; i<shiftL; i++){
        newArr.push(arr[i])
    }
    return newArr
}
// console.log(rotateNegativeArr([1,2,4,5,6,10], 2))

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
function rotateArr(arr, shiftBy){
    var j = 0
    for(var i=shiftBy+1; i<arr.length; i++){
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
    return arr
}
// console.log(rotateArr([1,2,4,5,6,10], 2))

// Fourth: minimize the touches of each element.copy
function rotateArr(arr, shiftBy){
    var j = 0
    for(var i=shiftBy+1; i<arr.length; i++){
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
    return arr
}
// console.log(rotateArr([1,2,4,5,6,10], 2))

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.copy

function filterRange(arr, min, max) {
    let from = 0, to = 0;
    while (from < arr.length) {
        if (arr[from]>=min && arr[from]<=max) {
            arr[to] = arr[from];
            to++;
        }
        from++;
    }
    arr.length = to;
    return arr
}
// var arr = [1,2,3,40,5,60,7,80];
// console.log(filterRange(arr, 0, 10));

// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].copy

function arrConcat(a, b){
    var newArr = []
    for(var i=0; i<a.length; i++){
        newArr.push(a[i])
    }
    for(var i=0; i<b.length; i++){
        newArr.push(b[i])
    }
    return newArr
}
// console.log(arrConcat(['a','b'], [1,2]))
