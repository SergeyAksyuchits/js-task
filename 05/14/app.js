const a = +prompt();

if (!isNaN(a)) {
    switch (a) {
        case 1:
            console.log("очень плохо");
            break;
        case 2:
            console.log("плохо");
            break;
        case 3:
            console.log("уд");
            break;
        case 4:
            console.log("хорошо");
            break;
        case 5:
            console.log("очень хорошо");
            break;
        default:
            console.log("не число");

            break;
    }
}
