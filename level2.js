// initalising the variables
const startbtn = document.getElementById("startbtn1");
const man = document.getElementById("man");
const rat = document.getElementById("rat");
const snake = document.getElementById("snake");
const spider = document.getElementById("spider");
const centi = document.getElementById("centipedie");
const coin1 = document.getElementById("coin1");
const coin2 = document.getElementById("coin2");
const coin3 = document.getElementById("coin3");
const coin4 = document.getElementById("coin4");
const bagroundmusic = document.getElementById("bgm");
const jumpSound = document.getElementById("jumpsound");
const coinSound = document.getElementById("coinsound");
const score = document.getElementById("score");
const gamecontents = document.querySelector(".gamecontents");
const gamedescription = document.querySelector(".howtoplay");
const mutebutton = document.getElementById("mute");
const reload = document.getElementById("replay");
const topKey = document.getElementById("top-key");
const leftKey = document.getElementById("left-key");
const rightKey = document.getElementById("right-key");

startbtn.addEventListener('click', function() {
    gamecontents.style.display = 'inherit';
    startbtn.style.display='none';
    gamedescription.style.display='none';
    bagroundmusic.play();

    //setting animation for the elements
    snake.style.animation = 'snake 6s linear infinite';
    centi.style.animation = 'centipiede 7s linear infinite'; 
    spider.style.animation = 'spider 5s linear infinite';
    rat.style.animation = 'rat 9s linear infinite';
    coin1.style.animation = 'coin1 5s linear infinite';
    coin2.style.animation = 'coin2 3.5s linear infinite';
    coin3.style.animation = 'coin3 4s linear infinite';
    coin4.style.animation = 'coin4 3s linear infinite'; 
    
    //functioning the mute button
    mutebutton.addEventListener("click",function mute(){
        if (bagroundmusic.paused){
            bagroundmusic.play();
        } else {
            bagroundmusic.pause();
        }
    });
    
    //functioning the reload button
    reload.addEventListener("click",function reload(){
        location.reload();
    });

    // making the MAN to jump
    var manjumping = false;
    function jump(){
        if (!manjumping){
            manjumping=true;
            //declaring the variables
            var startpos = 30;
            var endpos = 250;
            var speed = 30;

            //setting up time intervals
            var jumpInterval = setInterval(function(){
                if (startpos<endpos){
                    startpos+=speed;
                    man.style.bottom = startpos+'px';
                } else {
                    clearInterval(jumpInterval);
                    fall();
                }
            },30);
        } 
    }
    function fall(){
        var startpos = 250;
        var endpos = 30;
        var speed = 10;

        //setting up time intervals for falling
        var fallInterval = setInterval(function(){
            if (startpos>endpos){
                startpos-=speed;
                man.style.bottom = startpos+'px';
            } else {
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
    var move =25;
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
        score.innerText=`score:${n}`;

        var spiderLeft = (Math.abs(spider.getBoundingClientRect().left)+30);
        var spiderRight = Math.abs(spider.getBoundingClientRect().right  ) ;
        var spiderTop = Math.abs(spider.getBoundingClientRect().top)+20;
        var spiderbottom = Math.abs(rat.getBoundingClientRect().bottom);


        var ratLeft = (Math.abs(rat.getBoundingClientRect().left) +30 );
        var ratRight = Math.abs(rat.getBoundingClientRect().right  );
        var ratTop = Math.abs(rat.getBoundingClientRect().top)+20;
        var ratbottom = Math.abs(rat.getBoundingClientRect().bottom);
        
        var snakeLeft = (Math.abs(snake.getBoundingClientRect().left) +30 );
        var snakeRight = Math.abs(snake.getBoundingClientRect().right  );
        var snakeTop = Math.abs(snake.getBoundingClientRect().top)+20;
        var snakebottom = Math.abs(snake.getBoundingClientRect().bottom);

        var centiLeft = (Math.abs(centi.getBoundingClientRect().left) +30 );
        var centiRight = Math.abs(centi.getBoundingClientRect().right  ) ;
        var centiTop = Math.abs(centi.getBoundingClientRect().top)+20;
        var centibottom = Math.abs(centi.getBoundingClientRect().bottom);

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
                location.href='./gameoverpage2.html';
            },0)
        }
        if (((spiderLeft < manLeft && manLeft < spiderRight) || (spiderLeft < manRight && manRight < spiderRight)) && ((spiderTop < manTop && manTop < spiderbottom) || (spiderTop < manBottom && manBottom < spiderbottom))) {
            setTimeout(() => {
                location.href='./gameoverpage2.html';
            },0)    
        }  

        if (((snakeLeft < manLeft && manLeft < snakeRight) || (snakeLeft < manRight && manRight < snakeRight)) && ((snakeTop < manTop && manTop < snakebottom) || (snakeTop < manBottom && manBottom < snakebottom))) {
            setTimeout(() => {
                location.href='./gameoverpage2.html';
            },0)    
        } 

        if (((centiLeft < manLeft && manLeft < centiRight) || (centiLeft < manRight && manRight < centiRight)) && ((centiTop < manTop && manTop < centibottom) || (centiTop < manBottom && manBottom < centibottom))) {
            setTimeout(() => {
                location.href='./gameoverpage2.html';
            },0)   
        } 

        if (((coin1Left < manLeft && manLeft < coin1Right) || (coin1Left < manRight && manRight < coin1Right))) {
            n+=1;
            coinsound.play();
        }

        if (((coin2Left < manLeft && manLeft < coin2Right) || (coin2Left < manRight && manRight < coin2Right))) {
            n+=1;
            coinsound.play();
        }

        if (((coin3Left < manLeft && manLeft < coin3Right) || (coin3Left < manRight && manRight < coin3Right))) {
            n+=1;
            coinsound.play();
        }

        if (((coin4Left < manLeft && manLeft < coin4Right) || (coin4Left < manRight && manRight < coin4Right))) {
            n+=1;
            coinsound.play();
        }


        if (n==100){
            setTimeout(() => {
                location.href='./congratspage.html';
            },0) 
        }
        localStorage.setItem("score",n);
    },100) 

});
