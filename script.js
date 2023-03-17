const football = document.querySelector('.imageFootball');
const videoGame = document.querySelector('.imageVideoGame');
const fishing = document.querySelector('.imageFishing');



football.addEventListener("click", function(){
            football.classList.toggle("text");
            football.classList.toggle("imageFootball");
    
})

videoGame.addEventListener("click", function(){
    videoGame.classList.toggle("text");
    videoGame.classList.toggle("imageVideoGame");

})

fishing.addEventListener("click", function(){
    fishing.classList.toggle("text");
    fishing.classList.toggle("imageFishing");
})


