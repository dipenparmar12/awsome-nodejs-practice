/**
 *
 * Complete the getMoneySpent function below.
 * @param {int[]} keyboards[n]: the keyboard prices
 * @param {int[]} drives[m]: the drive prices
 * @param {int} b: the budget
 * @returns {int} the maximum that can be spent, or  if it is not possible to buy both items
 * src: https://www.hackerrank.com/challenges/electronics-shop/problem
 */
function getMoneySpent(keyboards, drives, b) {
  let conbinations = []
  for (let i = 0; i < keyboards.length; i++) {
    conbinations = [
      ...conbinations,
      ...drives.map((usb) => usb + keyboards[i]).filter((ku) => b >= ku),
    ]
  }

  return Math.max(-1, ...conbinations)
}

/* Not worked, hmm!
  r=60
  [60,50,40], [12, 8, 5]
      i

   i=60,and r=must be more then 0
   r-i->0, k=? return false

   i=50
   r-i->10 r-k-> -2 return false
   r-i->10 r-k-> 2 return true
*/

/*
function getMoneySpent(keyboards, drives, b) {
  // return keyboards.reduce(
  //   (acc, curr) =>
  //     Math.max(acc, ...drives.map((usb) => usb + curr).filter((ku) => b >= ku)),
  //   -1
  // )

  // let bill = 0
  // keyboards = keyboards.sort((a,b)=>b-a)
  // drives = drives.sort((a,b)=>b-a)

  // for(let i=0; i<keyboards.length; i++){
  //   for(let j=0; j<drives.length; j++){
  //      let remains = b
  //       remains -= keyboards[i]
  //       if(remains > 0){
  //         remains -= drives[j]
  //         if(remains >= 0){
  //           return keyboards[i] + drives[j]
  //         }
  //       }
  //   }
  // }

  // return -1
}
*/