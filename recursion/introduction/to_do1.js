// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function rSigma(n){
    if(n<1){
        return 0
    }
    n = Math.floor(n)
    return n+rSigma(n-1)
}
// console.log(rSigma(2.5))

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
function rFact(n){
    if(n<1 || isNaN(n)==true){
        return 0 
    } 
    if(n==1){
        return 1 
    }
    n = Math.floor(n)
    return n*rFact(n-1)
}
// console.log(rFact(6.5))

// Bonus Challenge (Optional)
// Flood Fill
canvas2D = [
    [3,2,3,4,3],
    [2,3,3,4,0],
    [7,3,3,5,3],
    [6,5,3,4,1],
    [1,2,3,3,3],
]
// our canvas2D
// canvas2D = [
//     [3,2,1,4,3],
//     [2,1,1,4,0],
//     [7,1,1,5,3],
//     [6,5,1,4,1],
//     [1,2,1,1,1],
// ]

function floodFill(arr, [x,y], target, newColor){
    if(x<0 || x>arr.length-1){
        return
    }
    if(y<0 || y>arr[0].length-1){
        return
    }
    if(arr[x][y] !== target){
        return
    }
    arr[x][y] = newColor
    floodFill(arr, [x-1, y], newColor)
    floodFill(arr, [x+1, y], newColor)
    floodFill(arr, [x, y-1], newColor)
    floodFill(arr, [x, y+1], newColor)

    return arr
}
// console.log(floodFill(canvas2D, [2,2], 3, 1))