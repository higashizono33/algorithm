// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

var myNumber = 42
var myName = 'Takashi'
function swapNumberName(){
    var temp = ''
    temp = myName
    myName = myNumber
    myNumber = temp
    return `myNumber is ${myNumber} and myName is ${myName}`
}
// console.log(swapNumberName())

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

function printIntegers(a, b){
    for(var i=a; i<=b; i++){
        if(i>=0){
            console.log(i);
        }
    }
}
// printIntegers(-52, 1066)

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(str, times){
    for(var i=1; i<=times; i++){
        console.log(str);
    }
}
// beCheerful('good morning!', 98)

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

function MultiplesThree(){
    for(var i=-300; i<=0; i+=3){
        if(i!=-6 && i!=-3){
            console.log(i);
        }
    }
}
// MultiplesThree()

// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

function WhileIntegers(a, b){
    while(a <= b){
        if(a>=0){
            console.log(a);
        }
        a++
    }
}
// WhileIntegers(2000, 5280)

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

var birth_month = 3
var birth_day = 2

function YourBirthday(m, d){
    if(m==birth_month&&d==birth_day){
        console.log('How did you know?')
    }else{
        console.log('Just another day....')
    }
}
// YourBirthday(5, 5)

// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function LeapYear(year){
    if(year%4==0&&year%100!=0||year%400==0){
        console.log('it is leap year')
    }else{
        console.log('it is not leap year')
    }
}
// LeapYear(1004)

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

function PrintCount(number, start, end){
    var count = 0
    while(start<=end){
        if(start%number==0){
            console.log(start)
            count++
        }
        start++
    }
    return `count is ${count}`
}
// console.log(PrintCount(5, 512, 4096))

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

function MultiplesSix(end){
    var i = 0
    while(i <= end){
        console.log(i)
        i += 6
    }
}
// MultiplesSix(60,000)

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

function Counting(){
    for(var i=1; i<=100; i++){
        if(i%5==0 && i%10==0){
            console.log('Coding Dojo');
        }else if(i%5==0){
            console.log('Coding');
        }else{
            console.log(i);
        }
    }
}
// Counting()

// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.

function InputPram(value){
    console.log(value)
}
// InputPram('hey')

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

function OddSum(){
    var sum = 0
    for(var i=-300000; i<=300000; i++){
        if(i%2 != 0){
            sum += i
        }
    }
    return console.log(sum)
}
// OddSum()

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

function CountdownByFours(){
    var number = 2016
    while(number>0){
        console.log(number)
        number -= 4
    }
}
// CountdownByFours()

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

function FlexibleCountdown(lowNum, highNum, mult){
    var str = ''
    for(var i=highNum; i>=lowNum; i--){
        if(i%mult==0){
            str += i+' '
        }
    }
    console.log(str)
}
// FlexibleCountdown(5, 100, 3)

// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

function FinalCountdown(mult, start, end, skip){
    while(start<=end){
        if(start%mult==0 && start!=skip){
            console.log(start)
        }
        start++
    }
}
// FinalCountdown(3,5,17,9)