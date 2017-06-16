'use strict';
// =======variables================================================
var table = document.createElement('table');
var tBody = document.createElement('tbody');
var tFooter = document.createElement('tfoot');


var hours = [' 6 am ',' 7 am ',' 8 am ',' 9 am ',' 10 am ',' 11 am ' ,' 12 pm ',' 1 pm ',' 2 pm ',' 3 pm ',' 4 pm ',' 5 pm ',' 6 pm ',' 7 pm ',' 8 pm ', ' Total '];

var storeHourlySales = ['Total'];// for pushing in the total randomCookies for each hour

var hourlyTotals = [];// add each proper index from each array to this one

var stores = [];// for the store objects

var cookieSales = [];

// =====get random numbers========================================
var findRandomCookies = function (store) {
  var total = 0;
  // var cookieSales = [];
  for (var i = 0; i < hours.length - 1 ; i++) {
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
  cookieSales = [];
  this.randomCookies = findRandomCookies(this);
  stores.push(this);
}
console.log(stores);
// function to create and populate the rows of the table
CreateStores.prototype.render = function() {
  //var random = findRandomCookies(this);
  var row1 = document.createElement('tr');
  tBody.appendChild(row1);

  var th = document.createElement('th');
  th.textContent = this.name;
  row1.appendChild(th);

  for (var i = 0; i < hours.length; i++) {
    var td1 = document.createElement('td');
    td1.textContent = this.randomCookies[i];
    row1.appendChild(td1);
  }

  var totsHrs = 0;
  for (var ii = 0; ii < stores.length; ii++) {
    var stHrTotals ;
    totsHrs += stHrTotals;
  }
  storeHourlySales.push(totsHrs);
  return storeHourlySales;
};
// =========event handling========================================
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
    newLocation.render();
    locationForm.reset();
  }
);

tableRender ();

// function to create the table
function tableRender () {
  var parentElement = document.getElementById('locations');
  parentElement.appendChild(table);

  var tHead = document.createElement('thead');
  table.appendChild(tHead);

  table.appendChild(tBody);

  table.appendChild(tFooter);

  var row1 = document.createElement('tr');
  tHead.appendChild(row1);

  var row2 = document.createElement('tr');
  tFooter.appendChild(row2);

  var th = document.createElement('th');
  row1.appendChild(th);

  for (var i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = hours[i];
    row1.appendChild(th);
  }

  for (var ii = 0; ii < storeHourlySales.length; ii++) {
    var td = document.createElement('td');
    td.textContent = storeHourlySales[ii];
    row2.appendChild(td);
  }
}
