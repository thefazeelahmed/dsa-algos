"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  let dupArr = [...arr];
  let dupArrRev = [...arr];

  dupArrRev.sort((a, b) => b - a).pop();
  dupArr.sort((a, b) => a - b).pop();

  const sum = dupArr.reduce((acc, item) => item + acc, 0);
  const sumTwo = dupArrRev.reduce((acc, item) => item + acc, 0);
  console.log(sum + " " + sumTwo);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
