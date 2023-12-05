//Написати свою реалізацію функції isNaN. 
function myIsNaN(value) {
    
    return typeof value === 'number' && value !== value;
}
console.log(myIsNaN(NaN));      // true


const exampleString = 'Hello';

// ДЗ 2  

function pad(str, symbol, count, addToStart) {
    if (typeof str !== 'string' || typeof symbol !== 'string' || typeof count !== 'number' || typeof addToStart !== 'boolean') {
                console.error('Неправильні типи аргументів');
        return str;
    }

    const currentLength = str.length;
    let targetLength;

    if (count > currentLength) {
        targetLength = count;
    } else {
        targetLength = currentLength;
    }

    let padding = '';

    while (padding.length < targetLength - currentLength) {
        padding += symbol;
    }

    if (addToStart) {
        return padding + str;
    } else {
        return str + padding;
    }
}

// Приклад виклику функції
const paddedString = pad('qwerty', '+', 6, true);
console.log(paddedString); // '+qwerty'

//ДЗ 3
function checkProbabilityTheory(count) {
    if (typeof count !== 'number' || count <= 0 || !Number.isInteger(count)) {
        console.error('Неправильний параметр count');
        return;
    }

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const min = 100;
        const max = 1000;
        const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
        if (randomNum % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const totalNumbers = evenCount + oddCount;
    const evenPercentage = (evenCount / totalNumbers) * 100;
    const oddPercentage = (oddCount / totalNumbers) * 100;

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
}

// Приклад виклику функції
checkProbabilityTheory(1000);