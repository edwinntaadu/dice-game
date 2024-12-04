// Generate a random number between 1 and 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log("Random Number:", randomNumber1);
// console.log("Random Number:", randomNumber2);

// Select the left dice image element
let diceImage1 = document.querySelector(".img1");
let diceImage2 = document.querySelector(".img2");

// Update the image source to the corresponding dice image
diceImage1.src = `./images/dice${randomNumber1}.png`;
diceImage2.src = `./images/dice${randomNumber2}.png`;

// console.log(`dice image1 set to: dice${randomNumber1}.png`);
// console.log(`dice image2 set to: dice${randomNumber2}.png`);

// select the h1 element
let heading = document.querySelector("h1");

// Update the <h1> text based on the dice values
if (randomNumber1 > randomNumber2) {
    heading.textContent = "Payer1 wins! 🚩";
}   else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player2 wins 🚩";
}   else {
    heading.textContent = "It is a draw! 🎲" 
}

