function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
    display.style.color = '#333'; // Change text color to gray
}

function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
    display.style.color = '#333'; // Reset text color to gray
}

function calculateResult() {
    var display = document.getElementById('display');
    display.value = eval(display.value);
    display.style.color = '#333'; // Reset text color to gray
}
