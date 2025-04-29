const a = prompt();
const b = +prompt();

if (!isNaN(b)) {
    console.log(a[b]);

} else {
    console.log("индекс вне диапозона");

}


