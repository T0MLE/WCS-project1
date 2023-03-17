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

