console.clear();
console.log(new Date().toLocaleString('en-IN'), '-------------');

const testF = (input) => {
  let m = Array(input)
    .fill(0)
    .map((_, i) =>
      Array(input)
        .fill('')
        // .map((_, ii) => i + '_' + ii)
        .map((_, ii) => '')
    );

  let top = 0;
  let bottom = m.length - 1;
  let left = 0;
  let right = m.length - 1; // m[0].length - 1;
  let moveTo = 'right';
  let counter = 0;

  while (top <= bottom && left <= right) {
    switch (moveTo) {
      case 'right':
        for (let i = left; i <= right; i++) {
          m[top][i] = counter;
          counter++;
        }
				top++
        moveTo = 'down';
    }

  }
  console.log(m);
  // console.log(top, bottom, left, right);
};

// testF(4);
testF(5);
// testF(6);

// 4
// [01 02 03 04]
// [12 13 14 05]
// [11 16 15 06]
// [10 09 08 07]

// 5
// [01 02 03 04 05]
// [16 17 18 19 06]
// [15 24 25 20 07]
// [14 23 22 21 08]
// [13 12 11 10 09]

// 3
// [1 2 3]
// [8 9 4]
// [7 6 5]
