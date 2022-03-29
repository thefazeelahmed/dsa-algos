'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = "",consonants="";
    s.split('').forEach((item)=>{
        if(item==="a"||item==="e"||item==="i"||item==="o"||item==="u"){
            vowels = vowels+item;
        }else{
            consonants= consonants+item;
        }
    })
    
    
    vowels.split('').forEach((item)=>{
        console.log(item)
    })
    
    consonants.split('').forEach((item)=>{
        console.log(item)
    })
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}