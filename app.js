'using struct';


const storeValues = [];
const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// const storehours

// create our Cookie Stand constructor
function Store(name, minCust, maxCust, avgSale) {
  // define our store properties
  this.name = name;
  this.minCustomers = minCust;
  this.maxCustomers = maxCust;
  this.averageCookiesPerCustomer = avgSale;
  this.dailyTotal = 0;
  this.sales = []; // array for cookies sales
  storeValues.push(this);
}

Store.prototype.hours = storeHours;
// generate a random amount of customers per hour
Store.prototype.generateCustomers = function () {
  // generate a random number within min and max
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
};
Store.prototype.generateSales = function() {
  let total = 0;
  for (let i = 0; i < this.hours.length; i++) {
    // run generate customers
    let randomCustomers = this.generateCustomers();

    // multiply by average sales
    let salesValue = Math.floor(randomCustomers * this.averageCookiesPerCustomer);

    // add to the total
    total += salesValue;

    // push value into sales array
    this.sales.push(salesValue);
  }
  this.dailyTotal = total;
};
Store.prototype.displayTable = function (banana) {
  let tableBody = document.getElementById('store-sales');

  // create a row in an HTML table for a single store
  // create 1 tr for all store data
  let storeRow = document.createElement('tr');

  // add 1 td with the store name
  let storeNameCell = document.createElement('th');
  storeNameCell.textContent = this.name;
  storeRow.appendChild(storeNameCell);

  // add a td for each data point in the sales array
  for (let i =0; i < this.sales.length; i++) {
    let salesCell = document.createElement('td');
    salesCell.textContent = this.sales[i];
    storeRow.appendChild(salesCell);
  }

  // add 1 more td for the daily total
  let totalCell = document.createElement('td');
  totalCell.textContent = this.dailyTotal;
  storeRow.appendChild(totalCell);

  // append the entire row to the body
  tableBody.appendChild(storeRow);
};

new Store('Seattle', 23, 65, 6.3);
new Store('Lima', 2, 16, 4.6);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
// console.log(storeValues);

for (let i = 0; i < storeValues.length; i++) {
  let store = storeValues[i];
  store.generateSales();
  store.displayTable();
}
console.log(storeValues);
generateFooter();

// functions for creating our table footer
//   loops through our store hours, and all stores
//     for each hour we append a new cell to our footer row
//    at the very end we append the daily totals.
function generateFooter() {
  let tableBody = document.getElementById('store-sales');
  let footerRow = document.createElement('tr');

  // add the 'totals" string to the row
  footerRow.appendChild(newCell('Totals', 'th'));

  // outer loop is for each hour
  let grandTotal = 0;
  for (let i = 0; i < storeHours.length; i++) {
    let salesAtHour = 0;

    for(let j = 0; j < storeValues.length; j++) {
      salesAtHour += storeValues[j].sales[i];
    }
    footerRow.appendChild(newCell(salesAtHour));
  }

  // once more just for daily grand totals
  for(let k = 0; k < storeValues.length; k++) {
    grandTotal += storeValues[k].dailyTotal;
  }

  footerRow.appendChild(newCell(grandTotal));
  tableBody.appendChild(footerRow);
}

// we can makes things a little drier with a helper function.
function newCell(newData, element = 'td') {
  let newCell = document.createElement(element);
  newCell.innerHTML = newData;
  return newCell;
}










// BELOW IS ALL THE ATTEMPTS


// const storeValues = [];
// const storeHours = [
//   '6am', '7am', '8am', '9am', '10am',
//   '11am','12pm', '1pm', '2pm', '3pm',
//   '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'
// ];

// // create pur cookie stand constructor
// function Store(name, minCustomers, maxCustomers, averageCookies){
//   this.name = name;
//   this.minCustomers = maxCustomers;
//   this.maxCustomers = maxCustomers;
//   this.averageCookies = averageCookies;
//   this.sales; //array of cookies sales
//   storeValues.push(this);
//   this.dailyTotal;

// }
// Store.prototype.hours = storeHours;

// // generate random amount of customers per hour
// Store.prototype.generateCustomersPerHour = function(){
//   //generate random number within max and min
//   return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);

// };
// Store.prototype.generateSales = function(){
//   let total = 0;
//   for(let i = 0; i<this.hours.length; i++){
//     let randomCustomers = this.generateCustomersPerHour();
//     let salesValues = randomCustomers * this.averageCookies;
//     // add to the total
//     total += salesValues;
//     this.sales.push(salesValues);

//   }
//   this.dailyTotal = total;

// };

// //
// Store.prototype.displayTable = function(){
//   let tableBody = document.getElementById('store-sales');

//   //create a row in an html for a single store
//   let storeRow = document.createElement('tr');

//   //create 1 'tr' for all store data
//   // add 1 'td' with the store name
//   let storeNameCell = document.createElement('td');
//   storeNameCell.textContent = this.name;
//   storeRow.appendChild(storeNameCell);
//   //add a td for each point in the sales array
//   for (let i =0; i < this.sales.length; i++){
//     let salesCell = document.createElement('td');
//     salesCell.textContent = this.sale[i];
//     storeRow.appendChild(salesCell);
//   }
//   // add 1 more td for the daily total
//   let totalCell = document.createElement('td');
//   totalCell.textContent = this.dailyTotal;
//   storeRow.appendChild(totalCell);

//   // append the entire row to the body
//   tableBody.appendChild(storeRow);
// };

// new Store('Seattle', 23, 65, 6.3);
// new Store('Lima', 2, 16, 4.6);
// new Store('Tokoyo', 3, 24, 1.2);
// new Store('Dubai', 11, 38, 3.7);
// new Store('Paris', 20, 38, 2.3);

// for(let i = 0; i < storeValues.length; i++){
//   let store = storeValues[i];
//   store.generateSales();
//   store.displayTable();
// }
// console.log(storeValues);
// generateFooter();

// // functions for creating our table footer
// function generateFooter(){
//   let tableBody = document.getElementById('store-sales');
//   let footerRow = document.createElement('tr');

//   //add the 'totals' string to the row
//   let totalCell = document.createElement('td');
//   totalCell.textContent = 'totals';
//   footerRow.appendChild(totalCell);


//   // outer loop is for each hour
//   let grandTotal = 0;
//   let grandCell = document.createElement('td');
//   for(let i = 0; i < storeHours.length; i++){
//     let salesAtHour = 0;
//     let dataCell = document.createElement('td');

//     for(let j = 0; j < storeValues.length; j++){
//       salesAtHour += storeValues[j].sale[i];
//     }
//     dataCell.textContent = salesAtHour;
//     footerRow.appendChild(dataCell);
//   }
//   for(let k = 0; k<storeValues.length; k++){

//     grandTotal += storeValues[k].dailyTotal; // adding too much should be moved
//   }
//   grandCell.textContent = grandTotal;
//   footerRow.appendChild(grandCell);
//   tableBody.appendChild(footerRow);
// }
// new Tokyo();

// // Constructor function for the third shop location - Dubai
// function Dubai() {
//   this.minCustomers = 11;
//   this.maxCustomers = 38;
//   this.averageCookies = 3.7;
//   this.cookiesPerHour = [];

//   this.generateCustomersPerHour = function() {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//   };

// // new Seattle();

//   this.displayResults = function() {
//     const outputElement = document.getElementById('location3-list');

//     for (let i = 0; i < this.cookiesPerHour.length; i++) {
//       const listItem = document.createElement('li');
//       listItem.textContent = `Hour ${i + 1}: ${this.cookiesPerHour[i]} cookies`;
//       outputElement.appendChild(listItem);
//     }
//   };
//   this.simulateCookieSales();
//   this.displayResults();

// }

// new Dubai();
// // Constructor function for the fourth shop location - Paris
// function Paris() {
//   this.minCustomers = 23;
//   this.maxCustomers = 65;
//   this.averageCookies = 6.3;
//   this.cookiesPerHour = [];

//   this.generateCustomersPerHour = function() {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//   };

//   this.simulateCookieSales = function() {
//     for (let i = 0; i < 14; i++) {
//       const customers = this.generateCustomersPerHour();
//       const cookiesSold = Math.round(customers * this.averageCookies);
//       this.cookiesPerHour.push(cookiesSold);
//     }
//   };

//   this.displayResults = function() {
//     const outputElement = document.getElementById('location4-list');

//     for (let i = 0; i < this.cookiesPerHour.length; i++) {
//       const listItem = document.createElement('li');
//       listItem.textContent = `Hour ${i + 1}: ${this.cookiesPerHour[i]} cookies`;
//       outputElement.appendChild(listItem);
//     }
//   };
//   this.simulateCookieSales();
//   this.displayResults();

// }




















// new Paris();
// // Constructor function for the fifth shop location - Lima
// function Lima() {
//   this.minCustomers = 23;
//   this.maxCustomers = 65;
//   this.averageCookies = 6.3;
//   this.cookiesPerHour = [];

//   this.generateCustomersPerHour = function() {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//   };

//   this.generateCustomersPerHour = function() {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//   };

//   this.simulateCookieSales = function() {
//     for (let i = 0; i < 14; i++) {
//       const customers = this.generateCustomersPerHour();
//       const cookiesSold = Math.round(customers * this.averageCookies);
//       this.cookiesPerHour.push(cookiesSold);
//     }
//   };

//   this.displayResults = function() {
//     const outputElement = document.getElementById('location2-list');


// }
// new Lima();
