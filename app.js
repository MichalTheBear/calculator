let currentNum = "";
let nextNum = "";

let buttons = document.querySelectorAll(".buttons");
let resultDisplay = document.querySelector(".resultDisplay");

let plus = document.querySelector(".plus");
let equal = document.querySelector(".equal");

//first number

for (let button of buttons) {
    button.addEventListener("click", (e) => {
        currentNum = parseInt(currentNum + e.target.textContent);
        console.log(currentNum);
        resultDisplay.innerHTML = currentNum;
    })
}




// first number and then click PLUS button and enter second number

plus.addEventListener("click", () => {
    for (let button of buttons) {
        button.addEventListener("click", (e) => {
            nextNum = parseInt(nextNum + e.target.textContent);
            console.log(nextNum);
            resultDisplay.innerHTML = nextNum;
        })
    }
    equal.addEventListener("click", () => {
        resultDisplay.innerHTML = currentNum + nextNum;
    })
})