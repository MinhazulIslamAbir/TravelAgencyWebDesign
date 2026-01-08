const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter your word: ", name => {
    for(let i = 0, j = name.length; i < j; i++, j--){
        if(name[i] !== name[j]){
            console.log("Not palindrome");
            readline.close();
        }
    }
    console.log("Palindrome")
})
