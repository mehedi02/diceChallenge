function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNumber1 = randomInteger(1, 6)
var randomNumber2 = randomInteger(1, 6)
path1 = "images/"+"dice"+randomNumber1+".png"
path2 = "images/"+"dice"+randomNumber2+".png"

document.querySelectorAll("img")[0].src=path1
document.querySelectorAll("img")[1].src=path2

if (randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML="Player 1 Wins🚩"
} else if (randomNumber1 < randomNumber2){
    document.querySelector(".container h1").innerHTML="🚩Player 2 Wins"
} else {
    document.querySelector(".container h1").innerHTML="Draw!"
}
// console.log(typeof(path))
// document.querySelectorAll("img")[0].setAttribute=path