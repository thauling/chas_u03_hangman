/*
Ett fungerande spel i JavaScript som går att spela på en webbsida
Spelet ska gå att spela tills spelaren antingen vinner (gissar rätt ord) eller förlorar (gubben blir hängd)
Spelaren måste kunna gissa minst 5 gånger innan gubben blir hängd
Spelaren ska kunna starta om spelet efter antingen vinst eller förlust
Orden som ska kunna gissas måste kunna innehålla samma bokstav flera gånger (tänk på att vissa ord har samma bokstav tre eller fler gånger)
Webbsidan skall även uppfylla följande krav:
Fungerar i flera olika webbläsare och på flera olika typer av enheter:
PC desktop (upplösning 1920 x 1280) 
Apple iPhone 8 (414x736)
Design är valfri men följande saker måste finnas med:
Knappar för samtliga bokstäver
Visuell representation av hänga gubbe-förfarandet för varje steg av spelets process.
*/

/*
frontend:
create 27? buttons corresponding to all letters in the alphabet
create img element that accepts changing images representing all (8) stages of hangman,
The classic order is:
First wrong answer: Draw and upside-down "L." This is the post the man hangs from.
Second: Draw a small circle for the "head" underneath the horizontal line of the "L."
Third: Draw a line down from the bottom of the head for the "body."
Fourth: Draw one arm out from the middle of his body for the "arm."
Fifth: Draw the other arm.
Sixth: Draw one diagonal line from the bottom of the body for the first "leg."
Seventh: Draw the other leg.
Eighth: Connect the head to the post with a "noose." Once you draw the noose the players have lost the game.
*/


// import word from words.js to test if import works
const word = wordArr[0]; //wordArr is in words.js
console.log(word);

// import array of hangman images
const imageUrlArr0 = ["./images/0.svg"];
const imageUrlArr = ["./images/0.svg", "./images/1.svg", "./images/2.svg", "./images/3.svg", "./images/4.svg", "./images/5.svg",
  "./images/6.svg", "./images/7.svg", "./images/8.svg", "./images/9.svg"]

//create frontend interface, a panel with all letters of the English alphabet 
const lettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'];

// frontend for keys
const letterPosition = document.querySelector(".letter-buttons");
// frontend for displaying chosen letter
const pickedLetter = document.querySelector(".container2");
// frontend for showing hangman images
const hungMan = document.querySelector(".container1");
// frontend for showing underscore-placeholders for word
const wordDisplay = document.querySelector(".container3");
//lettersArr.forEach(letter => letterPosition.innerHTML += letter);



//const wordArr2 = ['whatever','something else']; // for testing
//const el = document.querySelector(".container");
// reveal chosen word
//el.innerHTML += `${wordArr[1]} ${returnRndWord(wordArr)} `;

//helper function to get retrieve clicked chars
function getClickedChars() {
  //get text from html element
  let text = document.querySelector('.container2').textContent.trim(); //trim() to remove white space
  return text.slice(-1); //slice -1 to get last char
  
}

function replacePlaceholder(word, clickedChar){
  word.includes(clickedChar) ? console.log('is in word') : console.log('sorry, not present');
}


function displayPlaceholder(rndWord) {
  //code here
  const el = document.querySelector(".container3");
  const chosenWord = rndWord;
  const regex = /\D/ig;  //\D is a wildcard for any non-digit char
  const placeholder = chosenWord.replaceAll(regex, '_ ');
  //el.innerHTML += `${wordArr[1]} ${returnRndWord(wordArr)} `;
  el.innerHTML += placeholder;

}

//select random word from loaded word dict
function returnRndWord(arr) {
  //code here
  const rndIndex = Math.floor(Math.random() * arr.length);
  return arr[rndIndex];
}

function displayCartoon(imgArr) {
  // CODE HERE{
  imgArr.map(item => {
    const img = document.createElement("IMG");
    img.setAttribute("src", item);
    //img.setAttribute("width", "500");
    //img.setAttribute("height", "500");
    img.setAttribute("alt", "");
    hungMan.appendChild(img);
  })
  
}

function advanceHangMan(imageUrlArr, wrongGuessCount) {
  //code here
  
}


//main program loop

//create keyboard and reveal clicked characters
lettersArr.map((item) => {
  const button = document.createElement("button");
  letterPosition.appendChild(button);
  button.innerHTML = item;
  button.addEventListener("click", () => {
    pickedLetter.innerHTML += item;
    //console.log(pickedLetter);
    console.log(getClickedChars());
    // replace _ with Char if present

  });
});

displayCartoon(imageUrlArr);
displayPlaceholder(returnRndWord(wordArr));
//console.log(getClickedChars());



