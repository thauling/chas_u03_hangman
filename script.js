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
//const usedWordsArr = [];
// kepp track of wromg guesses at end of game
//const scoreArr = [];
// generate global guess word from randomly selecting word from array (string ar array)
let selectedWord = returnRndWord(wordArr);
//const selectedWordArr = Array.from(selectedWord);
// generate global placeholders (string ar array)
const regex = /\D/ig;  //\D is a wildcard for any non-digit char, same as [^0-9], ig: i: ignoreCase = True, g: global = True (all instances are replaced, not only first one)  
//create global placeholder that gets updated every time a correct letter is guessed
const placeholderArr = Array.from(selectedWord.replace(regex, '_'));

// frontend for keys
const gameButtons = document.querySelector(".game-buttons");
// frontend for displaying chosen letter
const pickedLetter = document.querySelector(".container2");
// frontend for showing hangman images
const hungMan = document.querySelector(".container1");
// frontend for showing underscore-placeholders for word
const wordDisplay = document.querySelector(".container3");
// frontend for showing messages
const messageDisplay = document.querySelector(".container4"); //better start branch for this
// create global img const so that it can be accessed from all funcs and images created and removed
//const img = document.createElement("IMG");
/////////////////////////////////////////////////////// global functions /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MAIN FUNCTIONS 
function initGame() {
  //show initial cartoon (0 wrong Guesses)
  displayCartoon(startImage);
  //start game, create keyboard and reveal clicked characters
  const startBtn = document.createElement("button");
  startBtn.innerText = 'Start';
  gameButtons.appendChild(startBtn);
  startBtn.addEventListener("click", startGame); //arrow func defined so that EventListener can be removed

  function displayCartoon(startImg) {
    const img = document.createElement("IMG");
    img.setAttribute("src", startImg);
    img.setAttribute("alt", "Hangman cartoon");
    hungMan.appendChild(img);
  }
}

function startGame(e) {
  //remove start button and its eventlistener since not needed any more
  e.target.removeEventListener('click', startGame);
  e.target.remove();
  //call guessWord() to show input filed for user guesses instead
  guessWord(selectedWord);
  // create keyboard with alphabetic characters
  const keyboard = document.querySelector(".letter-buttons");
  lettersArr.map((item) => {
    const letterBtn = document.createElement("button");
    keyboard.appendChild(letterBtn);
    letterBtn.innerText = item;
    //letterBtn.addEventListener("click", mainPlay);
  });
  keyboard.addEventListener("click", mainPlay);
  showPlaceholder('', selectedWord); //has to be in startGame() to display placeholder after click

  function guessWord() {
    // e.preventDefault();
    // const word = selectedWord;
    const inputField = document.createElement("input");
    const submitBtn = document.createElement("button");
    inputField.type = "text";
    inputField.name = "inputGuess";
    inputField.placeholder = "Guess the word!";
    submitBtn.type = "submit";
    submitBtn.name = "Submit button";
    submitBtn.innerText = "Submit";
    gameButtons.append(inputField, submitBtn);
    //inputField.style = "background-color: black"; //for testing
    submitBtn.addEventListener('click', clickHandler);

    function clickHandler(e) {                      //e
      const userWord = inputField.value.toUpperCase();
      console.log(userWord, selectedWord);
      if (userWord === selectedWord) {

        wordDisplay.innerHTML = `<p>Secret word: ${userWord}</p>`;
        messageDisplay.innerHTML = `<p>${userWord} is correct, congrats!</P>`;
        e.target.removeEventListener('click', clickHandler);
        resetGame();

      } else {
        userWordArr.push(userWord);
        messageDisplay.innerHTML = `<p>${userWord} is not correct, Sorry!</P>`; //+=
        wrongGuessCount = advanceHangMan(imageUrlArr, wrongGuessCount);
      };

    }
  }
}

function mainPlay(e) {
  //showPlaceholder('', selectedWord);
  //console.log(e.target.innerText);
  pickedLetter.innerHTML = `<p>Chosen letter: ${e.target.innerText}</p>`;//item; //e.target.innerText; //displays ALL chars, leave in for now but remove later or just console.log it
  const clickedChar = getClickedChars();
  console.log(clickedChar);
  if (chars.includes(clickedChar)) {
    messageDisplay.innerHTML = `<p>You have already used "${clickedChar}".<br> There are still ${lettersArr.length - chars.length} other letters 
    to choose<br> from...</P>`;
  } else {
    chars.push(clickedChar);
    // replace _ with Char if present)
    console.log(chars);
    if (selectedWord.includes(clickedChar)) {
      //console.log(`Congrats, my word does contain ${clickedChar}.`); //should output this in html
      //store correct chars in global array
      correctCharArr.push(clickedChar);
      showPlaceholder(clickedChar, selectedWord);
      checkWin(selectedWord);
      //e.target.removeEventListener('click', mainPlay);

    } else {
      // console.log(`Sorry, there is no ${clickedChar} in my word.`); //should output this in html
      messageDisplay.innerHTML = `<p>Sorry, there is no "${clickedChar}" in my word.</p>`;
      wrongGuessCount = advanceHangMan(imageUrlArr, wrongGuessCount);
    };
  }

  function checkWin(randomWord) {
    const selectedWordArr = Array.from(randomWord);
    if (selectedWordArr.every(e => correctCharArr.includes(e))) {
      messageDisplay.innerHTML = `<p>Super, you guessed all letters!</p>`;
      resetGame();
    } else {
      //console.log('loose');
      messageDisplay.innerHTML = `<p>"${clickedChar}" in my word but some letters are still missing.</p>`;
    };
  }

  //helper function to get clicked chars
  function getClickedChars() {
    //get text from html element
    const text = document.querySelector('.container2').textContent.trim();
    //console.log(text, typeof (text));
    return text.slice(-1); //slice -1 to get last char
  }
}


// SECONDARY FUNCTIONS without nested functions

//selects random word from loaded word dict
function returnRndWord(arr) {
  const rndIndex = Math.floor(Math.random() * arr.length);
  return arr[rndIndex].toUpperCase(); //.toUppercase so that lettercase in word and clicked chars matches
}

//replaces underscores in word placeholder with correctly guessed chars
function showPlaceholder(char, rndWord) {  //could just parse in random word arr
  const rndWordArr = Array.from(rndWord);
  const indexArr = [];
  let idx = rndWordArr.indexOf(char);
  while (idx != -1) {                           //while loop since easiest? way to loop over 1 or more occurances
    correctCharArr.push(char);
    indexArr.push(idx);
    idx = rndWordArr.indexOf(char, idx + 1);
  };
  for (id of indexArr) {
    placeholderArr[id] = char;
  };              // replace _ with char at idxs in indexArr
  wordDisplay.innerHTML = `<p>Secret word: ${placeholderArr.join(' ')}</p>`;
}

function advanceHangMan(images, wrongGuesses) {
  //if called show next image of hangman array, add 1 to wrong guesses and returns that value, 
  //keeps track of wrong attempts
  let frame;
  const img = document.querySelector("img");
  //advances hangman and reports Game Over on final frame of images
  if (wrongGuesses < (images.length - 1)) {
    //console.log('not included in selectedWord');
    frame = images[wrongGuesses];
    //console.log(wrongGuesses);
    img.setAttribute("src", frame);
    img.setAttribute("alt", "Hangman cartoon");
    hungMan.replaceChild(img, img); //instead of hungMan.appendChild(img) - seems like better pogramming practise?
    wrongGuesses += 1;
  } else {
    //console.log('Game OVER!');
    frame = images[wrongGuesses];
    img.setAttribute("src", frame);
    img.setAttribute("alt", "Hangman cartoon");
    hungMan.replaceChild(img, img);
    messageDisplay.innerHTML = `<p class="game-over">Game OVER!<br> The secret word was ${selectedWord}.</p>`;
    resetGame();
  };
  return wrongGuesses;
};

//resets the game
function resetGame() {
  //keyboard.removeEventListener("click", mainPlay); //How to remove this eventListener?
  const resetBtn = document.createElement('button');
  messageDisplay.appendChild(resetBtn);
  resetBtn.textContent = 'Click me to play again';
  resetBtn.addEventListener('click', () => location.reload()); //location.reload() //need to remove some elements and reset global vars before initGame()
  //answer === 1 ? location.reload() : alert("Bummer!"); // wrongGuesses = 0 : alert("Bummer!");
  // stuff below still has issues
  /* resetBtn.addEventListener('click', () => {
    scoreArr.push(wrongGuessCount);
    wordDisplay.innerHTML = ""; 
    wrongGuessCount = 0;
    resetBtn.remove();
    img.remove();
    initGame();
  })   */
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// START MAIN PROGRAM
initGame();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

