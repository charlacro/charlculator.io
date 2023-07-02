// Const of Varaibles querySelector that select for HTML elements.
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//Define the function of AC, C, %, empty return.
const calculate = (btnValue) => {
  console.log(btnValue);
  if(btnValue === "=" && output !== ""){
    // If output is % it will replace with /100 before evaluating.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    // All Clear Button
    output = "";
  } else if (btnValue === "C") {
    // Clear Button last character from the display ouput.
    output = output.toString().slice(0, -1);
  } else {
    // If the ouput is empty and click special character button it will return to a empty.
    if(output == "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

 // Adding event listener for the buttons, to call calculate() on click.
 buttons.forEach((button) => {
  //Button click event listener calls the calculate() with the data set value as argument.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
 });