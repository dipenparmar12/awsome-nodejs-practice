console.clear()

function test(a){
    let len = a.length
    let reverse = []
    while(len >= 0){
        a[len] && reverse.push(a[len])
            len--
    }
    return reverse
}

test([1])
test([1,2,3,4,5])
test([1,2])
test([])