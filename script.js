// UWAGI AS: SPACJE, ENTERY, TABULACJE!
// UWAGI AS: Opakować kod w funkcje zamowykonującą się - ograniczy to ilosc zmiennych na window 
/*
(function(){
    //tu jest wasz kod
})();
*/

// UWAGI AS: brak konsekwencji w stosowaniu średników, albo ich uzywacie wszedzie, albo nigdzie


//---------------------------------------------------------functionality: flipping cards--------

// UWAGI AS: NIE UZYWAMY VAR
// UWAGI AS: dozwolony 'let' albo 'const'
var cards = document.querySelectorAll('.card');
    for (i=0;i<8;i++) { // UWAGI AS: literujemy po dlugosci tablicy, a nie stałej liczbie - cards.length
        flip = cards[i];
            flip.addEventListener('click', function () { 
                if (this.classList.contains('turnAround')) {
            this.classList.remove('turnAround')
        } else {
    this.classList.add('turnAround')} // UWAGI AS: tabulacje!
            }
        );
    }       
// UWAGI AS: ENTERY



//------------------------------------------------------- cookies----------------

    var buttonAccept1 = document.querySelector('#accept1');// UWAGI AS: var powinno byc const
    var buttonAccept2 = document.querySelector('#accept2');// UWAGI AS: var
    var buttonTerms = document.querySelector('#condition');// UWAGI AS: var

    function modalPopup() {
        var PopUp = document.querySelector('.modal')
        PopUp.style.display= 'block'
        
    }

    function endOfModal1() {
        document.querySelector('.modal').style.display='none';
    }

    function endOfModal2() {
        document.querySelector('.modal1').style.display='none';
    }

    function checkCookies() {
                        
        if (document.cookie.length == 0) modalPopup();
        console.log('check cookies- onload')           
    }

    function setCookie1() {
        document.cookie = "name=www.bookswap.com; expires=Thu, 23 Jan 2020 06:00:00 UTC; path=/";
        var modalBox = document.querySelector('.modal');
        modalBox.classList.add('accepted1');   
        console.log('set cookie 1');
        setTimeout(endOfModal1, 1900);
    }
    function showTerms () {
        var terms = document.querySelector('.terms');
        terms.style.display= 'block';
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.modal1').style.display = 'block';
        console.log('show terms');
        terms.classList.add('termsShowUp');
    }

    // UWAGI AS: niepotrzebna duplikacja kodu? 2 metody które robią prawie to samo

    function setCookie2() {
        document.cookie = "name=www.bookswap.com; expires=Thu, 23 Jan 2020 06:00:00 UTC; path=/";
        var modalBox = document.querySelector('.modal1');
        modalBox.classList.add('accepted');
        console.log('set cookie 2');
        setTimeout(endOfModal2, 1900);

    }

// UWAGI AS: ENTERY


    

    
    

    
     //podświetlanie się buttonów w sekcji "nav" po scrollowaniu na konkretną sekcję
     window.addEventListener('scroll', function () {
        const currentPosition = window.scrollY + window.outerHeight / 2;

        var navButtons = document.getElementsByClassName('colored'); // UWAGI AS: var

        const howItWorks = document.getElementById('how-it-works');

        const signUp = document.getElementById('signup');

        const about = document.getElementById('about');

        for (var i = 0; i < navButtons.length; i++) { // UWAGI AS: var
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
    toTheTopButton = document.querySelector('.toTheTopButton'); // UWAGI AS: brak deklaracji zmiennej, przez co wpada na window
    var navButtons = document.getElementsByClassName('colored'); // UWAGI AS: var

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
    months.innerHTML = range.value;
    
    
    function startingValue() {
        var x = range.value; // UWAGI AS: var
        // UWAGI AS: sztywny algorytm... nie pozwala na zmiane ceny.. powinno być to liczone na biezaco
        if (student.checked) {if (x<=3) {monthPrice.innerHTML = '4.75 &euro;'}
         else if (x>3 && x<=6) {monthPrice.innerHTML = '4.60 &euro;'} 
         else if (x>6 && x<=12) {monthPrice.innerHTML = '4.50 &euro;'} else {monthPrice.innerHTML = '4.41 &euro;'}} 
            
        else if (nonStudent.checked) 
        {if (x<=3) {monthPrice.innerHTML = '5 &euro;'}
         else if (x>3 && x<=6) {monthPrice.innerHTML = '4.85 &euro;'} 
         else if (x>6 && x<=12) {monthPrice.innerHTML = '4.75 &euro;'} else {monthPrice.innerHTML = '4.65 &euro;'}} 
    }



    // UWAGI AS: unikamy zakładania eventow w ten sposob, stosujemy addEventListener
    range.oninput = function() {
        months.innerHTML = this.value;
        if (this.value == 13) {
            months.innerHTML = this.value + ' and more';
        }
        startingValue();
        } // UWAGI AS: zbedna tabulacja
 
    
    function changeSliderColor() {
        var x = range.value;
        var color = `linear-gradient(90deg, rgb(196, 57, 92) ${x*7.6-5}%, rgb(245, 187, 208) ${x*7.6}%)`// UWAGI AS:  co to ma na celu? przenieśc do css
        range.style.background = color; 
       }// UWAGI AS: zbedne spacje

    
    
    window.addEventListener('load', checkCookies); 
    range.addEventListener('input', changeSliderColor)
    buttonTerms.addEventListener('click', showTerms);
    buttonAccept1.addEventListener('click', setCookie1);
    buttonAccept2.addEventListener('click', setCookie2);
    student.addEventListener('click', startingValue);
    nonStudent.addEventListener('click', startingValue);
    startingValue();

// UWAGI AS: entery i tabulacje ponizej... caly kod do poprawy wcięć


    
    
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
