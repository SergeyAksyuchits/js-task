const a = +prompt();
// isNaN
// Math.sqrt
// Number.isInteger
// Math.round

if (!isNaN(a)) {
    const root = Math.sqrt(a);
    Number.isInteger(root)? console.log(root) : console.log(root.toFixed())


    if (Number.isInteger(root)) {
        console.log(root);


    } else {
        console.log(root.toFixed())
    }

}