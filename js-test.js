
// =====№12==============
 
    // function countProps(object) {
    //     let propCount = 0;
    //   // Change code below this line
    
    //     for (const key in object) {
    //         if (object.hasOwnProperty(key)) {
    //             propCount += 1;
    //             }
    //     }
    //     return propCount;
    //   // Change code above this line
    // }
    // countProps({});
    // console.log(countProps({}));
    
    // countProps({ name: "Mango", age: 2 });
    // console.log(countProps({ name: "Mango", age: 2 }))
    
// ====Шукаємо друга по імені=====

    // const friends = [
    //     { name: 'Mango', online: 'false' },
    //     { name: 'Kiwi', online: 'true' },
    //     { name: 'Polly', online: 'true' },
    //     { name: 'Ajax', online: 'false' },
    // ];
    // console.table(friends);

    // const findFriendByName = function (allFriends, frindName) {
    //     for (const friend of allFriends){
    //         // console.log(friend);
    //         console.log(friend.name);
    //         // console.log(friend.online);
    //     if (friend.name === frindName) {
    //         return "Знайшли";
    //         }    
    //     }
    //     return "Не знайшли";
    // }
    // console.log(findFriendByName(friends, 'Polly'));
    // console.log(findFriendByName(friends, 'Nataly'));

// =========№13==============

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// =========№14==============

 // Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.
 
//  ===1)
//  function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }
 //  ===2)
//  function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object)
    
//    for (const key of keys) {
//     propCount += 1;
//    }
//    return propCount;
//   }

// countProps({});  
// console.log(countProps({}));
  
 // ===3)
//  function countProps(object) {
//   
//   let propCount = 0;
//   const keys = Object.keys(object);
  
//   propCount = keys.length;
   
//   return propCount; 
  //   }  
//  console.log(countProps({}));
//  countProps({});
 
// ====№16===
// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const keys = Object.values(salaries);
//   for (const key of keys) {
//     totalSalary += key;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// countTotalSalary({});
// console.log(countTotalSalary({}));

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// console.log(countTotalSalary({mango: 100, poly: 150, alfred: 80}));

// ====№17===

// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// console.table(colors);

// for (const color of colors) {
//   hexColors.push(color.hex);
//   console.log(hexColors);
  
//   rgbColors.push(color.rgb);
//   console.log(rgbColors);
// }

// ===№18===

// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// console.table(products)
// function getProductPrice(productName) {
//   // Change code below this line
  
//   for (const product of products) {
//       if (product.name === productName) {
//       return product.price
//     }
//   }
//   return null;
// }
  
//   getProductPrice("Scanner")
//   console.log(getProductPrice('Scanner'))

//   getProductPrice("Rr")
//   console.log(getProductPrice('Rr'))
  // Change code above this line

// ===№19===
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// console.table(products);

// function getAllPropValues(propName) {
//   let namesArray = [];
  
//   for (const product of products) {
    
//     if (product.hasOwnProperty(propName)) {
//       namesArray.push(product[propName]);
//     }
//   }
//   return namesArray;
// }
// getAllPropValues("name");
// console.log(getAllPropValues("name"));

// ===№20===

// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару. Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;

//   for (const product of products) {
    
//     if (productName === product.name) {
//     totalPrice = product.quantity * product.price}
//   }
//   return totalPrice;  
//   }

//  calculateTotalPrice("Blaster")
//  console.log(calculateTotalPrice("Blaster"))
//   calculateTotalPrice("Radar")
// console.log(calculateTotalPrice("Radar"))
  
// ===№21===

// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні (meanTemperature). Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, today, tomorrow} = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(highTemperatures);
// console.log(meanTemperature);

// ===№22===

// У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди. Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// Change code below this line

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(highTemperatures);
// console.log(meanTemperature);


// ===№23===
// Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const{ yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;


// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(highIcon)


// ===№24===

// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
  
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);


// ===№25===

// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast. Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
// today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
// tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}
// } = forecast;

// console.log({highTomorrow, lowTomorrow, highToday})
// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;


// ===№26===
// Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast.

// Change code below this line
// function calculateMeanTemperature(forecast) {
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;

//   const { 
//     today: {
//     low: todayLow, 
//     high: todayHigh,
//     }, 
  
//   tomorrow: {
//     low: tomorrowLow,
//     high: tomorrowHigh,
//   }
//   }
//  = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} });

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }))


// ===№30===
// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми. Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const NewObject = { completed, category: "General", priority: "Normal",...data };
//   console.log(NewObject);
  
//   return NewObject;
  
  // Change code above this line
// }
//   makeTask({});
//   console.log(makeTask())


// ===№31===

// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму.

// // Change code below this line
// function add(...args) {
//   let totalSum = 0;
//   for (const arg of args){
//    totalSum += arg;
//   }
//   return totalSum
//   // Change code above this line
// }


// // ====№32===

// Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.

// function addOverNum(firstParameter,...args) {
//   let total = 0;

//     for (const arg of args) {
//       if (firstParameter < arg) {
//       total += arg }
//     }
//    return total;
//   }
  
  
// addOverNum(10, 12, 4, 11, 48, 10, 8)
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))


// ====№33===

// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.
// function findMatches(array,...args) {
//   const matches = []; // Don't change this line

//   for (const arrayItem of array) {
//     if (args.includes(arrayItem)) {
//       matches.push(arrayItem)
//     }
    
//   }
//   // Change code above this line
//   return matches;
// }

// findMatches([])
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))

// // ====№34===

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. Повертає рядок "Updating book <стара назва> to <нова назва>", де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`;
//   },
// }
// bookShelf.updateBook("Peter Pen", "Marry Poppins");
//   console.log(bookShelf.updateBook("Peter Pen", "Marry Poppins"))
//   // Change code above this line



// ===№35====

// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const oldIndex = this.books.indexOf(oldName); 
//     this.books.splice(oldIndex, 1, newName);
//     return "Film title was replaced: ${oldName} to ${newName}"
//     // Change code above this line
//   },
// };
// bookShelf.updateBook("Perfect Mothers", "Adore");
// console.log(bookShelf.updateBook("Perfect Mothers", "Adore"))


// ===№37===

// Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions(){
//     return this.potions;
//   }
//   // Change code above this line
// };
// atTheOldToad.getPotions();
// console.log(atTheOldToad.getPotions());


// ===№38===

// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     // Change code above this line
//   },
// };
// atTheOldToad.addPotion("Magic potion");
// console.log(atTheOldToad.addPotion("Magic potion"));
// console.log(atTheOldToad.potions);


// // ===№39====
// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionNameIndex = this.potions.indexOf(potionName)
//     this.potions.splice(potionNameIndex,1)

//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion("Magic potion");
// console.log(atTheOldToad.removePotion("Magic potion"));
// console.log(atTheOldToad.potions);


// ===№40===

// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const oldNameIndex = this.potions.indexOf(oldName);
//     this.potions.splice(oldNameIndex,1,newName)
  
//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName("Magic potion",'Strong potion');
// console.log(atTheOldToad.updatePotionName("Magic potion", "Strong potion"));

// console.log(atTheOldToad.potions);

// ===№41===

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.
// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i++) {
      
    if (potions[i].name === potionName) {
        potions.splice(i, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
       
      if (potion.name === oldName) {
        potion.name = newName;
        return
    }
  }
       return `Potion ${oldName} is not in inventory!`;
}
}
atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')
console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'))
