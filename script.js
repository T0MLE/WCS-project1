// CARDS EXPERIENCES
let cards = document.querySelectorAll(".card");
let cardContainer = document.querySelector("#card-container");
let sliderIndicator = document.querySelectorAll(
  "#indicator-container .slide-indicator"
);

cards.forEach((element) => console.log(element.getBoundingClientRect()));

function dot(arr) {
  let count = 0;
  cards.forEach((element) => {
    if (element.getBoundingClientRect().x < 0) {
      count++;
    }
  });
  return count;
}

cardContainer.addEventListener("scroll", function (e) {
  let count = dot(cards);
  sliderIndicator.forEach((element) => {
    element.classList.remove("indic-active");
  });

  sliderIndicator[count].classList.toggle("indic-active");
});

const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact-me");

// CHECKBOX THEME TOGGLE
const toggleTheme = document.querySelector("#toggle-checkbox");
const button = document.querySelector(".toggle-theme span");
const templateBlue = document.querySelectorAll(".templateBlue");
const templateBlueHobbies = document.querySelectorAll(".templateBlueHobbies");

toggleTheme.addEventListener("change", function () {
  button.classList.toggle("span-move");
  document.body.classList.toggle("blue-theme");
  document.body.classList.toggle("red-theme");
  menu.classList.toggle("blue-theme-menu");
  // aboutmeblue.style.setProperty('--second-theme-color', 'blue')
  // aboutmeblue.classList.add('blue')
  templateBlue.forEach((element) => {
    element.style.color = "var(--second-theme-color)";
  });
  templateBlueHobbies.forEach((element) => {
    element.style.backgroundColor = "var(--second-theme-color)";
  });

  if (document.body.classList.contains("blue-theme")) {
    contact.classList.add("blue-theme-font");
    contact.classList.remove("red-theme-font");
    button.classList.add("button-color-blue");
    button.classList.remove("button-color-red");
  } else {
    contact.classList.remove("blue-theme-font");
    contact.classList.add("red-theme-font");
    button.classList.add("button-color-red");
    button.classList.remove("button-color-blue");
    templateBlue.forEach((element) => {
      element.style.color = "var(--first-theme-color)";
    });
    templateBlueHobbies.forEach((element) => {
      element.style.backgroundColor = "var(--first-theme-color)";
    });
  }
});
// MENU BURGER
const menuBtn = document.querySelector(".menu-btn");
let isOpen = false;
menuBtn.addEventListener("click", function () {
  isOpen = !isOpen;
  if (isOpen) {
    menuBtn.classList.add("open");
    menu.style.height = "20vh";
    menu.style.marginTop = "6vh";
    menu.style.paddingBottom = "4vh";
  } else {
    menuBtn.classList.remove("open");
    menu.style.height = "0";
    menu.style.marginTop = "0";
    menu.style.paddingBottom = "0";
  }
});

menu.addEventListener("click", function () {
  isOpen = false;
  menuBtn.classList.remove("open");
  menu.style.height = "0";
  menu.style.marginTop = "0";
  menu.style.paddingBottom = "0";
});

// AUDIO OF MARIO
function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}

function playAudio2() {
  var audio1 = document.getElementById("myAudio2");
  audio1.play();
}

function playAudio3() {
  var audio2 = document.getElementById("myAudio3");
  audio2.play();
}
// HOBBIES CARDS
const football = document.querySelector(".imageFootball");
const videoGame = document.querySelector(".imageVideoGame");
const fishing = document.querySelector(".imageFishing");

football.addEventListener("click", function () {
  football.classList.toggle("text");
  football.classList.toggle("imageFootball");
});

videoGame.addEventListener("click", function () {
  videoGame.classList.toggle("text");
  videoGame.classList.toggle("imageVideoGame");
});

fishing.addEventListener("click", function () {
  fishing.classList.toggle("text");
  fishing.classList.toggle("imageFishing");
});

/*------------------------------ SAVERIO--------------------------------/*/

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000);
}
