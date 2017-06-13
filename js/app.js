'use strict';

var hours = [' 6 am ',' 7 am ',' 8 am ',' 9 am ',' 10 am ',' 11 am ' ,' 12 pm ',' 1 pm ',' 2 pm ',' 3 pm ',' 4 pm ',' 5 pm ',' 6 pm ',' 7 pm ',' 8 pm ', ' Total '];
console.log(hours);

var findRandomCookies = function (store) {
  var total = 0;
  var cookieSales = [];
  //for loop of length of hours array to do some math
  for (var i = 0; i < 15; i++) {
    var sales = Math.floor(Math.random() * (store.maxCust - store.minCust + 1) + store.minCust);
    cookieSales.push(sales);
    total += sales;
  }
  cookieSales.push(total);
  console.log(total);
  store.randomCookies = cookieSales;
  console.log(cookieSales);
  // store.randomCookies = cookieSales.slice(0);
  return cookieSales;
};

var FirstAndPike = {
  name : 'FirstAndPike',
  minCust : 23,
  maxCust : 65,
  avgCookies : 6.3,
  randomCookies : [],
  //
};
console.log(FirstAndPike);


var SeaTacAirport = {
  name : 'SeaTac Airport',
  minCust : 3,
  maxCust : 24,
  avgCookies : 1.2,
  randomCookies : [],
  //
};
console.log(SeaTacAirport);

var SeattleCenter = {
  name : 'Seattle Center',
  minCust : 11,
  maxCust : 38,
  avgCookies : 3.7,
  randomCookies : [],
  //
};
console.log(SeattleCenter);

var CapitolHill = {
  name : 'Capitol Hill',
  minCust : 20,
  maxCust : 38,
  avgCookies : 2.3,
  randomCookies : [],
  //
};
console.log(CapitolHill);

var Alki = {
  name : 'Alki',
  minCust : 2,
  maxCust : 16,
  avgCookies : 4.6,
  randomCookies : [],
  //
};
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
/*var p = document.createElement('p');
p.textContent = 'First and Pike ' + store.avgCookies + ' average cookies';
article.appendChild(p);*/
