let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let display = document.querySelector("#display");
let bmiValue = document.querySelector("#BMI-value");

height.addEventListener("keyup", calculateBMI);

function calculateBMI() {
  let heightVal = height.value;
  let weightVal = weight.value;
  let BMI = (weightVal / (heightVal * heightVal)).toFixed(1);
  bmiValue.textContent = BMI;
  //bmiValue.innerHTML = "<span>BMI</span>";
  bmiValue.style.visibility = "visible";

  if (BMI < 18.5) {
    display.style.visibility = "visible";
    display.innerText = "UNDERWEIGHT";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    display.style.visibility = "visible";
    display.innerText = "NORMAL";
  } else if (BMI >= 25 && BMI <= 29.9) {
    display.style.visibility = "visible";
    display.innerText = "OVERWEIGHT";
  } else if (BMI >= 30) {
    display.style.visibility = "visible";
    display.innerText = "OBESE";
  }

  if (heightVal == "") {
    display.style.visibility = "hidden";
    bmiValue.style.visibility = "hidden";
  }
}
