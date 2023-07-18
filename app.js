'use strict';


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
    for (let i = 0; i < 14; i++) {
      const customers = this.generateCustomersPerHour();
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  },

  displayResults: function() {
    const outputElement = document.getElementById('location1-list');
    // const listElement = document.createElement('ul');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i+1}: ${this.cookiesPerHour[i]} cookies`;
      outputElement.appendChild(listItem);
    }

    // outputElement.appendChild(listElement);
  }
};
Seattle.simulateCookieSales();
Seattle.displayResults();
// Object literal for the first shop location
const Tokyo = {
  minCustomers: 3,
  maxCustomers: 24,
  averageCookies: 1.2,
  cookiesPerHour: [],

  generateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  simulateCookieSales: function() {
    for (let i = 0; i < 14; i++) {
      const customers = this.generateCustomersPerHour();
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  },

  displayResults: function() {
    const outputElement = document.getElementById('location2-list');
    // const listElement = document.createElement('ul');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i+1}: ${this.cookiesPerHour[i]} cookies`;
      outputElement.appendChild(listItem);
    }

    // outputElement.appendChild(listElement);
  }
};
Tokyo.simulateCookieSales();
Tokyo.displayResults();

// Object literal for the third shop location
// Object literal for the first shop location
const Dubai = {
  minCustomers: 11,
  maxCustomers: 38,
  averageCookies: 3.7,
  cookiesPerHour: [],

  generateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  simulateCookieSales: function() {
    for (let i = 0; i < 14; i++) {
      const customers = this.generateCustomersPerHour();
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  },

  displayResults: function() {
    const outputElement = document.getElementById('location3-list');
    // const listElement = document.createElement('ul');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i+1}: ${this.cookiesPerHour[i]} cookies`;
      outputElement.appendChild(listItem);
    }

    // outputElement.appendChild(listElement);
  }
};
Dubai.simulateCookieSales();
Dubai.displayResults();

// Object literal for the fourth shop location
// Object literal for the first shop location
const Paris = {
  minCustomers: 23,
  maxCustomers: 65,
  averageCookies: 6.3,
  cookiesPerHour: [],

  generateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  simulateCookieSales: function() {
    for (let i = 0; i < 14; i++) {
      const customers = this.generateCustomersPerHour();
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  },

  displayResults: function() {
    const outputElement = document.getElementById('location4-list');
    // const listElement = document.createElement('ul');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i+1}: ${this.cookiesPerHour[i]} cookies`;
      outputElement.appendChild(listItem);
    }

    // outputElement.appendChild(listElement);
  }
};
Paris.simulateCookieSales();
Paris.displayResults();

// Object literal for the first shop location
const Lima = {
  minCustomers: 23,
  maxCustomers: 65,
  averageCookies: 6.3,
  cookiesPerHour: [],

  generateCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  simulateCookieSales: function() {
    for (let i = 0; i < 14; i++) {
      const customers = this.generateCustomersPerHour();
      const cookiesSold = Math.round(customers * this.averageCookies);
      this.cookiesPerHour.push(cookiesSold);
    }
  },

  displayResults: function() {
    const outputElement = document.getElementById('location5-list');
    // const listElement = document.createElement('ul');

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Hour ${i+1}: ${this.cookiesPerHour[i]} cookies`;
      outputElement.appendChild(listItem);
    }

    // outputElement.appendChild(listElement);
  }
};
Lima.simulateCookieSales();
Lima.displayResults();
