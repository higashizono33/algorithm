// Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

function makeItBig(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>=0){
            arr[i]='big'
        }
    }

    return arr
}
// console.log(makeItBig([-1,3,5,-5]))

// Print Low, Return High
// Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr){
    var lowest = arr[0]
    var highest = arr[0]
    for(var i=1; i<arr.length; i++){
        if(arr[i]>highest){
            highest = arr[i]
        }
        if(arr[i]<lowest){
            lowest = arr[i]
        }
    }
    console.log(lowest)
    return(highest)
}
// console.log(printLowReturnHigh([1,4,5,6,2,10,5,4]))

// Print One, Return Another
// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.

function printOneReturnAnother(arr){
    for(var i=1; i<arr.length; i++){
        console.log(arr[i]);
    }

    var firstOdd = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2 ==1){
            firstOdd = arr[i]
            break
        }
    }
    return firstOdd
}
// console.log(printOneReturnAnother([2,4,5,6,2,10,5,4]))

// Double Vision
// Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

function doubleVision(arr){
    var newArr = []
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i]*2)
    }
    return newArr
}
// console.log(doubleVision([1,2,3]))

// Count Positives
// Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr){
    var counter = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            counter++
        }
    }
    arr[arr.length-1] =  counter
    return arr
}
// console.log(countPositives([-1,1,1,1]))

// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function evensOdds(arr){
    var odds = 0
    var evens = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2==1){
            odds++
            if(odds==3){
                console.log('That’s odd!')
                odds = 0
            }
            evens = 0
        }else{
            evens++
            if(evens==3){
                console.log('Even more so!')
                evens = 0
            }
            odds = 0
        }
    }
}
// evensOdds([1,3,5,6,4,8,9,21,7,6,8,10])

// Increment the Seconds
// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

function incrementSeconds(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2==1){
            arr[i] = arr[i]+1
        }
        console.log(arr[i])
    }
    return arr
}
// console.log(incrementSeconds([1,3,5,6,4,8,9,21,7,6,8,10]))

// Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

function previousLengths(arr){
    for(var i=0; i<arr.length; i++){
        if(isNaN(arr[i])){
            arr[i] = arr[i].length
        }
    }
    return arr
}
// console.log(previousLengths([1,2,4,'abc','mike','john']))

// Add Seven to Most
// Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function addSevenToMost(arr){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        if(i==0){
            newArr.push(arr[i])
        }else{
            newArr.push(arr[i]+7)
        }
    }
    return newArr
}
// console.log(addSevenToMost([1,3,5,6,4,8,9,21,7,6,8,10]))

// Reverse Array
// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

function reverse(arr){
    for(var i=0; i<arr.length/2; i++){
        var temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}
// console.log(reverse([3,1,6,4,2,4,5,6,7,10]))

// Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function negative(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i] = arr[i]*-1
        }
    }
    return arr
}
// console.log(negative([1,-3,5]))

// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

function alwaysHungry(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]=='food'){
            console.log('yummy')
        }else{
            console.log("I'm hungry")
        }
    }
}
// alwaysHungry(['food',1,2,4,5,6,'food'])

// Swap Toward the Center
// Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapTowardCenter(arr){
    for(var i=0; i<arr.length; i++){
        if(i==0 || i==2){
            var temp = arr[i]
            arr[i] = arr[arr.length-1-i]
            arr[arr.length-1-i] = temp
        }else{
            continue
        }
    }
    return arr
}
// console.log(swapTowardCenter([1,2,3,4,5,6]))

// Scale the Array
// Given array arr and number num, multiply each arr value by num, and return the changed arr.

function scaleArray(arr, num){
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i]*num
    }
    return arr
}
// console.log(scaleArray([1,2,3,4,5,6],3))