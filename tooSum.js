// problem statement 4
//given an array of integers numbers and an integer target,
//return the indices of two number such that they add up to target.
//if there is no solution then return undefined
// you may assume that each input would have exactly one solution,and you may not use the same element twice.
//if there is no solution then return undefined
//Time complexity=>o(n)

//?input
//[2,11,7,15]and 9

//? output

//[0,2]( because 2+7=9)

const twoSum = (arr, target) => {
  const numMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const complement = target - currentNumber;

console.log(currentNumber,complement);


    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(currentNumber, i);
    console.log(numMap);
  }

  return undefined
};

console.log(twoSum([2,11,7,15],9));
