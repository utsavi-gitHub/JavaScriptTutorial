//Challenge 1- Your Age in Days
function ageInDays(){
var birthYear = prompt("What year you were born... Good friend?");
    var ageInDayss = (2019 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
 document.getElementById('ageInDays').remove();
}

//Challege 2-  Cat Generator
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://media.giphy.com/media/BNjtXQRuV0anS/200w_d.gif";
    div.appendChild(image);
}              

//Challange 3- Rock, Paper, Scissors
function rpsGame(yourChoice){   
console.log(yourChoice);
var humanChoice, botChoice;
//humanChoice = yourChoice.id;
botChoice = numberToChoice (randToRpsInt());
console.log(botChoice);
//results = decideWinner (humanChoice, botChoice);  //[0, 1] human lost | bot won
//message = finalMessage (results); //{'message': "You won!", 'color': 'green'}
//rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
return ['Rock', 'Paper', 'Scissors'][number];
}