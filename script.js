




//---------------------------------------------------------functionality: flipping cards--------


var cards = document.querySelectorAll('.card');
    for (i=0;i<8;i++) {
        flip = cards[i];
            flip.addEventListener('click', function () { 
                if (this.classList.contains('turnAround')) {
            this.classList.remove('turnAround')
        } else {
    this.classList.add('turnAround')}
            }
        );
    }       




//------------------------------------------------------- cookies----------------

    var buttonAccept1 = document.querySelector('#accept1');
    var buttonAccept2 = document.querySelector('#accept2');
    var buttonTerms = document.querySelector('#condition');

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

    function setCookie2() {
        document.cookie = "name=www.bookswap.com; expires=Thu, 23 Jan 2020 06:00:00 UTC; path=/";
        var modalBox = document.querySelector('.modal1');
        modalBox.classList.add('accepted');
        console.log('set cookie 2');
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
    
    
    
    months.innerHTML = range.value;
    range.oninput = function() {
        months.innerHTML = this.value;
        var x = range.value;
        if (student.checked) {if (x<=3) {monthPrice.innerHTML = 5}
         else if (x>3 && x<9) {monthPrice.innerHTML = 4} 
         else {monthPrice.innerHTML = 3}} else if (nonStudent.checked) {if (x<=3) {monthPrice.innerHTML = 4}
         else if (x>3 && x<9) {monthPrice.innerHTML = 3} 
         else {monthPrice.innerHTML = 2}}

         
      }

   

   
    
    
    
    
    
    function changeSliderColor() {
        var x = range.value;
        var color = `linear-gradient(90deg, rgb(196, 57, 92) ${x*8}%, rgb(245, 187, 208) ${x*8}%)`
        range.style.background = color; 
       
    }

    function startingValue() {
        if (student.checked) {
            monthPrice.innerHTML = 5;
        } else if (nonStudent.checked) {
            monthPrice.innerHTML = 4}
        }
    





    window.addEventListener('load', checkCookies); 
    range.addEventListener('mousemove', changeSliderColor)
    buttonTerms.addEventListener('click', showTerms);
    buttonAccept1.addEventListener('click', setCookie1);
    buttonAccept2.addEventListener('click', setCookie2);
    student.addEventListener('click', startingValue);
    nonStudent.addEventListener('click', startingValue);
    startingValue();

    
    