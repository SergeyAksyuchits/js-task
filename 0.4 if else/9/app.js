const a = +prompt();


if (a<10) {
    console.log("однозначное");
} else if (a > 9 && a < 100) {
    console.log("двузначное");

} else if (a > 99 ) {
    console.log("многозначное");
}