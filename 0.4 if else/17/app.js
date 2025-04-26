const a = +prompt();

const root = Math.sqrt(a);
if (Number.isInteger(root)) {
    console.log(root);
} else  {
    console.log(root.toFixed(2));

} 
