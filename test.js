const arrs = "lrft";
const arrx = arrs.split("");
const arrt = arrx.reverse().join("");
console.log(arrt);

let arr = [];
const a = 20;
for (let i = 1; i <= a; i++) {
  arr.push(i);
}
for (let i = 1; i < a; i++) {
  if (i % 3 === 0) {
    arr[i - 1] = "three";
  } else if (i % 5 === 0) {
    arr[i - 1] = "five";
  } else if (i % 3 === 0 && i % 5 === 0) {
    arr[i - 1] = "threefive";
  }
}
console.log(arr.join());

function MyArea(myRadius) {
  let area = Math.pow(myRadius, 2) * Math.PI;

  console.log("radius: " + myRadius + " area: " + area);
}

let myRadius = Math.round(Math.random() * 101) + 1;

MyArea(myRadius);

function isValid(str) {
  let arr = [];
  const brackets = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    if (isClosedBrackets(current)) {
      if (brackets[current] != arr.pop()) {
        return false;
      }
    } else {
      arr.push(current);
    }
  }
  return arr.length === 0;
}

function isClosedBrackets(char) {
  return ["}", ")", "]"].indexOf(char) > -1;
}

console.log(isValid("{([])}"));
