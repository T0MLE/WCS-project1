
let cards = document.querySelectorAll('.card');
let cardContainer = document.querySelector('#card-container');
let sliderIndicator = document.querySelectorAll('#indicator-container .slide-indicator')

cards.forEach(element => console.log(element.getBoundingClientRect()))

function dot(arr) {
    let count = 0;
    cards.forEach(element => {
        if(element.getBoundingClientRect().x < 0) { count++;}
    })
    return count;
}

cardContainer.addEventListener("scroll", function(e){
    let count = dot(cards)
    sliderIndicator.forEach(element => {
        element.classList.remove('indic-active');
    });
    
    sliderIndicator[count].classList.toggle('indic-active');
})


const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact-me')


// CHECKBOX
  const toggleTheme = document.querySelector('#toggle-checkbox');
  const button = document.querySelector('.toggle-theme span');
  
  
  toggleTheme.addEventListener('change', function() {
      button.classList.toggle('span-move');
      document.body.classList.toggle('blue-theme');
      document.body.classList.toggle('red-theme');

      menu.classList.toggle('blue-theme-menu');
      if (document.body.classList.contains('blue-theme')) {
        contact.classList.add('blue-theme-font');
        contact.classList.remove('red-theme-font')
        button.classList.add('button-color-blue');
        button.classList.remove('button-color-red');
      } else {
        contact.classList.remove('blue-theme-font');
        contact.classList.add('red-theme-font')
        button.classList.add('button-color-red');
        button.classList.remove('button-color-blue');
      }
  });

const menuBtn = document.querySelector('.menu-btn');
let isOpen = false;
menuBtn.addEventListener('click', function() {
  isOpen = !isOpen;
  if (isOpen) {
    menuBtn.classList.add('open');
    menu.style.height = '14vh';
    menu.style.marginTop = "15vh";
  } else {
    menuBtn.classList.remove('open');
    menu.style.height = '0';
  }
});



function playAudio() {
   var audio = document.getElementById("myAudio"); 
   audio.play();
   }

   function playAudio2() {
    var audio1 = document.getElementById("myAudio2");
    audio1.play();
    }
