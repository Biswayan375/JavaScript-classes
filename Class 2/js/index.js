
function calculate() {
    var exp = 100;
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const operation = document.getElementById("operation");

    let result;

    if (operation.value === "+") {
        result = Number(num1.value) + Number(num2.value);
    } else if (operation.value === "-") {
        result = Number(num1.value) - Number(num2.value);
    } else if (operation.value === "*") {
        result = Number(num1.value) * Number(num2.value);
    } else {
        result = Number(num1.value) / Number(num2.value);
    }

    document.getElementById("result").innerHTML = "<font color='green'>"+result+"</font>";
}
var exp = "hello world";
console.log(document.getElementsByTagName("input"));
console.log(document.getElementsByClassName("bg-dark"));
console.log(exp);
