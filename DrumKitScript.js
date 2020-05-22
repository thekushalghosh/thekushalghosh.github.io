var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "z":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "x":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "c":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "v":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "b":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "n":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "m":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
      case "Z":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
  
      case "X":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
  
      case "C":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
  
      case "V":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
  
      case "B":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
  
      case "N":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
  
      case "M":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  switch (currentKey) {
    case "z":
      currentKey = "w";
      break;

    case "x":
      currentKey = "a";
      break;

    case "c":
      currentKey = "s";
      break;

    case "v":
      currentKey = "d";
      break;

    case "b":
      currentKey = "j";
      break;

    case "n":
      currentKey = "k";
      break;

    case "m":
      currentKey = "l";
      break;

      case "Z":
        currentKey = "w";
        break;
  
      case "X":
        currentKey = "a";
        break;
  
      case "C":
        currentKey = "s";
        break;
  
      case "V":
        currentKey = "d";
        break;
  
      case "B":
        currentKey = "j";
        break;
  
      case "N":
        currentKey = "k";
        break;
  
      case "M":
        currentKey = "l";
        break;
  }


  

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}