var googleInput = document.querySelector(".googleButton");
var contactInput = document.querySelector(".contactButton");




//when click on google maps button
googleInput.addEventListener("click", function () {
    document.querySelector(".contact").classList.replace("d-inline-block", "d-none");
    document.querySelector(".map").classList.replace("d-none", "d-inline-block");
    googleInput.classList.replace("btn-2", "btn-1");
    contactInput.classList.replace("btn-1", "btn-2");
});

//when click on contact button
contactInput.addEventListener("click", function () {
    document.querySelector(".map").classList.replace("d-inline-block", "d-none")
    document.querySelector(".contact").classList.replace("d-none", "d-inline-block")
    contactInput.classList.replace("btn-2", "btn-1");
    googleInput.classList.replace("btn-1", "btn-2");
})

// 
function setSectionHeight() {
    var section = document.getElementById('home-section');
    var windowHeight = window.innerHeight;
    section.style.height = windowHeight + 'px';
  }
  
  // Call the function when the page loads
  window.addEventListener('load', setSectionHeight);






