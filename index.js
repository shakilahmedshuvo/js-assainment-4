// 1.mindGame Function
function mindGame(inputNumber) {
    let number = ((inputNumber * 3 + 10) / 2 - 5)
    return number;
}

// 2.evenOdd Functon
function evenOdd(inputString) {
    let length = inputString.length;
    if (length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// 3.isLGSeven Function
function isLGSeven(num) {
    if (num < 7) {
        return 7 - num;
    } else {
        return num * 2;
    }
}

// 4.findingBadData Function
function findingBadData(numbers) {
    let count = 0;
    for (const num of numbers) {
        if (num < 0) {
            count++;
        }
    }
    return count;
}




