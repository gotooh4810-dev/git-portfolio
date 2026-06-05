let hamBtn = document.querySelector('.ham-btn');
let hamMenu = document.getElementById('ham-menu');
let hamLinks = document.querySelectorAll('.ham-cont a');
let hamCont = document.querySelector('.ham-cont');

hamBtn.addEventListener('click',function() {
    hamMenu.classList.toggle('ham-open');
});

hamCont.addEventListener('click',function() {
    hamMenu.classList.remove('ham-open');
});

hamLinks.forEach(function(hamLink){
    hamLink.addEventListener('click',function() {
        hamMenu.classList.remove('ham-open');
    });
});
