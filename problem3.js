import Stack from "./stack.js";

// problem statement 1

//given a string s containing just the characters "(",")","{","}","["and "]"
//determine if the input string is valid.
//an input string is valid if:
//    open brackets must be close by the same type of brackets.
//    open bracket must be close in the correct order.
//    every close bracket has a corresponding open bracket of the same type.

//? input and output
//?"() []{}"--> true
//?"([{}])"-->true
//?"(]"-->false
//?"(()"-->false

const bracketChecker = (str) => {
  const stack = new Stack();


  const bracketMap={
    ")":"(",
    "}":"{",
    "]":"[",

  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === "(" || char === "{" || char === "[") {
      if (stack.isEmpty()|| stack.pop()!==bracketMap[char]) {
        return false;
      }
    }
  }
  return stack.isEmpty();
};

console.log(bracketChecker("(){}[]"));
