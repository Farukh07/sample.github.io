const metreInput = document.querySelector(".form-control");

let metre;

metreInput.addEventListener("input", (input) => {
  metre = input.target.value;
});

const goButton = document.querySelector(".btn");

goButton.addEventListener("click", () => {
  compute();
});

const feet = document.querySelector(".feetOutput");

const inches = document.querySelector(".inchOutput");

const cms = document.querySelector(".cmOutput");

const compute = () => {
  feet.value = (parseFloat(metre) * 3.28084).toFixed(3);
  inches.value = (parseFloat(metre) * 39.3701).toFixed(3);
  cms.value = (parseFloat(metre) * 100).toFixed(2);
};
