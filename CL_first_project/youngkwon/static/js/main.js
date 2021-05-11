let GAME_STARTED = false;
let XPOS = [];


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let s_pressed = false;

function space_pressed() {
    if(s_pressed == true){
        console.log("space!");
    }else {
        console.log("not space");
    }
}

function keyDownHandler(e) {
    if(e.key == " ") {
        s_pressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == " ") {
        s_pressed = false;
    }
}

function setCookieAni() {
    cookie01 = document.querySelector('#cookie01');
    cookie01.style.animation = "ani_cookie01 2.5s linear forwards";

    cookie02 = document.querySelector('#cookie02');
    cookie02.style.animation = "ani_cookie02 2.5s linear forwards";

    cookie03 = document.querySelector('#cookie03');
    cookie03.style.animation = "ani_cookie03 2.5s linear forwards";

    cookie04 = document.querySelector('#cookie04');
    cookie04.style.animation = "ani_cookie04 2.5s linear forwards";

    cookie05 = document.querySelector('#cookie05');
    cookie05.style.animation = "ani_cookie05 2.5s linear forwards";

    cookie06 = document.querySelector('#cookie06');
    cookie06.style.animation = "ani_cookie06 2.5s linear forwards";
}

function pauseAnimation(element){
    console.log(element);
    elem = document.querySelector(element);
    console.log(elem);
    elem.style.animation = "none";
    elem.style.animation = "btnPause 3s ease infinite";
    setCookieAni();
    setTimeout(function(){
        document.querySelector('.intro').style.animation = "introFadeout 3s forwards ease-in-out";
        let timer = 3;
        setInterval(function() {
            document.querySelector('#waitingTime').innerHTML = timer;
            timer -= 1
            if(timer == 2) {
                document.querySelector('#waitingTime').style.color = 'red';
            }
            if(timer == -1) {
                location.href = "http://localhost:8000/youngkwon/introduction/";
            }
        }, 1000)
    },2000);
}

function go(){
    pauseAnimation('#indexBtn')
}

function moveto_whoami() {
    window.scroll(0, 800);
}

function unroll_suggestion() {
    let paper = document.querySelectorAll('.suggestion_paper')[0];
    paper.style.animationName = "unroll_suggestion";
    paper.style.animationDuration = "1s";
    paper.style.animationTimingFunction = "linear";
    paper.style.animationFillMode = "forwards";
}

function list_all_disappear(list) {
    for(let i = 0; i < list.length; i++) {
        list[i].style.display = "none";
    }
}

function createObstacle() {
    setInterval(function(){
        var x_val = (Math.random() + 1) * 800;
        XPOS.push(x_val);
    }, 4000);
}

const drawObstacle = () => {
    let canvas = document.querySelector(".canvas_game");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < XPOS.length; i++) {
        ctx.beginPath();
        var img = new Image();
        img.onload = function(){
            ctx.drawImage(img, XPOS[i], 220);
        }
        img.src = '/static/' + 'image/obstacle.png';
    }
    draw_character();
    draw_map();
}

const decrease_xpos = () => {
    for(let i = 0; i < XPOS.length; i++) {
        XPOS[i] -= 5;
        if(XPOS[0] < -50) {
            XPOS.shift();
        }
        if((XPOS[i] < 130 && XPOS[i] >10) && s_pressed == false) {
            // alert("");
        }
    }
}

const draw_character = () => {
    let canvas = document.querySelector(".canvas_game");
    let ctx = canvas.getContext("2d");
    if(s_pressed == false) {
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 90);
        };
        img.src = '/static/' + 'image/game_character.png';
    }
}

const draw_map = () => {
    let canvas = document.querySelector(".canvas_game");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 330, 800, 3);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function drawCanvas() {
    draw_character();
    draw_map();
    createObstacle();
    setInterval(function(){
        drawObstacle();
        decrease_xpos();
        space_pressed();
    }, 50);
}

function active_game_start_counter() {
    let target = document.querySelector('.game_start_counter');
    let counter = 4;
    let interval = setInterval(function(){
        target.innerHTML = counter;
        counter -= 1;
        if(counter == -1) {
            target.innerHTML = "GO!";
            clearInterval(interval);
        }
    }, 1000);
    setTimeout(function(){
        target.style.display = "none";
        document.querySelector(".canvas_game").style.display = "block";
        drawCanvas();
    }, 1000 * (counter + 2));
}

function start_game() {
    document.querySelector('.game_console').style.display = "block";
    active_game_start_counter();
}

function start_fade_text() {
    let fade_text = document.querySelectorAll('.fade_text');
    let ft_length = fade_text.length;
    let index = 0;
    let interval = setInterval(function(){
        list_all_disappear(fade_text);
        fade_text[index].style.display = 'inline';
        index += 1;
        if(index == ft_length) {
            clearInterval(interval);
        }
    },1500);
    setTimeout(function(){
        list_all_disappear(fade_text);
        start_game();
    }, 1500 * (ft_length + 1));

}

function intro_game() {
    GAME_STARTED = true;
    unroll_suggestion();
    start_fade_text();
    setTimeout(function(){
        start_game();
    }, 1500 * (5));
}

window.onscroll = function(ev) {
    if(GAME_STARTED == false && window.scrollY > 1099) {
        intro_game();
    }
};