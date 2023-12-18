function myBlend(arr) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = i + (Math.random() * (length - i) | 0);

    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
}

// Приклад:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("До перемішування:", arr);

myBlend(arr);

console.log("Після перемішування:", arr);

//дз2
const company = {
  name: 'Велика Компанія',
  type: 'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
    {
      name: 'Клієнт 1',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків',
      partners: [
        {
          name: 'Клієнт 1.1',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
        },
        {
          name: 'Клієнт 1.2',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
            {
              name: 'Клієнт 1.2.3',
              type: 'subSubCompany',
              uses: 'Рішення для продажу квитків',
              sells: 'Рішення для продажу квитків',
            },
          ],
        },
      ],
    },
    {
      name: 'Клієнт 2',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків',
    },
  ],
};

function findValueByKey(companyName, currentCompany = company) {
  if (currentCompany.name === companyName) {
    return currentCompany;
  }

  if (currentCompany.clients) {
    for (const client of currentCompany.clients) {
      const result = findValueByKey(companyName, client);
      if (result) {
        return result;
      }
    }
  }

  if (currentCompany.partners) {
    for (const partner of currentCompany.partners) {
      const result = findValueByKey(companyName, partner);
      if (result) {
        return result;
      }
    }
  }

  return null;
}

const companyName = 'Клієнт 1.2.3';
const result = findValueByKey(companyName);

if (result) {
  console.log(`Знайдено компанію за ім'ям '${companyName}':`, result);
} else {
  console.log(`Компанію за ім'ям '${companyName}' не знайдено.`);
}
