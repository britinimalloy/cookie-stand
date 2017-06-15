'use strict';
var table = document.createElement('table');

var hours = [' 6 am ',' 7 am ',' 8 am ',' 9 am ',' 10 am ',' 11 am ' ,' 12 pm ',' 1 pm ',' 2 pm ',' 3 pm ',' 4 pm ',' 5 pm ',' 6 pm ',' 7 pm ',' 8 pm ', ' Total '];

// get random numbers
var findRandomCookies = function (store) {
  var total = 0;
  var cookieSales = [];
  for (var i = 0; i < 15; i++) {
    var sales = Math.floor((Math.random() * (store.maxCust - store.minCust + 1) + store.minCust) * store.avgCookies);
    cookieSales.push(sales);
    total += sales;
  }
  cookieSales.push(total);
  return cookieSales;
};

// object "factory" LOL
function CreateStores (name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = parseInt(minCust);
  this.maxCust = parseInt(maxCust);
  this.avgCookies = parseFloat(avgCookies);
  this.randomCookies = findRandomCookies(this);
}

// function to create and populate the rows of the table
CreateStores.prototype.render = function(table) {
  var random = findRandomCookies(this);
  var row = document.createElement('tr');
  table.appendChild(row);

  var th = document.createElement('th');
  th.textContent = this.name;
  row.appendChild(th);

  for (var i = 0; i < 16; i++) {
    var td1 = document.createElement('td');
    td1.textContent = random[i];
    row.appendChild(td1);
  }
};

// =========event handling=========================================
var locationForm = document.getElementById('addLocationsInformation');// this facilitates DOM access

locationForm.addEventListener('submit',
  function (event) {
    event.preventDefault();
    var location = event.target.location.value;
    var custMin = event.target.custMin.value;
    var custMax = event.target.custMax.value;
    var cookieAvg = event.target.cookieAvg.value;

    var newLocation = new CreateStores(location, custMin, custMax, cookieAvg);
    newLocation.location = location;
    newLocation.custMin = custMin;
    newLocation.custMax = custMax;
    newLocation.cookieAvg = cookieAvg;
    newLocation.render(table);
    locationForm.reset();
  }
);

tableRender ();

// function to create the table
function tableRender () {
  var parentElement = document.getElementById('locations');
  parentElement.appendChild(table);

  var row1 = document.createElement('tr');
  table.appendChild(row1);

  var th = document.createElement('th');
  row1.appendChild(th);

  for (var i = 0; i < 16; i++) {
    var th1 = document.createElement('th');
    th1.textContent = hours[i];
    row1.appendChild(th1);
  }
}
