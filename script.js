window.addEventListener('load', function() {
    var box = document.querySelectorAll('.box');
    var imgBox = document.querySelectorAll('.box img');
    var popUpContainer = document.querySelector('.pop-up-container');
    var popUp = document.querySelector('.pop-up');
    var startBtn = document.querySelector('.start-btn');

    var cach = [];

    var pics = ['images/blue.png',
                'images/blue.png',
                'images/purple.png',
                'images/purple.png',
                'images/pink.png',
                'images/pink.png'];

                function shuffle(arr) {
                var shuffledArr = arr.sort((a,b) => 0.5 - Math.random());
                }
        shuffle(pics); 
        
        popUpContainer.style.opacity = 1;
        popUpContainer.style.pointerEvents = "auto";
        
        startBtn.addEventListener('click', function() {
            popUpContainer.style.opacity = 0;
            popUpContainer.style.pointerEvents = 'none';
            startBtn.style.display = 'none';
        })

    for (let i=0; i < pics.length; i++) {
        imgBox[i].src = pics[i];
        }
        for (let j=0; j < box.length; j++) {
            box[j].addEventListener('click', function() {
                cach.push(box[j].firstChild.src);
                box[j].firstChild.style.opacity = 1;
                box[j].style.pointerEvents = 'none';

                if(cach.length > 1) {
                    if (cach[0] == cach[1]) {
                        popUpContainer.style.opacity = 1;
                        popUpContainer.style.pointerEvents = 'auto';
                        popUp.querySelector('h1').innerText = 'you won!';
                        popUp.querySelector('p').innerText = 'reload the page to play again.';
                    }
                    else {
                        popUpContainer.style.opacity = 1;
                        popUpContainer.style.pointerEvents = 'auto';
                        popUp.querySelector('h1').innerText = 'try again!';
                        popUp.querySelector('p').innerText = 'reload the page to play again.';
                    }
                }
            })

    }














})