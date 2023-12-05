//ДЗ 1.1
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}
// Виклик функції з параметрами (висота 5, символ '*')
drawTriangle(5, '*');

//ДЗ 1.2
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = symbol.repeat(i);
        console.log(row);
    }
}
// Виклик функції з параметрами (висота 5, символ '*')
drawTriangle(5, '*');

//ДЗ 2
var sum = 0;

for (var i = 1; i <= 100; i++) {

    if (i % 3 !== 0) {
            sum += i;
    }
}
// Виводимо суму на екран
console.log("Сума чисел від 1 до 100 (не кратних 3): " + sum);

//ДЗ 3
function pow(x, y) {
    var result = 1;

    for (var i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}
// Виклик функції
var result = pow(2, 3);
console.log(result); 