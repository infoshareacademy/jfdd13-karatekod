


// declaring variables

/* let karol = document.getElementsByClassName('emoji1')[0] // grabs the emoji1 with karol
karol.offsetTop // odleglosc karola od top
let windowPositionTop = window.pageYOffset */

// GRAB THE IMAGES 

let antek = document.querySelectorAll('.emoji1')[0]


let michalako = document.querySelectorAll('.emoji1')[1].offsetTop
let juhanilao = document.querySelectorAll('.emoji1')[2].offsetTop
let andracki = document.querySelectorAll('.emoji1')[3].offsetTop

function scrollDown1() {
    
    let antonowicz = document.querySelectorAll('.emoji1')[0].offsetTop
    if (Math.round(antonowicz/100)*100-100 === Math.round(document.documentElement.scrollTop/100)*100){
     
    console.log('ok')


 
}
}


let karolek = document.querySelectorAll('.team-info-photos figure')[0]
karolek.style.backgroundColor = 'blue'
antek.style.display = 'initial'



document.addEventListener('scroll', scrollDown1)








