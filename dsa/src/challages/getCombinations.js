console.clear()
console.log(new Date(), '-----------')
const log = console.log

function getCombinations(arr) {
  if (arr.length === 0) return [[]]

  const firstEl = arr[0]
  const rest = arr.slice(1)

  const combWithoutFirst  = getCombinations(rest)
  let combWithFirst = []
  
  combWithoutFirst.forEach((comb)=>{
    const combWithFirstEl = [...comb, firstEl]
    combWithFirst.push(combWithFirstEl)
  })

  return [...combWithoutFirst, ...combWithFirst]

}


console.log('getCombinations::', getCombinations([]))
console.log('getCombinations::', getCombinations(['a', ]))
console.log('getCombinations::', getCombinations(['a', 'b',]))
console.log('getCombinations::', getCombinations(['a', 'b', 'c']))
console.log('getCombinations::', getCombinations(['a', 'b', 'c', 'd']))

