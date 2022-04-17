process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
  for (i = 1; i <= 100; i++) {
    i % 15 === 0
      ? console.log("FizzBuzz")
      : i % 3 === 0
      ? console.log("Fizz")
      : i % 5 === 0
      ? console.log("Buzz")
      : console.log(i);
  }
});
