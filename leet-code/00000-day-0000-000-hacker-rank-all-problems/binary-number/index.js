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

function main() {
  const n = parseInt(readLine().trim(), 10);
  let arr = n.toString(2).split(0);

  var longest = arr.sort(function (a, b) {
    return b.length - a.length;
  })[0];

  console.log(longest.length);
}
