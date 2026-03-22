const burgerBtn = document.querySelector('.burger-btn');
const headerContents = document.querySelector('.header-contents');
const navLinks = document.querySelectorAll('nav a');

burgerBtn.addEventListener('click',() => {
    burgerBtn.classList.toggle('is-open');
    headerContents.classList.toggle('is-open');
});

for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click',() => {
    burgerBtn.classList.remove('is-open');
    headerContents.classList.remove('is-open');
    });
};

headerContents.addEventListener('click',() => {
    burgerBtn.classList.remove('is-open');
    headerContents.classList.remove('is-open');
});



const questionTtls = document.querySelectorAll('.question-ttl');
for(let i = 0; i<questionTtls.length; i++){
    questionTtls[i].addEventListener('click',() => {
        questionTtls[i].classList.toggle('is-open');
        const wrap= questionTtls[i].nextElementSibling;
        wrap.classList.toggle('is-open');
    });
};