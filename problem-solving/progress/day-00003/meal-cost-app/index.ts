"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
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

function solve(
  meal_cost: number,
  tip_percent: number,
  tax_percent: number
): void {
  // Write your code here

  const tip: number = (meal_cost / 100) * tip_percent;
  const tax: number = (meal_cost / 100) * tax_percent;
  console.log((meal_cost + tip + tax).toFixed(0));
}

function main() {
  const meal_cost: number = parseFloat(readLine().trim());

  const tip_percent: number = parseInt(readLine().trim(), 10);

  const tax_percent: number = parseInt(readLine().trim(), 10);

  solve(meal_cost, tip_percent, tax_percent);
}
