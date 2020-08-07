
const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const button = document.getElementById("change-btn");
const color = document.querySelector(".color");

button.addEventListener("click", function() {

    // Gets a random number between 0 and 2.
    // NOTE: Incldes decimals.
    // const randomNum = 2;
    const randomNum = getRandomNumber();
    // console.log(randomNum);

    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}