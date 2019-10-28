




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
        setTimeout(endOfModal1, 2000);
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

    
    window.addEventListener('load', checkCookies); 
    buttonTerms.addEventListener('click', showTerms);
    buttonAccept1.addEventListener('click', setCookie1);
    buttonAccept2.addEventListener('click', setCookie2);

    
    