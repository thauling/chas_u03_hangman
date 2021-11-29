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
const startImage = ["./images/0.svg"];
const imageUrlArr = ["./images/1.svg", "./images/2.svg", "./images/3.svg", "./images/4.svg", "./images/5.svg",
  "./images/6.svg", "./images/7.svg", "./images/8.svg", "./images/9.svg"];

//create frontend interface, a panel with all letters of the English alphabet 
const lettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'];

// keep track of wrong guesses to advance hangman  
let wrongGuessCount = 0;
// keep track of pressed chars
const chars = [];
// store word guesses by user
const userWordArr = [];
// store correctly guessed chars 
const correctCharArr = [];
// store guess words that have been chosen 
const usedWordsArr = [];

// generate global guess word from randomly selecting word from array (string ar array)
let selectedWord = returnRndWord(wordArr);
const selectedWordArr = Array.from(selectedWord);
// generate global placeholders (string ar array)
const regex = /\D/ig;  //\D is a wildcard for any non-digit char, same as [^0-9], ig: i: ignoreCase = True, g: global = True (all instances are replaced, not only first one)  
let placeholder = selectedWord.replace(regex, '_ ');
const placeholderArr = Array.from(selectedWord.replace(regex, '_'));

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

/////////////////////////////////////////////////////// global functions /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function initGame() {
  //remove start button and its eventlistener since not needed any more
  button.removeEventListener('click', gameArrowFunc);
  button.remove();
  //call guessWord() to show input filed for user guesses instead
  guessWord(selectedWord);
  // create keyboard with alphabetic characters
  lettersArr.map((item) => {
    const button = document.createElement("button");
    letterPosition.appendChild(button);
    button.innerText = item;
    button.addEventListener("click", mainPlay);
  });
}

function mainPlay(e) {
  console.log(e.target.innerText);
  pickedLetter.innerHTML = `<p>Chosen letter: ${e.target.innerText}</p>`;//item; //e.target.innerText; //displays ALL chars, leave in for now but remove later or just console.log it
  const clickedChar = getClickedChars();
  console.log(clickedChar);
  if (chars.includes(clickedChar)) {
    alert(`You have already used ${clickedChar}. There are ${lettersArr.length - chars.length} other letters to choose from...`);
  } else {
    chars.push(clickedChar);
    // replace _ with Char if present)
    console.log(chars);
    if (selectedWord.includes(clickedChar)) {
      console.log(`Congrats, my word does contain ${clickedChar}.`); //should output this in html
      //store correct chars in global array
      correctCharArr.push(clickedChar);
      //compare content of correctCharArr with selectedWordArr, if identical report WIN!
      checkWin(correctCharArr, selectedWordArr);
      showPlaceholder(clickedChar, selectedWord);
      //e.target.removeEventListener('click', mainPlay);

    } else {
      console.log(`Sorry, there is no ${clickedChar} in my word.`); //should output this in html
      wrongGuessCount = advanceHangMan(imageUrlArr, wrongGuessCount);
    };
  };
  //e.target.removeEventListener('click', mainPlay);
}

function checkWin(guessArr = correctCharArr, wordArr = selectedWordArr) {
  if (wordArr.every(e => guessArr.includes(e))) {
    wordDisplay.innerHTML += `<p>Congrats, you guessed all characters</p>`; //not updating, why?
    alert('Congrats, you guessed all characters'); //this works
    location.reload();
    //resetGame();
  } else {
    console.log('loose');
  };
  // could probably also use this:
  // JSON.stringify(wordArr) === JSON.stringify(guessArr) ? ...
}

//helper function to get clicked chars
function getClickedChars() {
  //get text from html element
  let text = document.querySelector('.container2').textContent.trim(); //trim() to remove white space, shoudl use innerText instead to JUST get the text
  console.log(text, typeof (text));
  return text.slice(-1); //slice -1 to get last char
}

//replaces underscores in word placeholder with correctly guessed chars
function showPlaceholder(char, rndWord) {  //could just parse in random word arr
  const rndWordArr = Array.from(rndWord);
  const indexArr = [];
  //const el = document.querySelector(".container3"); //could also be global const
  let idx = rndWordArr.indexOf(char);
  while (idx != -1) {                           //while loop since easiest? way to loop over 1 or more occurances
    correctCharArr.push(char);                     //correctCharArr is global, could return char and add to userWordArr in global space 
    indexArr.push(idx);
    idx = rndWordArr.indexOf(char, idx + 1);
  };
  console.log(`indexArr: ${indexArr}, wordArr: ${rndWordArr}`);
  // change this, so that all correct chars show,     create individual div for each char/ placeholder instead? OR store updated placeholder, then use as input
  for (id of indexArr) {
    placeholderArr[id] = char;
  };              // replace _ with char at idxs in indexArr
 // el.innerHTML = `<p>Secret word: ${placeholderArr.join(' ')}</p>`;
  wordDisplay.innerHTML = `<p>Secret word: ${placeholderArr.join(' ')}</p>`;
}

//selects random word from loaded word dict
function returnRndWord(arr) {
  //code here
  const rndIndex = Math.floor(Math.random() * arr.length);
  return arr[rndIndex].toUpperCase(); //.toUppercase so that lettercase in word and clicked chars matches
}

// shows (initial) cartoon of hangman
function displayCartoon(startImg) {
  const img = document.createElement("IMG");
  img.setAttribute("src", startImg); //alternative to setAttribute?
  //img.setAttribute("width", "100");
  //img.setAttribute("height", "auto");
  img.setAttribute("alt", "Hangman cartoon");
  hungMan.appendChild(img);
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
    img.setAttribute("alt", "Hangman cartoon");
    hungMan.appendChild(img);
    wrongGuesses += 1;
  } else { //place that img element inside hungMan (defined outside of func (should be inside?))
    //console.log('Game OVER!');
    wordDisplay.innerHTML += `<p class="game-over">Game OVER!<br> The secret word was ${selectedWord}.</p>`;
    resetGame();
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
  inputField.addEventListener('keypress', keypressHandler); //perhaps add submitBtn instead? !!
}

function keypressHandler(e) {
  const userWord = e.target.value.toUpperCase();
  console.log(userWord, selectedWord);

  if (userWord === selectedWord) {
    //const el = document.querySelector(".container3"); //could also be global const
    wordDisplay.innerHTML = `<p>Secret word: ${userWord}</p>`;
    wordDisplay.innerHTML += `<p>${userWord} is correct, Congrats!</P>`;
    e.target.removeEventListener('keypress', keypressHandler);
    resetGame();

  } else {
    userWordArr.push(userWord);
  };
  //e.target.removeEventListener('keypress', keypressHandler);
}


//resets the game
function resetGame() {
  //const answer = Number(window.prompt("Wanna play again? Enter 1 for yes, anything else for no")); //should add ok button instead
  const resetBtn = document.createElement('button');
  wordDisplay.appendChild(resetBtn);
  resetBtn.textContent = 'Click me to play again';
  resetBtn.addEventListener('click', () => location.reload());
  //answer === 1 ? location.reload() : alert("Bummer!"); // wrongGuesses = 0 : alert("Bummer!");
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//main program loop, let instead of const so they can be reset

//show initial cartoon (0 wrong Guesses)
displayCartoon(startImage);
//advanceHangMan(imageUrlArr, 1);

//start game, create keyboard and reveal clicked characters
const button = document.createElement("button");
gameButtons.appendChild(button);
button.innerText = 'Start';

const gameArrowFunc = () => {
  initGame();
  // displayPlaceholder(selectedWord);
  showPlaceholder('', selectedWord);
};

button.addEventListener("click", gameArrowFunc);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////








/////////////////////////////////////////////////////////////////////
//for debugging purposes only
console.log(selectedWord);
console.dir(document);
  //console.log(selectedWordArr);
//debuggin end

//need to add functionality for displaying correctly guessed chars and word!!

// could return indies plus char fro every key press and retrun from func, save in obj

// add game init function!

//guessWord should report incorrect guess! (only reports correct guess) - need to add incorrect word guess! and add SUBMIT button

///// fix this!
//fix placeholder display (show ALL correctly guessed chars at respective postions)!! ALMOST works now, BUT Win alert shows before last placeholder is replace by correct char
////

//report if character has been used! fixed!

///////////////////////////////////
// FIX use of selected/ rnd word array / string in functions - make functions CONSISTENT!
//////////////////////

// (in HTML, show chars array instead of ALL clicked chars !)

//show word if not guessed! fixd!

//check removeEventListenr ! partially fixed (fixed for start button)

//add let isGameOver = false; variable?

//add highscore list


