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

var getStoreInfo = function (store) {
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
};

getStoreInfo(FirstAndPike);
getStoreInfo(SeaTacAirport);
getStoreInfo(SeattleCenter);
getStoreInfo(CapitolHill);
getStoreInfo(Alki);
