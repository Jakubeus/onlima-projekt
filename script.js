console.log("Hello")


const words = ["Usilovný", "Lojalny", "Ucenlivy", "Trpezlivy"];
let index = 0;

let wordContainer = document.querySelector(".word");

function changeWord() {
  index = (index + 1) % words.length;

  const newWord = document.createElement("span");
  newWord.className = "word";
  newWord.textContent = words[index];

  const oldWord = wordContainer;
  oldWord.parentNode.replaceChild(newWord, oldWord);

  wordContainer = newWord;
}

setInterval(changeWord, 2500);
