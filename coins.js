/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (num) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
  
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
  }
while (num > 0) {
    if (num >= 0.25) {
        coinPurse.quarters = Math.floor(num / 0.25);
        num = num -coinPurse.quarters*0.25;
    } 
    else if (num >= 0.10) {
      coinPurse.dimes = Math.floor(num / 0.10);
      num = num - coinPurse.dimes *0.10;
    } 
    else if (num >= 0.05) {
      coinPurse.nickels = Math.floor(num / 0.05);
      num = num - coinPurse.nickels * 0.05;
    } 
    else {
      coinPurse.pennies = Math.floor(num / 0.01);
      num = num - coinPurse.pennies * 0.01;
    }
  }

 /*if (number > .25 ) {
  coinPurse.quarters= Math.floor(number/.25);
  number -= coinPurse.quarters*.25;
   coinPurse.dimes = Math.floor(number/.1);
    number = number - coinPurse.dimes*.1
    coinPurse.nickels = Math.floor(number/.05);
    number = number - coinPurse.nickels*.05
    coinPurse.pennies = Math.round(number/.01);
}

 else if (number > .09) {
    coinPurse.dimes = Math.floor(number/.1);
    number = number - coinPurse.dimes*.1;
    coinPurse.nickels = Math.floor(number/.05);
    number = number - coinPurse.nickels*.05
    coinPurse.pennies = Math.round(number/.01);
  }
 else if (number > .04) {
    coinPurse.nickels = Math.floor(number/.05);
    number = number - coinPurse.nickels*.05;
    coinPurse.pennies = Math.round(number/.01);
  }
 else {
    coinPurse.pennies = Math.round(number/.01);
  }
  */

  return coinPurse;
}

var coins = coinCounter(0.36);
console.log(coins);