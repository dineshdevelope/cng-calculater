let tripDistance = prompt("Enter Your Trip Distance in K/m");
console.log("Your Trip Distance :" + tripDistance + "K/m");
let fuelEfficency = prompt("Enter Your Fuel Efficiency per Liter");
console.log("Your Fuel Efficiency :" + fuelEfficency + " Per Liter");
let petrolCost = 100;
let kmCharge = petrolCost / fuelEfficency;
console.log("Fuel Charge Per K/m " + kmCharge);
let fuelCostForTrip = tripDistance * kmCharge;
console.log("Your Trip Fuel Cost is " + fuelCostForTrip);
