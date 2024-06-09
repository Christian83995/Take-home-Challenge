const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function transformString(s) {
    const length = s.length;
    
    
    const divisibleBy3 = (length % 3 === 0);
    const divisibleBy5 = (length % 5 === 0);
    const divisibleBy15 = (length % 15 === 0);
    
    if (divisibleBy15) {
        
        const reversedStr = s.split('').reverse().join('');
        const asciiCodes = reversedStr.split('').map(char => char.charCodeAt(0)).join(' ');
        return asciiCodes;
    } else if (divisibleBy5) {
        
        const asciiCodes = s.split('').map(char => char.charCodeAt(0)).join(' ');
        return asciiCodes;
    } else if (divisibleBy3) {
        
        const reversedStr = s.split('').reverse().join('');
        return reversedStr;
    } else {
        
        return s;
    }
}

function transformStringFromUserInput() {
    rl.question("Enter a string: ", (inputString) => {
        const transformedString = transformString(inputString);
        console.log("Transformed string:", transformedString);
        rl.close();
    });
}

transformStringFromUserInput();
