




//---------------------------------------------------------functionality: flipping cards--------


let cards = document.querySelectorAll('.card');
    for (i=0;i<cards.length;i++) {
        flip = cards[i];
            flip.addEventListener('click', function () { 
                if (this.classList.contains('turnAround')) {
                        this.classList.remove('turnAround')
                } else {
                    this.classList.add('turnAround')
                }
            }
        );
    }       




//------------------------------------------------------- cookies----------------

const buttonAccept1 = document.querySelector('#accept1');
const buttonAccept2 = document.querySelector('#accept2');
const buttonTerms = document.querySelector('#condition');








function checkCookies() {
    function modalPopup() {
        let PopUp = document.querySelector('.modal')
        PopUp.style.display= 'block'  
        }
    if (document.cookie.length == 0) modalPopup();
            
}

function setCookie1() {
    document.cookie = "name=www.bookswap.com; expires=Thu, 23 Jan 2020 06:00:00 UTC; path=/";
    function endOfModal1() {
        document.querySelector('.modal').style.display='none';
    }
    let modalBox = document.querySelector('.modal');
    modalBox.classList.add('accepted1');   
    setTimeout(endOfModal1, 1900);
}
function showTerms () {
    let terms = document.querySelector('.terms');
    terms.style.display= 'block';
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.modal1').style.display = 'block';
    terms.classList.add('termsShowUp');
}

function setCookie2() {
    document.cookie = "name=www.bookswap.com; expires=Thu, 23 Jan 2020 06:00:00 UTC; path=/";
    function endOfModal2() {
        document.querySelector('.modal1').style.display='none';
    }
    let modalBox = document.querySelector('.modal1');
    modalBox.classList.add('accepted');
    setTimeout(endOfModal2, 1900);
}




    

    
    

    
     //podświetlanie się buttonów w sekcji "nav" po scrollowaniu na konkretną sekcję
     window.addEventListener('scroll', function () {
        const currentPosition = window.scrollY + window.outerHeight / 2;

        var navButtons = document.getElementsByClassName('colored');

        const howItWorks = document.getElementById('how-it-works');

        const signUp = document.getElementById('signup');

        const about = document.getElementById('about');

        for (var i = 0; i < navButtons.length; i++) {
            navButtons[i].classList.remove('active')
        }
        if (currentPosition  >= howItWorks.offsetTop && currentPosition < signUp.offsetTop) {
            navButtons[0].classList.add('active')
        } else if (currentPosition >=  signUp.offsetTop && currentPosition <  about.offsetTop) {
            navButtons[2].classList.add('active')
        } else if (currentPosition >=  about.offsetTop) {
            navButtons[1].classList.add('active')
        }

    });


    //pojawianie się buttona "top" 
    toTheTopButton = document.querySelector('.toTheTopButton');
    var navButtons = document.getElementsByClassName('colored');

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            toTheTopButton.style.display = "block";
        } else {
            toTheTopButton.style.display = "none";
        }
    });

    //button "top" powoduje powrót na górę strony
    toTheTopButton.addEventListener('click', function () {
        document.documentElement.scrollTop = 0;
    })

///------------------------------------------------------------slider

const range = document.getElementById('range');
const months = document.getElementById('months');
const monthPrice = document.getElementById('monthPrice');
const stutent = document.getElementById('student');
const nonStudent = document.getElementById('non-student');
const price = 5;
const studentPrice = price*0.95
months.innerHTML = range.value;


function startingValue() {
    let x = range.value;
    
    if (student.checked) {
        if (x<=3) {
            monthPrice.innerHTML = studentPrice +'&euro;';
        } else if (x>3 && x<=6) {
            monthPrice.innerHTML = (studentPrice*0.97).toFixed(2) + '&euro;';
        } else if (x>6 && x<=12) {
            monthPrice.innerHTML = (studentPrice*0.95).toFixed(2)+'&euro;';
        } else { 
            monthPrice.innerHTML = (studentPrice*0.93).toFixed(2)+'&euro;';
        }
    } else if (nonStudent.checked) {
        if (x<=3) {
            monthPrice.innerHTML = price + '&euro;';
        } else if (x>3 && x<=6) {
            monthPrice.innerHTML = (price*0.97).toFixed(2) + '&euro;';
        } else if (x>6 && x<=12) {
            monthPrice.innerHTML = (price*0.95).toFixed(2)+'&euro;';
        } else {
            monthPrice.innerHTML = (price*0.93).toFixed(2)+'&euro;';
        }
    } 
}




function changeRange() {
    months.innerHTML = this.value;
    if (this.value == 13) {
        months.innerHTML = this.value + ' and more';
    }
    startingValue();
}


function changeSliderColor() {
    let x = range.value;
    let color = `linear-gradient(90deg, rgb(196, 57, 92) ${x*7.6-5}%, rgb(245, 187, 208) ${x*7.6}%)`
    range.style.background = color; 
}




range.addEventListener('input',changeRange)
window.addEventListener('load', checkCookies); 
range.addEventListener('input', changeSliderColor)
buttonTerms.addEventListener('click', showTerms);
buttonAccept1.addEventListener('click', setCookie1);
buttonAccept2.addEventListener('click', setCookie2);
student.addEventListener('click', startingValue);
nonStudent.addEventListener('click', startingValue);
startingValue();




    
    
    //SCRIPT FOR ANIMATED PICTURES //

    let bull = [false, false, false, false]                         // tworzę tablicę bull, w której są 4 elementy, początkowo każdy ma wartość false
    // będzie to służyć jako dodatkowy warunek niżej
function createRotate(index, fliped) {                           // funkcja createRotate przyjmuje dwa argumenty  index elementu i stan fliped (back lub front)                      
const el1 = document.getElementsByClassName('one')[index]    // łapie element o klasie 'one' i indeksie z paremtru
const el2 = document.getElementsByClassName('two')[index]   // łapie element o klasie 'two' i indeksie z parametru
const StyleTransform1 = "";                                 // tworzy 'pusty' styl - bez obrotu
const StyleTransform2 = "";
// dla elementu 
if (fliped === 'back') {                                // jesli stan jest back to 
el1.style.transform = `rotateY(180deg)`;            // zmienia style.transform na rotateY180
} else {
el1.style.transform = StyleTransform1                  //w inntn wypadku zmienia styl transform na ""
console.log(el1.style.transform)
}

if (fliped === 'back') {                                // jesli styl jest back to 
el2.style.transform = `rotateY(0)`;                    // zmienia style.transform na rotateY0
console.log(el2.style.transform)                    
} else {
el2.style.transform = StyleTransform2               // w innym wypadku zmienia styl transform na ""
console.log(el2.style.transform)
}
}
const figura = document.getElementsByTagName('figure')      // lapie elementy o tagu figure [tablica]
const currentPosition = window.scrollY;                     // wrzucam do zmiennej window.scrollY czyli polozenie scrolla wzgl. gory ekranu

function checkPosition() {                              // funkcja checkPosition sprawdza położenie uzytkownika na stronie 
for (let index=0; index<4; index++) {                // iteruje od 0 do 3 bo 
let a = figura[index].offsetTop + figura[index].offsetHeight/2 < window.scrollY + window.outerHeight // tworzy a, ktory przyjmuje prawda czy falsz w zaleznosci od tego polozenia na stronie
if (!bull[index]  && a) {   // jesli element tablicy bull o indeksie takim jak tutaj indeks jest false i a jest true to
bull[index] = true;     // zmienia wartosc na true elementu o indeksie jak index tablicy bull i 
//createRotate(index)  
// przy spelnieniu tych warunkow jw. odpala sie funkcja createRotate z opoznieniem zaleznym od indexu i 'back'
setTimeout(createRotate,0 + 100*index, index, 'back')    // ustawia setTimeout i odpala createRotate, dla kolejnych zdjec z opoznieniem bo inny index                   
    // window.setTimeout(funkcja, opóźnienie[, param1, param2, ...]);


//createRotate(index)                                                          
setTimeout( () => {                                      
createRotate(index, 'front');                           // odpala createRotate z parametrami index i 'front' 
document.querySelectorAll('.mirror')[index].addEventListener('mouseenter', function(){ createRotate(index, 'back')})    // łapie element 'mirror na stronie o indexie, dodaje mu eventlistener po najechaniu myszka odpala sie funkcja createRotate z indexem i back
document.querySelectorAll('.mirror')[index].addEventListener('mouseleave', function(){ createRotate(index, 'front')})   // łapie element 'mirror na stronie o indexie, dodaje mu eventlistener po najechaniu myszka odpala sie funkcja createRotate z indexem i front
},1000 + 100*index)            // opoznienie zalezne od indexu
}    
}
}
document.addEventListener('scroll', checkPosition)
