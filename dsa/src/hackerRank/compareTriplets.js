console.clear()
console.log(new Date(), '-----------')
const log = console.log

/**
 * 
 * @param {Array} a 
 * @param {Array} b 
 * @returns {Array}
 * @see https://www.hackerrank.com/challenges/compare-the-triplets/problem 
 */
function compareTriplets(a, b) {
  const result = a.reduce((score, alice, i) => {
    const bob = b[i]

    if (alice === bob) return score
    else if (alice > bob) score.alice += 1
    else if (alice < bob) score.bob += 1
    return score

  }, {
    alice: 0,
    bob: 0,
  })

  return Object.values(result)
}

console.log(
  compareTriplets(
    [10, 150, 5],
    [3, 4, 5]
  ),

  compareTriplets(
    [17, 28, 30],
    [99, 16, 8]
  ),
)