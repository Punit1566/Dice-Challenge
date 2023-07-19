var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage= "dice"+randomNumber1+".png";
var randomImageSource="images/"+randomDiceImage;
var first=document.querySelector(".img1");
first.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var second = document.querySelector(".img2");
second.setAttribute("src", randomImageSource2);
// if(randomNumber1===1){
//     document.querySelector(".img1").setAttribute("./images/dice1.png")
// }
// if (randomNumber1 === 2) {
//     document.querySelector(".img1").setAttribute("./images/dice2.png");
// }
// if (randomNumber1 === 3) {
//     document.querySelector("img1").setAttribute("./images/dice3.png");
// }
// if (randomNumber1 === 4) {
//     document.querySelector(".img1").setAttribute("./images/dice4.png");
// }
// if (randomNumber1 === 5) {
//     document.querySelector(".img1").setAttribute("./images/dice5.png");
// }
// if (randomNumber1 === 6) {
//     document.querySelector(".img1").setAttribute("./images/dice6.png");
// }

// if (randomNumber2 === 1) {
//     document.querySelector(".img2").setAttribute("dice1.png");
// }
// if (randomNumber2 === 2) {
//     document.querySelector(".img2").setAttribute("dice2.png");
// }
// if (randomNumber2 === 3) {
//     document.querySelector(".img2").setAttribute("dice3.png");
// }
// if (randomNumber2 === 4) {
//     document.querySelector(".img2").setAttribute("dice4.png");
// }
// if (randomNumber2 === 5) {
//     document.querySelector(".img2").setAttribute("dice5.png");
// }
// if (randomNumber2 === 6) {
//     document.querySelector(".img2").setAttribute("dice6.png");
// }
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent ="🚩 Player 1 wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}