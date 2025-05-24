// 1. setTimeout
// 2. setInterval
let count = 0;
function fun() {
    console.log("working");
}

// 2 arguments
// 1st is a function
// 2nd is time in mills
/*setTimeout(() => {
    console.log('working');
}, 3000);*/

let interval1 = setInterval(() => {
    const showSecond = document.getElementById("show-second");
    showSecond.innerHTML = count;
    count++;
}, 1000);

document.getElementById("reset-timer").addEventListener('click', () => {
    clearInterval(interval1);
})
