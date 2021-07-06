// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
// [1,2,3,4,5], 6
// [6,1,2,3,4,5]
// temp = arr[0]
function pushFront(arr, val){
    var newArr = [val]
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i])
    }
    return newArr
}
// console.log(pushFront([1,2,3,4,5], 6))

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr){
    var beginning = arr[0]
    var newArr = []
    for(var i=1; i<arr.length; i++){
        newArr.push(arr[i])
    }
    arr = newArr
    return beginning
}
// console.log(popFront([1,2,3,4,5]))

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, index, value){
    var newArr = []
    for(var i=0; i<arr.length; i++){
        if(i!=index){
            newArr.push(arr[i])
        }else{
            newArr.push(value)
            newArr.push(arr[i])
        }
    }
    return newArr
}
// console.log(insertAt([1,2,3,4,5],3,10))

// Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, index){
    var target = arr[index]
    var newArr = []
    for(var i=1; i<arr.length; i++){
        if(i!=index){
            newArr.push(arr[i])
        }
    }
    arr = newArr
    return target
}
// console.log(removeAt([1,2,3,4,5], 3))

// Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
function swapPair(arr){
    for(var i=0; i<arr.length/2; i+=2){
        if(i+1>arr.length){
            break
        }else{
            var temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
    return arr
}
// console.log(swapPair(["Brendan",true,42]))

// Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
//arr = ['mike', 'john', 'andrew', 'jack', 'scott', 'chris', 'john', 'andrew', 'tom']
function removeDuplicates(arr){
    var temp = arr[0]
    var newArr = []
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }else if(arr[i]==arr[j]){
                delete arr[j]
            }
        }
    }
    for(var i=0; i<arr.length; i++){
        if(arr[i]){
            newArr.push(arr[i])
        }
    }
    return newArr
}
// console.log(removeDuplicates(['mike', 'john', 'andrew', 'jack', 'scott', 'mike', 'zach', 'chris', 'john', 'andrew', 'tom']))
// Second: Solve this without using any nested loops.
function removeDuplicates(arr){
    var newArr = []
    for(var i=1; i<arr.length; i++){
        var temp = arr[i-1]
        if(arr[i]<temp){
            arr[i-1] = arr[i]
            arr[i] = temp
            i=0
        }
    }
    for(var i=0; i<arr.length-1; i++){
        if(arr[i]==arr[i+1]){
            delete arr[i]
        }
    }
    for(var i=0; i<arr.length; i++){
        if(arr[i]){
            newArr.push(arr[i])
        }
    }
    return newArr
}
// console.log(removeDuplicates(['mike', 'john', 'andrew', 'jack', 'scott', 'mike', 'zach', 'chris', 'john', 'andrew', 'tom']))
