"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let inputLines = [];
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine() {
  return inputLines[currentLine++];
}

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here

  const tip = (meal_cost / 100) * tip_percent;
  const tax = (meal_cost / 100) * tax_percent;
  console.log((meal_cost + tip + tax).toFixed(0));
}

function main() {
  const meal_cost = parseFloat(readLine().trim());

  const tip_percent = parseInt(readLine().trim(), 10);

  const tax_percent = parseInt(readLine().trim(), 10);

  solve(meal_cost, tip_percent, tax_percent);
}
