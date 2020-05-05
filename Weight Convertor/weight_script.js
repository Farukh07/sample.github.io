const kgInput = document.querySelector(".form-control");

let kgs;

kgInput.addEventListener("input", (input) => {
  kgs = input.target.value;
});

const goButton = document.querySelector(".btn");

goButton.addEventListener("click", () => {
  compute();
});

const pound = document.querySelector(".lbsOutput");

const ounces = document.querySelector(".ozOutput");

const grams = document.querySelector(".gramsOutput");

const compute = () => {
  pound.value = (parseFloat(kgs) * 2.20462).toFixed(3);
  ounces.value = (parseFloat(kgs) * 35.274).toFixed(3);
  grams.value = (parseFloat(kgs) * 1000).toFixed(2);
};
