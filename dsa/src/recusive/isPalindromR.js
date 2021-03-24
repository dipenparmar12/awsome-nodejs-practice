console.clear()

function isPalindromR(str, i=0){
    if(i >= str.length) return true
    if(i === str.length / 2) return true
        
    if(str.charAt(i) !== str.charAt(str.length - 1 - i)){
     console.log(str, false)
     return false
    }
    
    return isPalindromR(str, ++i)
}

isPalindromR("ABCCBA")
isPalindromR("121")
isPalindromR("112211")
isPalindromR("AABBCC")