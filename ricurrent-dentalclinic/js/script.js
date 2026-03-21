const burgerBtn = document.querySelector('.burger-btn');
const headerContents = document.querySelector('.header-contents');

burgerBtn.addEventListener('click',() => {
    burgerBtn.classList.toggle('is-open');
    headerContents.classList.toggle('is-open');
});

const questionTtls = document.querySelectorAll('.question-ttl');
for(let i = 0; i<questionTtls.length; i++){
    questionTtls[i].addEventListener('click',() => {
        questionTtls[i].classList.toggle('is-open');
        const wrap= questionTtls[i].nextElementSibling;
        wrap.classList.toggle('is-open');
    });
};