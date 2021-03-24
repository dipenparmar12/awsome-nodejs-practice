console.clear()

function matchingStrings(strings, queries) {
  let strCounts = {}

  strings.forEach((el) => {
    strCounts[el] = el in strCounts ? strCounts[el] + 1 : 1
  })

  return queries.map((el) => {
    return el in strCounts ? strCounts[el] : 0
  })
}

matchingStrings(['a', 'bb', 'bb', 'cc', 'd', 'e'], ['bb', 'd', 'e'])
