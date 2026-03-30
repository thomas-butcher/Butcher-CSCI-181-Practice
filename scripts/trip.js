const driver_name = "Driver";
const distance_miles = 300;
const mpg = 25;
const gas_price = 3.5;
const fuel_capacity = 15;
const is_round_trip = true;

let total_distance;

if (is_round_trip) {
  total_distance = distance_miles * 2;
} else {
  total_distance = distance_miles;
}

console.log(`Total trip distance: ${total_distance} miles`);

function calculateGallonsNeeded(total_distance, mpg) {
  return total_distance / mpg;
}

function calculateFuelCost(gallons, gas_price) {
  return gallons * gas_price;
}

// Calculate gallons needed and fuel cost
const gallons_needed = calculateGallonsNeeded(total_distance, mpg);
const total_cost = calculateFuelCost(gallons_needed, gas_price);

console.log("\n--- GAS STOPS ---");

// Loop to determine gas station stops
let current_miles = 0;
let stop_number = 0;
let total_spent = 0;
const miles_per_tank = fuel_capacity * mpg;

while (current_miles < total_distance) {
  current_miles += miles_per_tank;

  if (current_miles >= total_distance) {
    current_miles = total_distance;
  }

  stop_number++;
  const gallons_for_stop = fuel_capacity;
  const cost_for_stop = gallons_for_stop * gas_price;
  total_spent += cost_for_stop;

  console.log(
    `Stop ${stop_number}: ${current_miles} miles traveled | Total spent so far: $${total_spent.toFixed(2)}`,
  );
}

// Final summary
console.log("\n--- ROAD TRIP SUMMARY ---");
console.log(`Driver: ${driver_name}`);
console.log(`Total Distance: ${total_distance} miles`);
console.log(`Gallons Needed: ${Math.round(gallons_needed * 100) / 100}`);
console.log(`Estimated Total Cost: $${total_cost.toFixed(2)}`);
console.log(`\nHave a safe trip, ${driver_name}!`);
