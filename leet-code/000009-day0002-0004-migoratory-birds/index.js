"use strict";

const fs = require("fs");

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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  var counts = {};
  var min = 0;
  var minKey;

  for (var i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) counts[arr[i]] += 1;
    else counts[arr[i]] = 1;
  }

  min = counts[Object.keys(counts)[0]];
  minKey = Object.keys(counts)[0];

  for (let key in counts) {
    if (counts[key] > min) {
      min = counts[key];
      minKey = key;
    }
  }

  return parseInt(minKey);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
