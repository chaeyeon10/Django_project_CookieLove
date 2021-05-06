function setCookieAni() {
    cookie01 = document.querySelector('#cookie01');
    cookie01.style.animation = "ani_cookie01 3s linear forwards";

    cookie02 = document.querySelector('#cookie02');
    cookie02.style.animation = "ani_cookie02 3s linear forwards";

    cookie03 = document.querySelector('#cookie03');
    cookie03.style.animation = "ani_cookie03 3s linear forwards";

    cookie04 = document.querySelector('#cookie04');
    cookie04.style.animation = "ani_cookie04 3s linear forwards";

    cookie05 = document.querySelector('#cookie05');
    cookie05.style.animation = "ani_cookie05 3s linear forwards";

    cookie06 = document.querySelector('#cookie06');
    cookie06.style.animation = "ani_cookie06 3s linear forwards";
}

function pauseAnimation(element){
    console.log(element);
    elem = document.querySelector(element);
    console.log(elem);
    elem.style.animation = "none";
    elem.style.animation = "btnPause 3s ease infinite";

    setCookieAni();
}

function go(){
    pauseAnimation('#indexBtn')
}