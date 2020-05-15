// select the form
document.getElementById('form').addEventListener('submit', totalResult);

// now use function
function totalResult(e){
console.log('comculate!!');

// declear element for number part
// the number of goombas
const goombasNumber = document.getElementById('goombasNumber').value;

// the goombas price
const goombasPrice = document.getElementById('goombasPrice').value;


// number of bob-ombs
const bobNumber = document.getElementById('bobNumber').value;

// price of bob-ombs
const bobPrice = document.getElementById('bobPrice').value;


// number of cheep cheeps
const cheepNumber = document.getElementById('cheepNumber').value;

// price of cheep cheeps
const cheepPrice = document.getElementById('cheepPrice').value;

// declear element for result part

const goombasCost = document.getElementById('goobasCost');
const bobCost = document.getElementById('bobCost');
const cheepCost = document.getElementById('cheepCost');
const totalCost = document.getElementById('totalCost');

// calculate ui
const goombasTotalPrice = parseFloat(goombasNumber * goombasPrice);
const bobTotalPrice = parseFloat(bobNumber * bobPrice );
const cheepTotalPrice = parseFloat(cheepNumber * cheepPrice);
const allTotalPrice = parseFloat(goombasTotalPrice + bobTotalPrice + cheepTotalPrice);

// the result part

goombasCost.value = goombasTotalPrice;
bobCost.value = bobTotalPrice;
cheepCost.value = cheepTotalPrice;
totalCost.value = allTotalPrice;

e.preventDefault();
}
