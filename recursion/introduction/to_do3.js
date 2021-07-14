function rBinarySearch(arr,n){
    if(arr.length==1 && arr[0]!=n){
        return false
    }
    if(arr[arr.length-1]==n){
        console.log(arr[arr.length-1])
        return true
    }
    arr.pop()
    return rBinarySearch(arr,n)
}
// console.log(rBinarySearch([4,6,6,8,5],5))

function rGCF(num1,num2){
    if(num1==num2){
        return num1
    }
    if(num1>num2){
        return rGCF(num1-num2,num2)
    }
    if(num2>num1){
        return rGCF(num1,num2-num1)
    }
}

// #Second
function rGCF(num1,num2){
    if(num2==0){
        return num1
    }
    return rGCF(num2,num1%num2)
}
// console.log(rGCF(123456,987654))


// tarai(10,2,9)
var counter = 0
function tarai(x,y,z){
    if(x<=y){
        console.log(counter)
        return y 
    }else{
        // return tarai(x-1,y,z)
        counter++
        return tarai(tarai(x-1,y,z),tarai(y-1,z,x),tarai(z-1,x,y))  
    }
}
// console.log(tarai(3,2,2))

// tarai(10,2,9)
function tarai(x,y,z){
    console.log(y)
    if(x<=y){
        return y 
    }else{
        return tarai(tarai(x-1,y,z),tarai(y-1,z,x),tarai(z-1,x,y))  
    }
}
// console.log(tarai(5,3,4))

// str : Stores input string
// curr : Stores current subset
// index : Index in current subset, curr
var arr = []
function powerSet(str,index,curr)
{
    let n = str.length;

    // base case
    if (index == n)
    {
        return;
    }

    // First print current subset
    arr.push(curr);

    // Try appending remaining characters
    // to current subset
    for (let i = index + 1; i < n; i++)
    {
        curr += str[i];
        powerSet(str, i, curr);

        // Once all subsets beginning with
        // initial "curr" are printed, remove
        // last character to consider a different
        // prefix of subsets.
        curr = curr.substring(0, curr.length - 1);
    }
}
// Driver code
// let str = "abc";
// let index = -1;
// let curr = "";
// console.log(powerSet(str, index, curr));
// console.log(arr)

// var arr2 = []
function powerSet(str,index,curr)
    {
        let n = str.length;
    // base case
    if (index == n)
    {
        console.log(curr);
        return;
    }
    // Two cases for every character
    // (i) We consider the character
    // as part of current subset
    // (ii) We do not consider current
    // character as part of current
    // subset
    powerSet(str, index + 1, curr + str[index]);
    powerSet(str, index + 1, curr);
}
// Driver code
let str = "abc";
let index = 0;
let curr="";
powerSet(str,index,curr);
// console.log(arr)

// flow inside of powerSet
// abc, 0, "" (i)
// abc, 1, "a" (i)
// abc, 2, "ab" (i)
// abc, 3, "abc" (i)
// print "abc" and return
// abc, 3, "ab" (ii)
// print "ab" and return
// abc, 2, "a" (ii)
// abc, 3, "ac" (i)
// print "ac" and return
// abc, 1, "" (ii)
// abc, 2, "b" (i)
// abc, 3, "bc" (i)
// print "bc" and return
// abc, 3, "b" (ii)
// print "b" and return
// abc, 2, "" (ii)
// abc, 3, "c" (i)
// print "c" and return
// abc, 3, "" (ii)
// print " " and return
