// initialisign all the elements in js
const description = document.querySelector(".howtoplay");
const startbtn = document.querySelector("#startbtn1");
const gamecontents = document.querySelector(".gamecontents");
const man = document.getElementById("man");
const spider = document.getElementById("spider");
const rat = document.getElementById("rat");
var score = document.getElementById("score");
const bagroundmusic = document.getElementById("bgm");
const jumpsound = document.getElementById("jumpsound");
const coinsound = document.getElementById("coinsound");
const mutebutton = document.getElementById("mute");
const reloadbutton = document.getElementById("replay");
const coin1 = document.getElementById("coin1");
const coin2 = document.getElementById("coin2");
const coin3 = document.getElementById("coin3");
const coin4 = document.getElementById("coin4");
const gameover=document.querySelector(".game-over-popup");
const topKey = document.getElementById("top-key");
const leftKey = document.getElementById("left-key");
const rightKey = document.getElementById("right-key");
// giving eventlistener to the start button
startbtn.addEventListener("click",function(){
    //displaying game elements on clicking the stast button
    gamecontents.style.display='inherit'
    description.style.display='none';
    startbtn.style.display='none';
    bagroundmusic.play()
    // animationg the elemnts 
    spider.style.animation='spider 3s linear infinite';
    rat.style.animation='rat 4s linear infinite';
    coin1.style.animation='coin1 4s linear infinite';
    coin2.style.animation='coin2 4.5s linear infinite';
    coin3.style.animation='coin3 5.5s linear infinite';
    coin4.style.animation='coin3 4s linear infinite';
    //functioning the mute button
    mutebutton.addEventListener("click",function mute(){
        if (bagroundmusic.paused){
            bagroundmusic.play();
        } else {
            bagroundmusic.pause();
        }
    });

    //functioning reload button
    reloadbutton.addEventListener("click",function reload(){
        location.reload();
    })

    // making jump function to the man
    var manjumping = false;
    function jump(){
        if (!manjumping){
            manjumping=true;
            // decalring start position and end position of the man
            var startpos= 25;
            var endpos=280;
            var speed = 30;

            // setting intervals
            var jumpInterval = setInterval(function(){
                if (startpos<endpos){
                    startpos+=speed;
                    man.style.bottom=startpos+"px";
                } else {
                    clearInterval(jumpInterval);
                    fall();
                }
            },20);
        }
    }
    function fall(){
        // decalring start position and end position of the man to fall
        var startpos=280;
        var endpos= 25;
        var speed = 12;

        // setting intervals
        var fallInterval = setInterval(function(){
            if (startpos>endpos){
                startpos-=speed;
                man.style.bottom=startpos+"px";
            } else{
                clearInterval(fallInterval);
                manjumping=false;
            }
        },20);
    }
    window.addEventListener("keydown", function(event){
        switch (event.key){
            case "ArrowUp":
                jump();
                jumpsound.play();
                break;
        }
    });
    topKey.addEventListener("click",function(){
        jump();
        jumpsound.play();
    });
    //Making the man to move left and right
    var move =30;
    window.onload=(e)=>{
        man.style.position="relative";
        man.style.left= '30px';
    }
    window.onkeydown=(e)=>{
        switch(e.key){
            case 'ArrowLeft':
                moveLeft()
                break;
            case 'ArrowRight':
                moveRight();
                break;
        };
    };
    function moveLeft(){
        var currentLeft = parseInt(man.style.left) || 0;
        man.style.left = (currentLeft - move) + 'px';
        man.classList.add("flipped");
    }
    function moveRight() {
        var currentLeft = parseInt(man.style.left) || 0;
        man.style.left = (currentLeft + move) + 'px';
        man.classList.remove("flipped");
    };
    leftKey.addEventListener("click",moveLeft);
    rightKey.addEventListener("click",moveRight);
    // logic of the game
    // checking the collition of the obstalces
    var n = 0; 
    setInterval(()=>{
        score.innerText=`Coins:${n}`;

        var spiderLeft = (Math.abs(spider.getBoundingClientRect().left)+30);
        var spiderRight = Math.abs(spider.getBoundingClientRect().right  ) ;
        var spiderTop = Math.abs(spider.getBoundingClientRect().top)+20;
        var spiderbottom = Math.abs(rat.getBoundingClientRect().bottom);

        var ratLeft = (Math.abs(rat.getBoundingClientRect().left) +30);
        var ratRight = Math.abs(rat.getBoundingClientRect().right  );
        var ratTop = Math.abs(rat.getBoundingClientRect().top)+20;
        var ratbottom = Math.abs(rat.getBoundingClientRect().bottom);

        var coin1Left = Math.abs(coin1.getBoundingClientRect().left);
        var coin1Right = Math.abs(coin1.getBoundingClientRect().right);
        var coin1Top = Math.abs(coin1.getBoundingClientRect().top);
        var coin1Bottom = Math.abs(coin4.getBoundingClientRect().bottom);

        var coin2Left = Math.abs(coin2.getBoundingClientRect().left);
        var coin2Right = Math.abs(coin2.getBoundingClientRect().right);
        var coin2Top = Math.abs(coin2.getBoundingClientRect().top);
        var coin2Bottom = Math.abs(coin4.getBoundingClientRect().bottom);

        var coin3Left = Math.abs(coin3.getBoundingClientRect().left);
        var coin3Right = Math.abs(coin3.getBoundingClientRect().right);
        var coin3Top = Math.abs(coin3.getBoundingClientRect().top);
        var coin3Bottom = Math.abs(coin4.getBoundingClientRect().bottom);

        var coin4Left = Math.abs(coin4.getBoundingClientRect().left);
        var coin4Right = Math.abs(coin4.getBoundingClientRect().right);
        var coin4Top = Math.abs(coin4.getBoundingClientRect().top);
        var coin4Bottom = Math.abs(coin4.getBoundingClientRect().bottom);

        var manLeft = (Math.abs(man.getBoundingClientRect().left))+100;
        var manRight = Math.abs(man.getBoundingClientRect().right);
        var manTop = Math.abs(man.getBoundingClientRect().top);
        var manBottom = Math.abs(man.getBoundingClientRect().bottom);



        if (((ratLeft < manLeft && manLeft < ratRight) || (ratLeft < manRight && manRight < ratRight)) && ((ratTop < manTop && manTop < ratbottom) || (ratTop < manBottom && manBottom < ratbottom))) {
            setTimeout(() => {
                location.href='./gameoverpage.html';
            },0)
        }
        if (((spiderLeft < manLeft && manLeft < spiderRight) || (spiderLeft < manRight && manRight < spiderRight)) && ((spiderTop < manTop && manTop < spiderbottom) || (spiderTop < manBottom && manBottom < spiderbottom))) {
            setTimeout(() => {
                location.href='./gameoverpage.html';
            },0)    
        }  

        if (((coin1Left < manLeft && manLeft < coin1Right) || (coin1Left < manRight && manRight < coin1Right))) {
            n += 1;
            coin1.style.visibility = 'hidden';
            coinsound.play();
            setTimeout(function () {
                coin1.style.visibility = 'visible';
            }, 2000); 
        }

        if (((coin2Left < manLeft && manLeft < coin2Right) || (coin2Left < manRight && manRight < coin2Right))) {
            n += 1;
            coin2.style.visibility = 'hidden';
            coinsound.play();
            setTimeout(function () {
                coin2.style.visibility = 'visible';
            }, 2000); 
        }

        if (((coin3Left < manLeft && manLeft < coin3Right) || (coin3Left < manRight && manRight < coin3Right))) {
            n += 1;
            coin3.style.visibility = 'hidden';
            coinsound.play();
            setTimeout(function () {
                coin3.style.visibility = 'visible';
            }, 2000);
        }

        if (((coin4Left < manLeft && manLeft < coin4Right) || (coin4Left < manRight && manRight < coin4Right))) {
            n += 1;
            coin4.style.visibility = 'hidden';
            coinsound.play(); 
            setTimeout(function () {
            coin4.style.visibility = 'visible';
            }, 2000);
        }


        if (n==50){
            setTimeout(() => {
                location.href='./gamewon.html';
            },0) 
        }
        localStorage.setItem("score",n);
    },100)
});


