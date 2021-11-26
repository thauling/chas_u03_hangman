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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GLLOBAL VARIABLES AND CONSTANTS
// import word from words.js to test if import works
//const word = wordArr[0]; //wordArr is in words.js
//console.log(word);

// import array of hangman images
const imageUrlArr0 = ["./images/0.svg"];
const imageUrlArr = ["./images/0.svg", "./images/1.svg", "./images/2.svg", "./images/3.svg", "./images/4.svg", "./images/5.svg",
  "./images/6.svg", "./images/7.svg", "./images/8.svg", "./images/9.svg"];

//create frontend interface, a panel with all letters of the English alphabet 
const lettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'];

let wrongGuessCount = 0;
const chars = [];
let selectedWord = returnRndWord(wordArr);
const userWordArr = [];
const correctCharArr = [];
let selectedWordArr = Array.from(selectedWord);

// frontend for keys
const gameButtons = document.querySelector(".game-buttons");
// buttons for game navigation
const letterPosition = document.querySelector(".letter-buttons");
// frontend for displaying chosen letter
const pickedLetter = document.querySelector(".container2");
// frontend for showing hangman images
const hungMan = document.querySelector(".container1");
// frontend for showing underscore-placeholders for word
const wordDisplay = document.querySelector(".container3");
//lettersArr.forEach(letter => letterPosition.innerHTML += letter);

//helper function to get clicked chars
function getClickedChars() {
  //get text from html element
  let text = document.querySelector('.container2').textContent.trim(); //trim() to remove white space, shoudl use innerText instead to JUST get the text
  console.log(text, typeof (text));
  return text.slice(-1); //slice -1 to get last char

}

function displayPlaceholder(rndWord) {
  //displays underscores for every character in the word (separated by whitespace)
  const el = document.querySelector(".container3");
  const chosenWord = rndWord;
  const regex = /\D/ig;  //\D is a wildcard for any non-digit char, same as [^0-9], ig: i: ignoreCase = True, g: global = True (all instances are replaced, not only first one)  
  const placeholder = chosenWord.replaceAll(regex, '_ ');
  el.innerText = placeholder; //el.innerHTML

}

/* 
function replacePlaceholder(char, rndWord) {   //rndWord=selectedWord
  //displays underscores for every character in the word (separated by whitespace)
  const el = document.querySelector(".container3");
  const chosenWord = rndWord;
  //const regex = /\D/ig;  //\D is a wildcard for any non-digit char, same as [^0-9], ig: i: ignoreCase = True, g: global = True (all instances are replaced, not only first one)  
  //const regex = /[^ABCDEF]/ig;  // /[^A]+[^0-9]/ig;  [^0-9A] every non-digit but A
  const regex = new RegExp(`[${char}]`, 'g'); // (`/[\D${char}]-`, 'g')
  const invertedPH = chosenWord.replace(regex, '_ '); //what is wrong here
  el.innerHTML = invertedPH;
  //return placeholder;

} */

//replaces underscores in word placeholder with correctly guessed chars
function replacePlaceholder(char = '#', rndWord) {
  const rndWordArr = Array.from(rndWord);
  const indexArr = [];
  const regex = /\D/ig;
  const placeholderArr = Array.from(rndWord.replace(regex, '_'));
  //let placeholder = rndWord.replace(regex, '_ ');
  //console.log(typeof (placeholder));
  const el = document.querySelector(".container3");
  let idx = rndWordArr.indexOf(char);
  while (idx != -1) {                           //while loop since easiest? way to loop over 1 or more occurances
    correctCharArr.push(char);                     //correctCharArr is global, could return char and add to userWordArr in global space 
    indexArr.push(idx);
    idx = rndWordArr.indexOf(char, idx + 1);
  };
  console.log(`indexArr: ${indexArr}, wordArr: ${rndWordArr}`);
  for (id of indexArr) {
    placeholderArr[id] = char;
  };              // replace _ with char at idxs in indexArr
  el.innerText = placeholderArr; // el.innerHTML
  //guessWord(selectedWord);

  //

}


//selects random word from loaded word dict
function returnRndWord(arr) {
  //code here
  const rndIndex = Math.floor(Math.random() * arr.length);
  return arr[rndIndex].toUpperCase(); //.toUppercase so that lettercase in word and clicked chars matches
}

// shows (initial) cartoon(s) of hangman at wrongGuesses=0, also for checking of image array (hence map())
function displayCartoon(imgArr) {
  imgArr.map(item => {
    const img = document.createElement("IMG");
    img.setAttribute("src", item);
    img.setAttribute("width", "100");
    img.setAttribute("height", "auto");
    img.setAttribute("alt", "");
    hungMan.appendChild(img);
  })

}

function advanceHangMan(images, wrongGuesses) {
  //if called show next image of hangman array, add 1 to wrong guesses and returns that value, 
  //keeps track of wrong attempts
  if (wrongGuesses < images.length) {
    console.log('not included in selectedWord');
    const frame = images[wrongGuesses];
    console.log(wrongGuesses);
    const img = document.querySelector("img"); //select previously created img element (displayCartoon()) 
    img.setAttribute("src", frame);
    img.setAttribute("width", "100");
    img.setAttribute("height", "auto");
    img.setAttribute("alt", "");
    hungMan.appendChild(img);
    wrongGuesses += 1;
  } else { //place that img element inside hungMan (defined outside of func (should be inside?))
    //console.log('Game OVER!');
    alert('Game OVER!');
    const answer = Number(window.prompt("Wanna play again? Enter 1 for yes, anything else for no")); //should add ok button instead
    answer === 1 ? resetGame() : alert("Bummer!"); // wrongGuesses = 0 : alert("Bummer!");
  };
  return wrongGuesses;
};

//keeps track of word guesses and correctly guessed chars, returns WIN if all chars in word or word have been guessed 
function guessWord(word) {
  // e.preventDefault();
  // const word = selectedWord;
  const inputField = document.createElement("input");
  gameButtons.append(inputField);
  inputField.type = "text";
  inputField.name = "inputGuess";
  inputField.placeholder = "Guess the word!";
  //inputField.style = "background-color: black"; //for testing
  inputField.addEventListener('keypress', keypressHandler); //perhaps add submitBtn instead?
}
  //const userWord = window.prompt("Type word guess below or leave blank").toUpperCase();

  function keypressHandler(e) {
    const userWord = e.target.value.toUpperCase();
    console.log(userWord, selectedWord);

    if (userWord === selectedWord) {
      alert(`${userWord} is correct!`);
      //repetition of ln157-58!!
      const answer = Number(window.prompt("Wanna play again? Enter 1 for yes, anything else for no")); //should add ok button instead
      answer === 1 ? resetGame() : alert("Bummer!"); // wrongGuesses = 0 : alert("Bummer!");

    } else {
      userWordArr.push(userWord);
    };

  }

// needs work
  function reportCorrectWord (e){
    //checks correctly guessed chars, reports Correct if all chars have been guessed
    
    if (userWord === selectedWord) {
      alert(`${userWord} is correct!`);
      //repetition of ln157-58!!
      const answer = Number(window.prompt("Wanna play again? Enter 1 for yes, anything else for no")); //should add ok button instead
      answer === 1 ? resetGame() : alert("Bummer!"); // wrongGuesses = 0 : alert("Bummer!");

    } else {
      userWordArr.push(userWord);
    };
  }


  //resets the game
  function resetGame() {
    /* wrongGuesses = 0;
    chars = [];
    selectedWord = returnRndWord(wordArr);
    selectedWordArr = Array.from(selectedWord);
    displayCartoon(imageUrlArr0);
    displayPlaceholder(selectedWord); */
    location.reload();                            //refreshes the page, effective reset

  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //main program loop, let instead of const so they can be reset

  //show initial cartoon (0 wrong Guesses)
  displayCartoon(imageUrlArr0);

  //start game, create keyboard and reveal clicked characters
  const button = document.createElement("button");
  gameButtons.appendChild(button);
  button.innerText = 'Start';
  button.addEventListener("click", () => {
    initGame();
    //show placeholder for randomly chosen word
    displayPlaceholder(selectedWord);
  });
  // const guessBtn = document.createElement('button');
  // guessBtn.innerText = "Guess the word!";
  // gameButtons.appendChild(guessBtn);
  // gameButtons.addEventListener('click', guessWord);
  //gameButtons.removeEventListener('click', guessWord);



  function initGame() {
    guessWord(selectedWord);                          //this executes BEFORE DOM is updated by replacePlaceholder
    lettersArr.map((item) => {
      const button = document.createElement("button");
      letterPosition.appendChild(button);
      button.innerText = item;
      button.addEventListener("click", mainPlay);
      // button.addEventListener("click", () => {                //should move arrowfunc() into separate func(): ("click", buttonFunc)
      //   pickedLetter.innerText += item;
      //   //console.log(pickedLetter);
      //   const clickedChar = getClickedChars();
      //   console.log(clickedChar);
      //   chars.push(clickedChar);
      //   // replace _ with Char if present)
      //   console.log(chars);
      //   /* selectedWord.includes(clickedChar) ? replacePlaceholder(clickedChar, selectedWord) : //console.log('included in selectedWord')
      //     wrongGuessCount = advanceHangMan(imageUrlArr, wrongGuessCount); */
      //   if (selectedWord.includes(clickedChar)) {
      //     replacePlaceholder(clickedChar, selectedWord);
      //    // window.addEventListener('DOMContentLoaded', (event) => {
      //    //   console.log('DOM fully loaded and parsed');
      //       guessWord(selectedWord);                          //this executes BEFORE DOM is updated by replacePlaceholder
      //    // });

      //     } else {
      //       wrongGuessCount = advanceHangMan(imageUrlArr, wrongGuessCount);
      //     };

      //   });
    });

  }


  function mainPlay(e) {

    pickedLetter.innerText += e.target.innerText;//item; //e.target.innerText;
    const clickedChar = getClickedChars();
    console.log(clickedChar);
    chars.push(clickedChar);
    // replace _ with Char if present)
    console.log(chars);
    if (selectedWord.includes(clickedChar)) {
      console.log(`Congrats, my word does contain ${clickedChar}.`); //should output this in html
      //store correct chars in global array
      correctCharArr.push(clickedChar);
      //compare content of correctCharArr with selectedWordArr, if identical report WIN!
      checkWin(correctCharArr, selectedWordArr);
      replacePlaceholder(clickedChar, selectedWord);
      // window.addEventListener('DOMContentLoaded', (event) => {
      //   console.log('DOM fully loaded and parsed');
      
      // });

    } else {
      console.log(`Sorry, there is no ${clickedChar} in my word.`); //should output this in html
      wrongGuessCount = advanceHangMan(imageUrlArr, wrongGuessCount);
    };

  }

//this works
  function checkWin(guessArr=correctCharArr, wordArr=selectedWordArr) {
      //code
      wordArr.every(e => guessArr.includes(e)) ? alert('Congrats, you guessed all characters') : console.log('loose');
      // could probably also use this:
      // JSON.stringify(wordArr) === JSON.stringify(guessArr) ? ...
  }











  /////////////////////////////////////////////////////////////////////
  //for debugging purposes only
  console.log(selectedWord);
  console.dir(document);
  //console.log(selectedWordArr);
//debuggin end

//need to add functionality for displaying correctly guessed chars and word!!

// could return indies plus char fro every key press and retrun from func, save in obj

// add game init function!

//guessWord should report incorrect guess! (only reports correct guess), have separate button for word guessing

//fix placeholder display (show ALL correctly guessed chars at respective postions)!!

//check removeEventListenr !

//add highscore list


