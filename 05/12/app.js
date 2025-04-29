const a = +prompt();
const b = +prompt();

if (!isNaN(a) && !isNaN(b)) {
    const sum = a + b;
    console.log("i'm ", sum)

} else {
    console.log("error");
    
}

