function processData(input) {
  //Enter your code here

  +input > 0
    ? console.log(input.split("").reverse().join(""))
    : console.log(
        "-" + input.split("").slice(1, input.length).reverse().join("")
      );

  //else console.log(+(+))
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
