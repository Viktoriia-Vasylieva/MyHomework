let Age = prompt('Введіть свій вік', '');

if (Age !== null && Age !== "" && Age >= 0) {
    var Age10 = Age % 10;
    var Age100 = Age % 100;

    if (Age10 === 1 && Age100 !== 11) {
        alert(Age + ' рік');
    } else if ((Age10 >= 2 && Age10 <= 4) && (Age100 < 10 || Age100 >= 20)) {
        alert(Age + ' роки');
    } else {
        alert(Age + ' років');
    }
} else {
    alert("Введене число від'ємне або не є числом.");
}
		
var unit = prompt('Введіть одиницю вимірювання (км, год, кг):');
var amount = prompt('Введіть кількість:');

var result;

switch (unit) {
    case 'км':
        result = amount + ' км це ' + amount * 1000 + ' м.';
        break;
    case 'год':
        result = amount + ' год. це ' + amount * 60 + ' хв.';
        break;
    case 'кг':
        result = amount + ' кг це ' + amount * 1000 + ' гр.';
        break;
    default:
        result = 'Невідома одиниця вимірювання.';
}

alert(result);    