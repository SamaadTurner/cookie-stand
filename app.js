'use strict';

// const Seattle = {
//   maxHourlyCustomers: 65,
//   minHourlyCustomers: 23,
//   averageCookiePerCust: 6.3,
//   cookiesPerHour: [],
//   generateCustomersPerHouse: function(){
//     return Math.floor(Math.random() * (this.maxHourlyCustomers-this.minHourlyCustomers+1)) + this.minHourlyCustomers;
//   }
// };



// Object literal for the first shop location
const Seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  averageCookies: 6.3,
  cookiesPerHour: [],

  generateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  simulateCookieSales: function() {
    for (let i = 0; i < this.averageCookies.length; i++) {
      const customers = this.generateCustomersPerHour();
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  },

  displayResults: function() {
    const outputElement = document.getElementById('location1');
    const listElement = document.createElement('ul');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i+1}: ${this.cookiesPerHour[i]} cookies`;
      listElement.appendChild(listItem);
    }

    outputElement.appendChild(listElement);
  }
};

// Object literal for the second shop location
const Tokoyo = {
  minCustomers: 3,
  maxCustomers: 24,
  averageCookies: 1.2,
  cookiesPerHour: [],

  generateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  simulateCookieSales: function() {
    for (let i = 0; i < this.averageCookies.length; i++) {
      const customers = this.generateCustomersPerHour();
      //round to whole cookie
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  },

  displayResults: function() {
    const outputElement = document.getElementById('location2');
    const listElement = document.createElement('ul');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i+1}: ${this.cookiesPerHour[i]} cookies`;
      listElement.appendChild(listItem);
    }

    outputElement.appendChild(listElement);
  }
};

// Object literal for the third shop location
const Dubai = {
  minCustomers: 11,
  maxCustomers: 38,
  averageCookies: 2.3,
  cookiesPerHour: [],

  generateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  simulateCookieSales: function() {
    for (let i = 0; i < this.averageCookies.length; i++) {
      const customers = this.generateCustomersPerHour();
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  },

  displayResults: function() {
    const outputElement = document.getElementById('location3');
    const listElement = document.createElement('ul');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i+1}: ${this.cookiesPerHour[i]} cookies`;
      listElement.appendChild(listItem);
    }

    outputElement.appendChild(listElement);
  }
};

// Object literal for the fourth shop location
const Paris = {
  minCustomers: 20,
  maxCustomers: 38,
  averageCookies:2.3,
  cookiesPerHour: [],

  generateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  simulateCookieSales: function() {
    for (let i = 0; i < this.averageCookies.length; i++) {
      const customers = this.generateCustomersPerHour();
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  },

  displayResults: function() {
    const outputElement = document.getElementById('location4');
    const listElement = document.createElement('ul');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i+1}: ${this.cookiesPerHour[i]} cookies`;
      listElement.appendChild(listItem);
    }

    outputElement.appendChild(listElement);
  }
};

// Object literal for the fifth shop location
const Lima = {
  minCustomers: 2,
  maxCustomers: 16,
  averageCookies: 4.6,
  cookiesPerHour: [],

  generateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  simulateCookieSales: function() {
    for (let i = 0; i < this.averageCookies.length; i++) {
      const customers = this.generateCustomersPerHour();
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  },

  displayResults: function() {
    const outputElement = document.getElementById('location5');
    const listElement = document.createElement('ul');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i+1}: ${this.cookiesPerHour[i]} cookies`;
      listElement.appendChild(listItem);
    }

    outputElement.appendChild(listElement);
  }
};

