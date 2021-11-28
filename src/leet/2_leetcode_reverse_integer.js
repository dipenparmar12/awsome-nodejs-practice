/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let number = 0
  if(x < 0){
    x *= -1;
    number =  x.toString().split('').reverse().join('') * -1
  }else{
    number = x.toString().split('').reverse().join('')
  }

  if ((number < (Math.pow(2, 31) * -1)) || (number > Math.pow(2, 31) - 1)) return 0;
  return number
  
};

console.log(reverse(12345))
console.log(reverse(-9876))
console.log(reverse(66455))