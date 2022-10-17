const numbers = [12, 97, 2, 33, 44, 18, 71];

const sumOfTwoNumbers = (nums, x) => {
  let result = false;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === x) {
        result = true;
        break;
      }
    }
  }

  console.log(result);
};

sumOfTwoNumbers(numbers, 73);
sumOfTwoNumbers(numbers, 5);
