'use strict';


let secretNumber = Math.trunc((Math.random()*20) + 1);
let score = 20;
let highscore = 0;
function displayMes (message) {document.querySelector('.message').textContent= message}


document.querySelector('.check').addEventListener('click',function(){const guess = Number(document.querySelector('.Guess').value) ;

//no input
if(!guess){
    displayMes ('I said guess  !!!!😡😒')
}

// When guess is equal to secret number
else if(guess === secretNumber){
    displayMes('🎉🤩 Correct Number');
    document.querySelector('.number').textContent = secretNumber ;
    document.querySelector('body').style.backgroundColor = 'lightgreen' ;
    document.querySelector('.Guess').style.backgroundColor = 'lightgreen' ;
    document.querySelector('.number').style.width = '10rem' ;
    document.querySelector('.message').style.color= 'red';

    if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }   
}

 // When guess is not equal to secret number
else if (guess !== secretNumber){
    if(score > 1){
    displayMes(guess > secretNumber? 'Too high👆':'Too low👇');
    score--;
    document.querySelector('.score').textContent = score;
     }

    else {
    document.querySelector('.score').textContent = 0;
    displayMes ('You lost the game 😭😭😫😩')
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.Guess').style.backgroundColor = 'red';
    }
   }
}
)


// Again Button
document.querySelector('.btnAgn').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc((Math.random() * 20) + 1);
    displayMes('Start Guessing.....');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.Guess').value = ''; 
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.Guess').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '8rem';
    document.querySelector('.message').style.color = 'white'; 
    console.log('Button clicked!');
  });
  