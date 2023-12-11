var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
};

services['Розбити скло'] = "200 грн";

services.price = function () {
    let totalCost = 0;

    for (const serviceName in this) {
        if (typeof this[serviceName] === 'string' && this[serviceName].includes('грн')) {
            const priceValue = parseInt(this[serviceName], 10);
            if (!Number.isNaN(priceValue)) {
                totalCost += priceValue;
            }
        }
    }

    return totalCost;
};

services.minPrice = function () {
    let minPrice = Infinity;

    for (const serviceName in this) {
        if (typeof this[serviceName] === 'string' && this[serviceName].includes('грн')) {
            const priceValue = parseInt(this[serviceName], 10);
            if (!Number.isNaN(priceValue) && priceValue < minPrice) {
                minPrice = priceValue;
            }
        }
    }

    return minPrice;
};

services.maxPrice = function () {
    let maxPrice = -Infinity;

    for (const serviceName in this) {
        if (typeof this[serviceName] === 'string' && this[serviceName].includes('грн')) {
            const priceValue = parseInt(this[serviceName], 10);
            if (!Number.isNaN(priceValue) && priceValue > maxPrice) {
                maxPrice = priceValue;
            }
        }
    }

    return maxPrice;
};

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());