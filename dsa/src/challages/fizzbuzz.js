console.clear();

const fizzBuzz = (num) => {
  const fizz = 3;
  const buzz = 5;

  for (let i = 1; i <= num; i++) {
    if (i % fizz === 0 && i % buzz === 0) {
      console.log('fizzbuzz');
    } else if (i % fizz === 0) {
      console.log('fizz');
    } else if (i % buzz === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
	
  // for (var j = 1; j <= num; i++, msg = '') {
  //   if (!(j % 3)) msg += 'Fizz';
  //   if (!(j % 5)) msg += 'Buzz';
  //   console.log(msg || j);
  // }
};

module.exports = fizzBuzz;

// const fizzBuzz = (num) => {
//   const fizz = 3;
//   const buzz = 5;
//   let output = '';

//   Array(Number(num))
//     .fill(0)
//     .forEach((_, i) => {

//       if (i % fizz === 0 && i % buzz === 0) {
//         output += 'FizzBuzz\n';
//       } else if (i % fizz === 0) {
//         output += 'Fizz\n';
//       } else if (i % buzz === 0) {
//         output += 'Buzz\n';
//       } else {
//         output += `${i}\n`;
//       }
//     });

//   return output;
// };
