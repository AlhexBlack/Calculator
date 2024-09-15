function addDisplay(char) {
   document.getElementById("display").value += char;
}
function clearAll() {
    document.getElementById("display").value = "";
}
function clearOne() {
    const screen = document.getElementById("display");
    screen.value = screen.value.slice(0 , -1);
}
function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "error"
    }
}