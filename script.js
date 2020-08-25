document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      myFunctionModes();
    } else {
      myFunctionModes();
        }
  });
});
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside
//of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Get the modal
var modals = document.getElementById("myModals");

// Get the button that opens the modal
var btns = document.getElementById("myBtns");

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("closes")[0];

// When the user clicks the button, open the modal 
btns.onclick = function() {
  modals.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans.onclick = function() {
  modals.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
windows.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }

  }
  $("a.projproj").click(function() {
    $("#NavIcon").dropdown("toggle");
 });




  function myFunctionModes() {
  var element = document.body;

  element.classList.toggle("darkmode");


  var element2 = document.querySelector(".headingname");
  console.log(element2);
  if (element2 == null){
    var element2 = document.querySelector(".darkmodeid2");
  }
  if(element2.className.match('darkmodeid2')) {
    element2.className = 'headingname';
  }
  else {
    element2.className = 'darkmodeid2';
  }


  var element4 = document.getElementsByClassName("introduction");
  var element4a = element4[0];
  var element4b = element4[1];
  if (element4.length == 0){
    var element4 = document.getElementsByClassName("darkmodeid4");
    var element4a = element4[0];
    var element4b = element4[1];
  }
  console.log(element4a,element4b);
  if(element4a.className.match('darkmodeid4')) {
    element4a.className = 'introduction';
  }
  else {
    element4a.className = 'darkmodeid4';

  }
  if(element4b.className.match('darkmodeid4')) {
    element4b.className = 'introduction';
  }
  else {
    element4b.className = 'darkmodeid4';

  }



  var element5 = document.querySelector(".projectname");
  if (element5 == null){
    var element5 = document.querySelector(".darkmodeid5");
  }
  if(element5.className.match('darkmodeid5')) {
    element5.className = 'projectname';
  }
  else {
    element5.className = 'darkmodeid5';
  }


  var element6 = document.querySelector(".aboutdetails");
  if (element6 == null){
    var element6 = document.querySelector(".darkmodeid6");
  }
  if(element6.className.match('darkmodeid6')) {
    element6.className = 'aboutdetails';
  }
  else {
    element6.className = 'darkmodeid6';
  }

  
  var element8 = document.querySelector(".abouttitle");
  if (element8 == null){
    var element8 = document.querySelector(".darkmodeid8");
  }
  if(element8.className.match('darkmodeid8')) {
    element8.className = 'abouttitle';
  }
  else {
    element8.className = 'darkmodeid8';
  }


  var element10 = document.getElementsByClassName("modal-content");
  var element10a = element10[0];
  var element10b = element10[1];
  if (element10.length == 0){
    var element10 = document.getElementsByClassName("darkmodeid10");
    var element10a = element10[0];
    var element10b = element10[1];
  }

  
  console.log(element10);
  if(element10a.className.match('darkmodeid10')) {
    element10a.className = 'modal-content';
  }
  else {
    element10a.className = 'darkmodeid10';

  }
  if(element10b.className.match('darkmodeid10')) {
    element10b.className = 'modal-content';
  }
  else {
    element10b.className = 'darkmodeid10';

  }
}
