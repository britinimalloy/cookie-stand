'use strict';

var hours = [' 6 am ',' 7 am ',' 8 am ',' 9 am ',' 10 am ',' 11 am ' ,' 12 pm ',' 1 pm ',' 2 pm ',' 3 pm ',' 4 pm ',' 5 pm ',' 6 pm ',' 7 pm ',' 8 pm ', ' Total '];
console.log(hours);

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
  //store.randomCookies = cookieSales;
  console.log(cookieSales);
  return cookieSales;
};
// ===============================================================
function CreateStores (name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.randomCookies = findRandomCookies(this);
}

CreateStores.prototype.render = function(table) {
  // create a row eith a header for the store name,
  // enough columns (td) to be hours.length
  // to hold the generated numbers for each hours
  // needs the last column to a total
  // append this row to the table
  var random = findRandomCookies(this);
  var row = document.createElement('tr'); //this is the parent for th and td elements
  table.appendChild(row);

  var th = document.createElement('th');
  //this is for the name of the store
  th.textContent = this.name;
  row.appendChild(th);

  //make a for loop to create enough td for the whole array
  for (var i = 0; i < 16; i++) {
    var td1 = document.createElement('td');
    //var li = document.createElement('li');
    //li.textContent = hours[i] + random[i];
    td1.textContent = /*hours[i] +*/ random[i];
    //ul.appendChild(li);
    row.appendChild(td1);
  }
  //var td1 = document.createElement('td');
  //row.appendChild(td1);
};
// ===============================================================
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

// ==============================================
/*var getStoreInfo = function (store) {
  var random = findRandomCookies(store);

  var parentElement = document.getElementById('locations');

  var article = document.createElement('article');
  parentElement.appendChild(article);

  var h2 = document.createElement('h2');
  h2.textContent = store.name;
  article.appendChild(h2);

  var ul = document.createElement('ul');
  article.appendChild(ul);

  for (var i = 0; i < 16; i++) {
    var li = document.createElement('li');
    li.textContent = hours[i] + random[i];
    ul.appendChild(li);
  }
};*/
// ==============================================
//getStoreInfo(FirstAndPike);
tableRender ();
//getStoreInfo(SeaTacAirport);
//getStoreInfo(SeattleCenter);
//(CapitolHill);
//getStoreInfo(Alki);

// call the function to create the table
function tableRender () { //to create the table
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
  //
}
