
//This is the javascript pop up funciton. This will be referenced in all pages. 
function popup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    }

//The other place we used javascript is on the home page to implement smooth scroll. The JS there is inline. 


//responsive navbar hamburger menu. 
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})