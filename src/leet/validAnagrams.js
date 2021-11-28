s1 = 'avv'
s2 = 'vav'

//--------- Method 1
function validAnagrams(s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }
    s2 = s2.split('').sort()
    return s1.split('').sort().every((v, i) => (v == s2[i]))
}


//--------- Method 2
function validAnagrams_1(s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }

    char_count = {}

    // HashTable, Counter of each letter
    for (let i of s1) {
        char_count[i] ? char_count[i] += 1 : char_count[i] = 1
    }
    // console.log(char_count)


    for (let [i, char] of s2.split('').entries()) {
        // if char not found in char_count then its not an anagram str
        if (!char_count[char]) {
            return false
        } else {
            // char found in char_chount then decrement by one
            char_count[char] -= 1
        }
        // console.log(char_count)
    }

    return true
}

console.log(validAnagrams(s1, s2))
console.log(validAnagrams_1(s1, s2))
