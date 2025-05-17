console.log("External JavaScript running");


function buttonClickHandler() {
    let heading = document.getElementById("heading_text2");
heading.innerHTML = "Populated by JavaScript";
}

function calculateAddition() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let addition = Number(num1.value) + Number(num2.value);
    let result = document.getElementById("result");
    result.innerHTML = addition;
}
