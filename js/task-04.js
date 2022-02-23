let counterEl = document.querySelector("#value");
let counterValue = 0;

const btnDecrement = document.querySelector("#counter button:first-child");
const btnIncrement = document.querySelector("#counter button:last-child");

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});
