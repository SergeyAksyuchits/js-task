const a = +prompt();
const b = +prompt();

if (Math.abs(a) == Math.abs(b)) {
    if (a > 0 && b > 0) {
        console.log(" не противоположные");
    } else if (a > 0 && b < 0) {
        console.log("противоположные");
    } else if (b > 0 && a > 0) {
        console.log(" не противоположные");
    } else if (a < 0 && b < 0) {
        console.log("противоположные");
    }
}