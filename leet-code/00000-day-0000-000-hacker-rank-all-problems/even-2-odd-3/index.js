"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  let numsMod = nums.map((item) => (item % 2 === 0 ? +item * 2 : +item * 3));
  return numsMod;
}

function main() {
  const n = +readLine();
  const a = readLine().split(" ").map(Number);

  console.log(modifyArray(a).toString().split(",").join(" "));
}
