window.onload = function(){

    //Detecting button press
    var allButtons = document.getElementsByClassName("drum").length -1;

    for (var i =0; i<= allButtons; i++){
        document.getElementsByClassName('drum')[i].addEventListener("click", handleClick);

    }

    function handleClick(){
        // var audio = new Audio("./sounds/crash.mp3");
        // audio.play();

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }

    



    //detecting keyboard press
    document.addEventListener("keydown",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });

    function makeSound(key){
        switch (key) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom2 = new Audio("./sounds/tom-4.mp3");
                tom2.play();
                break;

            case "j":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;

            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;

            default:
                console.log(buttonInnerHTML);
                break;
        }

    }




    function buttonAnimation(currentKey){
        var activeButton = document.querySelector("." +currentKey);
        activeButton.classList.add("pressed"); //button pressed down animation 


        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100); //timeout function 

    }
}

