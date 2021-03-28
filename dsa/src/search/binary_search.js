console.clear()

/**
 * Binary search implementation.
 * @param {*[]} sorted array
 * @param {Number} search term
 * @returns
 */
function binarySearch(sortedArr, find = 7) {
  let startInx = 0
  let endInx = sortedArr.length - 1
  let middleIndex = Math.floor((startInx + endInx) / 2)

  count = sortedArr.length // temp not required

  while (startInx <= endInx && count < sortedArr.length) {
    if (sortedArr[middleIndex] === find) {
      return sortedArr[middleIndex]
    }

    if (sortedArr[middleIndex] < find) {
      startInx = middleIndex
    } else {
      endInx = middleIndex
    }

    middleIndex = Math.floor((startInx + endInx) / 2)
    count++
  }

  return -1
}

binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 14)

/*
   f=25
   
   [4, 5, 7, 8, 9, 10, 12, 13, 14, 20, 25, 30]
   min                mid                 max
                      if mid<f (min=mid)
                       
                       
                      [ 12, 13, 14, 20,  25, 30]
                        min         mid     max
                                   mid<f 
                                 (min=mid)
                       
                                   
                                   [20,  25,  30]
                                    min  mid  max
                                         mid=25 (stop)
     

*/
