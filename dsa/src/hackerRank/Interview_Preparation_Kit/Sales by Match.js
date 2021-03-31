// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let temp = {}
  let pairs = 0

  ar.forEach((el) => {
    el in temp ? (temp[el] += 1) : (temp[el] = 1)
    if (temp[el] % 2 === 0) {
      temp[el] = 0
      pairs += 1
    }
  })

  return pairs
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]) // expected 3 (3 pairs of two elements)

// Src: https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

/*
    temp = {
       10:-1
       20:0
       30:0
       50:0
    }
    pairs=3
    
    [10, 20, 20, 10, 10, 30, 50, 10, 20]
                                      i
    el in temp ? pairs+1 & temp[i]=-1 

*/
