// console.clear()

function palindrom(str){
    let startChar = 0
    let endChar = str.length - 1

    while(startChar < endChar){
        if(str.charAt(startChar) !== str.charAt(endChar)){
            console.log(str, false)
            return false
        }
        startChar++
        endChar--
    }

    console.log(str, true)
    return true
}

palindrom("ABCCBA")
palindrom("121")
palindrom("112211")
palindrom("AABBCC")

""