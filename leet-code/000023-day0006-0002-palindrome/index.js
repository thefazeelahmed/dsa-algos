function processData(input) {
  //Enter your code here

  let text = input.split("").reverse().join("") === input ? "YES" : "NO";
  console.log(text);
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
