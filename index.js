var numOfKeys = document.querySelectorAll(".key").length;

for (var i=0; i<numOfKeys; i++) {

document.querySelectorAll(".key")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
});
}

// Detecting Keypress
document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "q":
                var keyC = new Audio('sounds/Piano/C-Key.wav');
                keyC.preload = 'auto';
                keyC.play();
            break;
        case "w":
                var keyD = new Audio('sounds/Piano/D-Key.wav');
                keyD.preload = 'auto';
                keyD.play();
            break;
        case "e":
                var keyE = new Audio('sounds/Piano/E-Key.wav');
                keyE.preload = 'auto';
                keyE.play();
            break;
        case "r":
                var keyF = new Audio('sounds/Piano/F-Key.wav');
                keyF.preload = 'auto';
                keyF.play();
            break;
        case "t":
                var keyG = new Audio('sounds/Piano/G-Key.wav');
                keyG.preload = 'auto';
                keyG.play();
            break;
        case "y":
                var keyA = new Audio('sounds/Piano/A-Key.wav');
                keyA.preload = 'auto';
                keyA.play();
            break;
        case "u":
                var keyB = new Audio('sounds/Piano/B-Key.wav');
                keyB.preload = 'auto';
                keyB.play();

            break;
        default:console.log(buttonInnerHTML);
    }
}

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
    }
