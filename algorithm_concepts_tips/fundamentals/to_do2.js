// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function Countdown(number, arr){
    var newArr = []
    for(var i=number; i<arr.length; i++){
        newArr.push(arr[i])
    }
    console.log(`array length is ${newArr.length}`)
    return newArr
}
// console.log(Countdown(5, [1,2,3,4,5,6,7,8,9]))

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

function PrintReturn(arr){
    console.log(arr[0])
    return arr[1]
}
// console.log(PrintReturn([1,2]))

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr){
    return arr[0]+arr.length
}
// console.log(firstPlusLength([1,2,5,6,7]))
// console.log(firstPlusLength(["what?",2,5,6,7]))
// console.log(firstPlusLength([false,2,5,6,7]))

// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function greaterThanSecond(arr){
    var counter = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i]>arr[1]){
            console.log(arr[i])
            counter++
        }
    }

    return `${counter} values`
}
// console.log(greaterThanSecond([1,3,5,7,9,13]))

// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

function greaterThanSecond(arr){
    var counter = 0
    if(arr.length==1){
        return `this array is one element long`
    }
    for(var i=0; i<arr.length; i++){
        if(arr[i]>arr[1]){
            console.log(arr[i])
            counter++
        }
    }

    return `${counter} values`
}
// console.log(greaterThanSecond([1]))

// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

function LengthValue(num1, num2){
    var arr = []
    for(var i=1; i<=num1; i++){
        arr.push(num2)
    }
    if(num1==num2){
        console.log('Jinx!')
    }
    return arr
}
// console.log(LengthValue(3, 3))

// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

function fitFirst(arr){
    if(arr[0]>arr.length){
        console.log('Too big!');
    }else if(arr[0]<arr.length){
        console.log('Too small!');
    }else{
        console.log('Just right');
    }
}
// fitFirst([6,4,5,7,2,10])

// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
// Fahrenheit = (9/5 * Celsius) + 32

function fahrenheitToCelsius(fDegrees){
    var celsius = (fDegrees - 32) * 5/9
    return Math.ceil(celsius)+' as celsius'
}
// console.log(fahrenheitToCelsius(82))

// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

function celsiusToFahrenheit(cDegrees){
    var fahrenheit = (9/5 * cDegrees) + 32
    return Math.ceil(fahrenheit)+' as fahrenheit'
}
// console.log(celsiusToFahrenheit(37))

// (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.

function checkCelsiusFahrenheit(){
    var celsius = 200
    while(celsius>-100){
        var fahrenheit = (9/5 * celsius) + 32
        if(celsius==fahrenheit){
            console.log(celsius)
        }
        celsius--
    }
}
checkCelsiusFahrenheit()