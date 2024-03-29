// 1.mindGame Function
function mindGame(inputNumber) {
    let number = ((inputNumber * 3 + 10) / 2 - 5)
    return number;
}

// 2.evenOdd Function
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
    if (num <= 7) {
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

// 5.gemsToDiamond function
function gemsToDiamond(gems1, gems2, gems3) {
    const totalDiamonds = gems1 * 21 + gems2 * 32 + gems3 * 43;
    return totalDiamonds > 2000 ? totalDiamonds - 2000 : totalDiamonds;
}
