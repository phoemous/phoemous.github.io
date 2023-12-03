const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => { question.innerHTML = "Mwahh, I love you sayangku cintaku illaku yang paling cantik didunia ini"; gif.src =
"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";

});

noBtn.addEventListener("mouseover", () => { const noBtnRect = noßtn.getBoundingClientRect();
const maxx window.innerWidth - noßtnRect.width;
const maxY = window.innerHeight - noßtnRect.height;

const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random() * maxY);

noßtn.style.left = randomX + "px";
noßtn.style.top = randomY+"px";

});