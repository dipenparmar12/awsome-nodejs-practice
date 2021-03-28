console.clear()

function test(arr, len = 2) {
  if (arr.length < 0) return null

  let sumArr = arr.slice(0, len)

  const getMinIndex = () => {
    let minInx = 0
    sumArr.forEach((el, i) => el < arr[minInx] && (minInx = i))
    return minInx
  }

  let i = len
  while (i < arr.length) {
    const current = arr[i]
    const minValInx = getMinIndex()

    if (sumArr[minValInx] < current) {
      sumArr[minValInx] = current
    }

    i++
  }

  return [sumArr, sumArr.reduce((sum, e) => sum + e, 0)]
}

test([4, 2, 1, 6, 2], 4)
test([1, 2, 5, 2, 8, 1, 5], 4)

/* 
   len=2
   sum=16
              p
    [2, 5, 3, 9, 1, 6, 8]
                       n
*/

/*  len=3 

    temp=[9, 8, 6] 23,
                j   
    [2, 5, 3, 9, 1, 6, 8]
                       i                 
*/
