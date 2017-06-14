'use strict';

var hours = [' 6 am ',' 7 am ',' 8 am ',' 9 am ',' 10 am ',' 11 am ' ,' 12 pm ',' 1 pm ',' 2 pm ',' 3 pm ',' 4 pm ',' 5 pm ',' 6 pm ',' 7 pm ',' 8 pm ', ' Total '];
console.log(hours);

// get random numbers
var findRandomCookies = function (store) {
  var total = 0;
  var cookieSales = [];
  for (var i = 0; i < 15; i++) {
    var sales = Math.floor(Math.random() * (store.maxCust - store.minCust + 1) + store.minCust);
    cookieSales.push(sales);
    total += sales;
  }
  cookieSales.push(total);
  console.log(total);
  console.log(cookieSales);
  return cookieSales;
};

// object "factory" LOL
function CreateStores (name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
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
/*var locationForm = document.getElementById('addLocationsInformation');

locationForm.addEventListener('submit',
  function (event) {
    //
  }
  //
};*/

// =========instantiate all the objects============================
var FirstAndPike = new CreateStores ('First And Pike', 23, 65, 6.3);
console.log(FirstAndPike);

var SeaTacAirport = new CreateStores ('SeaTac Airport', 3, 24, 1.2);
console.log(SeaTacAirport);

var SeattleCenter = new CreateStores ('Seattle Center', 11, 38, 3.7);
console.log(SeattleCenter);

var CapitolHill = new CreateStores ('Capitol Hill', 20, 38, 2.3);
console.log(CapitolHill);

var Alki = new CreateStores ('Alki', 2, 16, 4.6);
console.log(Alki);

tableRender ();

// function to create the table
function tableRender () {
  var parentElement = document.getElementById('locations');
  var table = document.createElement('table');
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

  FirstAndPike.render(table);
  SeaTacAirport.render(table);
  SeattleCenter.render(table);
  CapitolHill.render(table);
  Alki.render(table);
}
