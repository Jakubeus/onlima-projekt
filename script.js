console.log("Hello")


const words = ["Usilovný", "Lojálný", "Učenlivý", "Trpezlivý"];
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

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const closeBtn = document.getElementById('close');
const navLinks = document.querySelectorAll('#nav a');

burger.addEventListener('click', () => {
  nav.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

