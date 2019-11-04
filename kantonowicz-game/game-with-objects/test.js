//THE GAME//
let box = document.querySelector('.box')            // grabs the box where you move divs around [plaeyrs]
let boy2 = document.querySelector('.two')        // grabs the '.two' div
let book = document.querySelector('.book')

class Person {                                  // creates Person class with x and y coordinates
    constructor(x, y) {
        this._x = x
        this._y = y
    }
    moveLeft() {                // creates moveLeft function, when applied adds 10 to x
        this._x -= 10
    }
    moveRight() {               // ^
        this._x += 10
    }
}

 
const ludzik2 = new Person(400,780)    // stworzony nowa zmienna o x i y

/// klasa Interface a w niej metoda, ktora przypisuje wartośc element.x z Person

class Interface {                           // create Interface class 
    static RenderElement(element, document) {   // metoda RenderElement nadaje elementowi z DOM wspolrzedne ze stworzonych ludzikow z klasy Person
        document.style.left = element._x + "px"
    }

    static checkBorders(document, element) {        //metoda checkBorders do sprawdzania czy ludzik wyszedl poza pole do gry
        if (document.offsetLeft < 0) {
            element._x = 0;
            element._y = 780;
            document.style.left = '0px'
            document.style.top = '780px'          // po przekroczeniu granicy pola wrzuca gracza na miejsce x=0,y=0
        } if (document.offsetLeft > box.offsetWidth - document.offsetWidth) {
            element._x = 780;
            element._y = 780;
            document.style.left = '780px'
            document.style.top = '780px'          // po przekroczeniu granicy pola wrzuca gracza na miejsce x=0,y=0
        }
    }

    static keySupport(element) {         // metoda sluzaca do obslugi klawiszy klawiatury dla obu graczy
        switch (event.code) {                // pierwszy gracz 'element' porusza sie strzałkami
            case 'ArrowLeft':
                element.moveLeft()
                break;
            case 'ArrowRight':
                element.moveRight()
                break;
        }       
    }
}

class Book {                                  // creates Book class with x and y coordinates
    constructor(x, y) {
       this._x = x
       this._y = y
    }
    moveUp() {                  // ^
        this._y -= 10
    }
    moveDown() {                // ^
        this._y += 10
    }
}


function move() {                       // funckja move odpowwiada za ruch graczy po planszy i sprawdza czy nie wykorcyzli poza pole do gry
    Interface.keySupport(ludzik2)       // obsluga sterowania obu graczy
    Interface.RenderElement(ludzik2, boy2)       // renderuje na stronie gracza2
    Interface.checkBorders(boy2, ludzik2)  // sprawdza czy gracze nie wyszli poza pole do gry
    checkCollision(book, boy2)
    
}
addEventListener('keydown', move)       // evenet listener - przy przycisnieciu klawiszy klwiatury uruchamiana jest funkcja move




function myMove() {
    var elem = document.querySelector(".book");   
    var pos = 10;
    var id = setInterval(frame, 2);
    function frame() {
        if (pos == document.getElementsByClassName('box')[0].offsetHeight - document.getElementsByClassName('book')[0].offsetHeight) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + "px"; 
        }
        checkBorders(book, box)
    }  
}


    /// WHEN IS COLLISION??????????????????????????????????!!!!!!!

    function checkCollision(book1, basket1) {
        if (book1.offsetTop < basket1.offsetTop + basket1.offsetWidth &&
            book1.offsetTop + book1.offsetWidth > basket1.offsetTop &&
            book1.offsetLeft < basket1.offsetLeft + basket1.offsetHeight &&
            book1.offsetLeft + book1.offsetHeight > basket1.offsetLeft){
            console.log('YOU CATCHED THE BOOK')
            //gameOver('collision')
        } 
    }

        
    function checkBorders(book, box) {
        if (book.offsetTop === box.offsetHeight - box.offsetTop ) {
            console.log('the book dropped down')
        }        
    }

    function checkBorders(book, box) {
        if (book.offsetTop === box.offsetHeight - box.offsetTop ) {
            console.log('the book dropped down')
        }        
    }


