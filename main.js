const button = document.getElementById("my-button");
const score = document.getElementById("score");
const upgrade1 = document.getElementById('upgrade1');
const upgrade2 = document.getElementById('upgrade2');
const upgrade3 = document.getElementById('upgrade3');
const upgrade4 = document.getElementById('upgrade4');
const h1 = document.getElementsByTagName('h1')[0];
let pisteet = 0;
let upgradee1 = 0;
let upgradee2 = 0;
let upgradee3 = 0;
let upgradee4 = 0;

button.addEventListener('click', function() {
    if (upgradee2 > 0) {
        pisteet += 5;
        score.textContent = pisteet;
    }
    
    else if (upgradee1 > 0) {
        pisteet += 2;
        score.textContent = pisteet;
    }
    

    else {
        pisteet ++;
        score.textContent = pisteet;
    }
})

upgrade1.addEventListener('click', function() {
    if (pisteet >= 10) {
        pisteet -= 10;
        upgradee1 ++;
        score.textContent = pisteet;
        upgrade1.remove();
    }
})

upgrade2.addEventListener('click', function() {
    if (pisteet >= 30) {
        pisteet -= 30;
        upgradee2 ++;
        score.textContent = pisteet;
        upgrade2.remove();
    }
})

setInterval(function() {
    if (upgradee3 > 0) {
        pisteet += 100000;
        score.textContent = pisteet;
    }
}, 1000); 

upgrade3.addEventListener('click', function() {
    if (pisteet >= 50) {
        pisteet -= 50;
        upgradee3++;
        upgrade3.remove();
    }
});

upgrade4.addEventListener('click', function() {
    if (pisteet >= 1000000) {
        pisteet -= 1000000;
        const roundButton = document.querySelector('.round-button');
        roundButton.classList.add('upgraded');
        h1.textContent = 'VIIKSET MINTISSÄ!';
        score.textContent = pisteet;
        upgrade4.remove();
        
    }
});

var audio = new Audio('banger.wav');
audio.loop = true;
audio.play();