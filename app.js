'using struct';
//Replace the lists of your data for each store
// and build a single table of data instead.


//array that holds store hours
// let storeHoursArr = [
//   '6am', '7am', '8am', '9am', '10am',
//   '11am','12pm', '1pm', '2pm', '3pm',
//   '4pm', '5pm', '6pm', '7pm'
// ];
// loops through storeHoursArr assigning a 'td' element.
// let rowElement = document.createElement('td');
// let cellElement = document.createElement('tr');

let storeHoursArr = [
  '6am', '7am', '8am', '9am', '10am',
  '11am','12pm', '1pm', '2pm', '3pm',
  '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'
];

let TABLEHEAD = document.getElementById('table-head');
let rowElement = document.createElement('tr');
let nameElement = document.createElement('td');
nameElement.textContent = 'Location';
rowElement.appendChild(nameElement);
TABLEHEAD.appendChild(rowElement);
for(let i = 0; i < storeHoursArr.length; i++){
  let nameElement = document.createElement('td');
  nameElement.textContent = storeHoursArr[i];
  rowElement.appendChild(nameElement);

}





// Constructor function for the first shop location - Seattle
function Seattle() {
  this.minCustomers = 23;
  this.maxCustomers = 65;
  this.averageCookies = 6.3;
  this.cookiesPerHour = [];

  this.generateCustomersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  };

  this.simulateCookieSales = function() {
    for (let i = 0; i < 14; i++) {
      const customers = this.generateCustomersPerHour();
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  };

  this.displayResults = function() {
    const outputElement = document.getElementById('location1-list');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i + 1}: ${this.cookiesPerHour[i]} cookies`;
      outputElement.appendChild(listItem);
    }
  };

  this.simulateCookieSales();
  this.displayResults();
}

new Seattle();

// Constructor function for the second shop location - Tokyo
function Tokyo() {
  this.minCustomers = 3;
  this.maxCustomers = 24;
  this.averageCookies = 1.2;
  this.cookiesPerHour = [];

  this.generateCustomersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  };

  this.simulateCookieSales = function() {
    for (let i = 0; i < 14; i++) {
      const customers = this.generateCustomersPerHour();
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  };

  this.displayResults = function() {
    const outputElement = document.getElementById('location2-list');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i + 1}: ${this.cookiesPerHour[i]} cookies`;
      outputElement.appendChild(listItem);
    }
  };
  this.simulateCookieSales();
  this.displayResults();

}
new Tokyo();

// Constructor function for the third shop location - Dubai
function Dubai() {
  this.minCustomers = 11;
  this.maxCustomers = 38;
  this.averageCookies = 3.7;
  this.cookiesPerHour = [];

  this.generateCustomersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  };

  this.simulateCookieSales = function() {
    for (let i = 0; i < 14; i++) {
      const customers = this.generateCustomersPerHour();
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  };

  this.displayResults = function() {
    const outputElement = document.getElementById('location3-list');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i + 1}: ${this.cookiesPerHour[i]} cookies`;
      outputElement.appendChild(listItem);
    }
  };
  this.simulateCookieSales();
  this.displayResults();

}

new Dubai();
// Constructor function for the fourth shop location - Paris
function Paris() {
  this.minCustomers = 23;
  this.maxCustomers = 65;
  this.averageCookies = 6.3;
  this.cookiesPerHour = [];

  this.generateCustomersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  };

  this.simulateCookieSales = function() {
    for (let i = 0; i < 14; i++) {
      const customers = this.generateCustomersPerHour();
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  };

  this.displayResults = function() {
    const outputElement = document.getElementById('location4-list');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i + 1}: ${this.cookiesPerHour[i]} cookies`;
      outputElement.appendChild(listItem);
    }
  };
  this.simulateCookieSales();
  this.displayResults();

}

new Paris();
// Constructor function for the fifth shop location - Lima
function Lima() {
  this.minCustomers = 23;
  this.maxCustomers = 65;
  this.averageCookies = 6.3;
  this.cookiesPerHour = [];

  this.generateCustomersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  };

  this.simulateCookieSales = function() {
    for (let i = 0; i < 14; i++) {
      const customers = this.generateCustomersPerHour();
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  };

  this.displayResults = function() {
    const outputElement = document.getElementById('location5-list');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i + 1}: ${this.cookiesPerHour[i]} cookies`;
      outputElement.appendChild(listItem);
    }
  };
  this.simulateCookieSales();
  this.displayResults();


}
new Lima();
