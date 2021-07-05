// Only Keep the Last Few
// Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

function onlyKeepLastFew(arr, x){
    var n = arr.length
    for(var i=0; i<n-x; i++){
        arr.splice(0, 1)
    }
    
    return arr
}
// console.log(onlyKeepLastFew([1,2,3,4,5,6,29,4,5,7,100],7))

// Math Help
// Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).
// Y = MX + B
// X = -(B/M)
// Y = MX + B if X = -(B/M), Y=0
function mathHelp(M, B){
    var X = -(B/M)
    return X
}
// console.log(mathHelp(6, 3))

// Poor Kenny
// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.

function whatHappensToday(){
    // var volcano = 10/100
    // var tsunami = 15/100
    // var earthquake = 20/100
    // var blizzard = 25/100
    // var meteor = 30/100
    var today = Math.floor(Math.random()*100)
    if(today<=10){
        console.log('volcano')
    }else if(today<=25){
        console.log('tsunami')
    }else if(today<=45){
        console.log('earthquake')
    }else if(today<=70){
        console.log('blizzard')
    }else{
        console.log('meteor')
    }
}
// whatHappensToday()

// What Really Happened?
// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!
//this is not sure
function whatReallyHappensToday(disaster){
    // var disaster = ['volcano', 'tsunami', 'earthquake', 'blizzard', 'meteor', none]
    console.log(disaster)
}
// whatReallyHappensToday('meteor')

// Soaring IQ
// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?

function soaringIq(weeks){
    var iq = 101
    for(var i=1; i<=weeks*7; i++){
        iq += 0.01*i
    }
    return iq
}
// console.log(soaringIq(14))

// Letter Grade
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".

function letterGrade(score){
    if(score>=90){
        console.log(`Score: ${score}. Grade: A`)
    }else if(score>=80){
        console.log(`Score: ${score}. Grade: B`)
    }else if(score>=70){
        console.log(`Score: ${score}. Grade: C`)
    }else if(score>=60){
        console.log(`Score: ${score}. Grade: D`)
    }else{
        console.log(`Score: ${score}. Grade: F`)
    }
}
// letterGrade(59)

// More Accurate Grades
// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .

function accurateGrade(score){
    let A = [95,99,100,91,91]
    let B = [86,87,88,82,82]
    let C = [74,73,74,76,79,71]
    let D = [60,60,65,64,63,68]
    if(score>=90){
        var minus = 0
        for(var i=0; i<A.length; i++){
            if(score>=A[i]){
                minus++
            }
        }
        if(minus<=1){
            console.log(`Score: ${score}. Grade: A-`)
        }else{
            console.log(`Score: ${score}. Grade: A`)
        }
    }else if(score>=80){
        var minus = 0
        var plus = 0
        for(var i=0; i<B.length; i++){
            if(score>=B[i]){
                minus++
            }
            if(score<=B[i]){
                plus++
            }
        }
        if(minus<=1){
            console.log(`Score: ${score}. Grade: B-`)
        }else if(plus<=1){
            console.log(`Score: ${score}. Grade: B+`)
        }else{
            console.log(`Score: ${score}. Grade: B`)
        }
    }else if(score>=70){
        var minus = 0
        var plus = 0
        for(var i=0; i<C.length; i++){
            if(score>=C[i]){
                minus++
            }
            if(score<=C[i]){
                plus++
            }
        }
        if(minus<=1){
            console.log(`Score: ${score}. Grade: C-`)
        }else if(plus<=1){
            console.log(`Score: ${score}. Grade: C+`)
        }else{
            console.log(`Score: ${score}. Grade: C`)
        }
    }else if(score>=60){
        var minus = 0
        var plus = 0
        for(var i=0; i<D.length; i++){
            if(score>=D[i]){
                minus++
            }
            if(score<=D[i]){
                plus++
            }
        }
        if(minus<=1){
            console.log(`Score: ${score}. Grade: D-`)
        }else if(plus<=1){
            console.log(`Score: ${score}. Grade: D+`)
        }else{
            console.log(`Score: ${score}. Grade: D`)
        }
    }else{
        console.log(`Score: ${score}. Grade: F`)
    }
}
accurateGrade(60)