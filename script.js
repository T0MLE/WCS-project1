const football = document.querySelector('.imageFootball');
const videoGame = document.querySelector('.imageVideoGame');
const fishing = document.querySelector('.imageFishing');



football.addEventListener("click", function(){
    football.classList.toggle("text");
})

videoGame.addEventListener("click", function(){
    videoGame.classList.toggle("text");
})

fishing.addEventListener("click", function(){
    fishing.classList.toggle("text");
})