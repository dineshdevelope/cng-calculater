/* let firstName = prompt("Enter Your First Name");
let lastName = prompt("Enter Your Last Name");
const fullName = firstName + " " + lastName;
console.log(fullName);

let func = document.getElementById("TripDistance");
console.log(func);
if (firstName && lastName) {
  func.innerText = "Welcome" + " " + fullName;
}
 */
const tripDistance = document.getElementById("TripDistance");

const fuelEfficiency = document.querySelector("#Fuel-Efficiency");

const fuelCost = document.querySelector("#Fuel-Cost");

const calBtn = document.querySelector("#calBtn");

calBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const distanceKm = tripDistance.value;
  console.log(tripDistance.value);
  const efficiency = fuelEfficiency.value;
  console.log(fuelEfficiency.value);
  const costForFuel = fuelCost.value;
  console.log(fuelCost.value);

  const result = (distanceKm / efficiency) * costForFuel;
  console.log(result);
});
