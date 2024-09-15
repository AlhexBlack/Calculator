const maxLength = 14;
const addSmallFont = 7;
let isResultDisplayed = false;

function addDisplay(char) {
   const display = document.getElementById("display");

   if (isResultDisplayed) {
    display.value = "";
   }

   if (display.value.length < maxLength ) {
    display.value += char;
    adjustFontSize();
    isResultDisplayed = false
   }
}
function addDisplayOpp(char) {
    const display = document.getElementById("display");

    if (display.value.length < maxLength) {
        display.value += char;
        adjustFontSize();
        isResultDisplayed = false;
    }
}
function clearAll() {
    document.getElementById("display").value = "";
    isResultDisplayed = false;
    adjustFontSize();
}
function clearOne() {
    const screen = document.getElementById("display");
    screen.value = screen.value.slice(0 , -1);
    isResultDisplayed = false;
    adjustFontSize();
}
function calculate() {
    const display = document.getElementById("display");

    let expression = display.value.replace(/−/g , "-")
                                  .replace(/×/g , "*")
                                  .replace(/÷/g , "/")

    try {
        display.value = eval(expression);
        if (display.value.length > maxLength) {
            display.value = display.value.slice(0 , maxLength);
        }
        isResultDisplayed = true;
    } catch (error) {
        display.value = "error"
        isResultDisplayed = true;
    }
    adjustFontSize();
}

function adjustFontSize() {
    const display = document.getElementById("display")

    if (display.value.length > addSmallFont) {
        display.style.fontSize="5vh";
    }
    else {
        display.style.fontSize="10vh";
    }
}