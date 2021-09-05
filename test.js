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
  } else {
    console.log(i);
  }
}
console.log(arr.join());

function MyArea(myRadius) {
  let area = Math.pow(myRadius, 2) * Math.PI;

  console.log("radius: " + myRadius + " area: " + area);
}

let myRadius = parseFloat(prompt("Enter the radius of your circle in cm:", 0));

MyArea(myRadius);
