var counter = 0;

function newZombie() {
    var newDiv = document.querySelector('.container').appendChild(document.createElement('div'));
    newDiv.className = "zombie";
    counter++;
    stopI();
}

var setI = setInterval(function () {
    newZombie();
}, 1600);

function stopI() {
    if (counter === 6) {
        clearInterval(setI);
    }
}