console.clear()
function sumAll(n){
    if(n == 1) return 1
    return n + sumAll(n-1)
}

// sumAll(5)

function collectOld(aa){
    let res = []
    function helper(arr){
        if(arr.length <= 0) return
        if(arr[0] % 2) res.push(arr[0])
        helper(arr.slice(1))
    }
    helper(aa)
    return res
}

// collectOld([12,3,2,34,5,6,7,8,1,23,3,4,6,7,8,9])

function collectOld_(arr, res=[]){
    if(arr.length === 0) return res
    if(arr[0] % 2) res.push(arr[0])
    return collectOld_(arr.slice(1),res)
}

// collectOld_([12,3,2,34,5,6,7,8,1,23,3,4,6,7,8,9])

function fib(num){
    if(num <= 0) return num
    if(num == 1) return 1
    if(num == 2) return 1
    return fib(num - 1) + fib(num - 2)
}
// fib(6) // 8
// fib(7) // 13
// [1,1,2,3,5,8,13,21]