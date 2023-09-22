// input boxes
const bill = document.getElementById("theBill");
const people = document.getElementById("numOfPeople");
const customTip = document.getElementById("new");
// buttons
const fivePercent = document.getElementById("five");
const tenPercent = document.getElementById("ten");
const fifteenPercent = document.getElementById("fifteen");
const twentyFivePercent = document.getElementById("twentyFive");
const reset = document.getElementById("reset");
const fiftyPercent = document.getElementById("fifty");
// result
const tipResult = document.getElementById("tip");
const totalResult = document.getElementById("total");
const clearResult = document.getElementById("reset");

fivePercent.addEventListener("click", function tipFivePercent() {
  let value1 = Number(bill.value) * (1 + 0.05) - Number(bill.value);
  let value2 = value1 + Number(bill.value) / people.value;
  tipResult.innerText = `$${Math.round(value1 * 100) / 100}`;
  totalResult.innerText = `$${Math.round(value2 * 100) / 100}`;
});
tenPercent.addEventListener("click", function tipTenPercent() {
  let value1 = Number(bill.value) * (1 + 0.1) - Number(bill.value);
  let value2 = value1 + Number(bill.value) / people.value;
  tipResult.innerText = `$${Math.round(value1 * 100) / 100}`;
  totalResult.innerText = `$${Math.round(value2 * 100) / 100}`;
});
fifteenPercent.addEventListener("click", function tipFifteenPercent() {
  let value1 = Number(bill.value) * (1 + 0.15) - Number(bill.value);
  let value2 = value1 + Number(bill.value) / people.value;
  tipResult.innerText = `$${Math.round(value1 * 100) / 100}`;
  totalResult.innerText = `$${Math.round(value2 * 100) / 100}`;
});
twentyFivePercent.addEventListener("click", function tipTwentyFivePercent() {
  let value1 = Number(bill.value) * (1 + 0.25) - Number(bill.value);
  let value2 = value1 + Number(bill.value) / people.value;
  tipResult.innerText = `$${Math.round(value1 * 100) / 100}`;
  totalResult.innerText = `$${Math.round(value2 * 100) / 100}`;
});
fiftyPercent.addEventListener("click", function tipFiftyPercent() {
  let value1 = Number(bill.value) * (1 + 0.5) - Number(bill.value);
  let value2 = value1 + Number(bill.value) / people.value;
  tipResult.innerText = `$${Math.round(value1 * 100) / 100}`;
  totalResult.innerText = `$${Math.round(value2 * 100) / 100}`;
});
customTip.addEventListener("input", function newTip() {
  let value1 =
    Number(bill.value) * (Number(customTip.value) / 100 + 1) -
    Number(bill.value);
  let value2 = value1 + Number(bill.value) / people.value;
  tipResult.innerText = `$${Math.round(value1 * 100) / 100}`;
  totalResult.innerText = `$${Math.round(value2 * 100) / 100}`;
});

const refreshPage = () => {
  location.reload();
};

reset.addEventListener("click", refreshPage);
function validNumber() {
  if (Number(bill.value) <= 0 || Number(people.value <= 0)) {
    let error = document.getElementById("errorInfo");
    error.innerHTML = "Can't be zero";
  }
}
bill.addEventListener("input", validNumber);
people.addEventListener("input", validNumber);
