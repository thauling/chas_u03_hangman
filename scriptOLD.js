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
const url = "swear.json";

const jsonContent = JSON.parse(url);
console.log(jsonContent);

/*
const div = document.querySelector(".container");
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(typeof(data.words));

    //div.innerHTML = data.words;
  });







// retrieve words from json dict
const header = document.querySelector('header');
const section = document.querySelector('section');

const Http = new XMLHttpRequest();
//const url='https://jsonplaceholder.typicode.com/posts';
const url = "swear.json";
let request = new XMLHttpRequest();
request.open("GET", url);

request.responseType = 'json'; //specify json format
request.send();

request.onload = () => {
  console.log(request.response);
  const words = request.response;
  populateHeader(words); //function that I need to creeate
  //showWords(words); //function that I need to creeate
}


function populateHeader(obj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = obj;
 header.appendChild(myH1);

  const myPara = document.createElement('p');
  //myPara.textContent = `Word Nr2: ${obj}`;
  //header.appendChild(myPara);
}


function showWords(obj) {
  const myWords = obj;
  const myList = document.createElement('ul');

    for (let i = 0; i < myWords.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = myWords[i];
      myList.appendChild(listItem);
    }
    section.appendChild(myList);
  }

*/
  //select random word from loaded word dict

  // CODE HERE

  //display corresponding hangman images

  // CODE HERE
