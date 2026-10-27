let screen = document.getElementById("screen");
let buttons = document.querySelectorAll(".btns");

buttons.forEach(button => {
    button.onclick = () => {
        let value = button.innerText;

        if (value === "C") {
            screen.value = "";
        } 
        else if (value === "=") {
            screen.value = eval(screen.value);
        } 
        else {
            screen.value += value;
        }
    };
});
