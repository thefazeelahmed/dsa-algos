'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*


 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const hourArr = s.split(':');
    let hours = hourArr.shift();
    
    
    const amPm = s.slice(-2);
    
    if(amPm === "PM"){
        if(hours ==="12"){
            hours =12;
        }
        else{
        hours = parseInt(hours)+12;
        }
    }else{
        if(hours === "12"){
            hours="00";
        }
    }
    
    const str = hourArr.join(":");
    return (hours+":"+str.substring(0,str.length-2))
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}