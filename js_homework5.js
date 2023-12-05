//ДЗ1
var NewYear = {
    Christmastree: 'Ялинка',
    dish: 'Вареники',
    melody: 'Щедрик',
    guests: ['Снігуронька', ' дід Мороз'],
    
    getInfo() {
        for (const key in this) {
          const value = this[key];
          if (typeof value !== 'function') {
            console.log(`${key}: ${value}`);
          }
        }
    }
};

NewYear.getInfo();
NewYear.drink = 'Шампанське!';
NewYear.getInfo();

//ДЗ2
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
};

services['Розбити скло'] = "200 грн";

services.price = function () {
    let totalCost = 0;

    for (const price of Object.values(this)) {
        const priceValue = parseInt(price, 10);
        if (!Number.isNaN(priceValue)) {
            totalCost += priceValue;
        }
    }

    return totalCost;
};

services.minPrice = function () {
    let minPrice = Infinity;

    for (const price of Object.values(this)) {
        const priceValue = parseInt(price, 10);
        if (!Number.isNaN(priceValue) && priceValue < minPrice) {
            minPrice = priceValue;
        }
    }

    return minPrice;
};

services.maxPrice = function () {
    let maxPrice = -Infinity;

    for (const price of Object.values(this)) {
        const priceValue = parseInt(price, 10);
        if (!Number.isNaN(priceValue) && priceValue > maxPrice) {
            maxPrice = priceValue;
        }
    }

    return maxPrice;
};

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());