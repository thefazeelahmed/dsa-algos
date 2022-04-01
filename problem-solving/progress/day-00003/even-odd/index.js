function processData(input) {
  //Enter your code here
  const data = input.split(/\n/);

  for (let i = 1; i <= parseInt(data[0]); i++) {
    let strEven = "",
      strOdd = "";
    for (let j = 0; j < data[i].length; j++) {
      if (j % 2 === 0) {
        strEven += data[i][j];
      } else {
        strOdd += data[i][j];
      }
    }
    console.log(strEven + " " + strOdd);
  }
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
