// 1.mindGame Function
function mindGame(inputNumber) {
    let number = ((inputNumber * 3 + 10) / 2 - 5)
    return number;
}

// 2.evenOdd Functon
function evenOdd(inputString) {
    var length = inputString.length;
    if (length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
