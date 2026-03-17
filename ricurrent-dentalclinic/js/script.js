const questionTtls = document.querySelectorAll('.question-ttl');
for(let i = 0; i<questionTtls.length; i++){
    questionTtls[i].addEventListener('click',() => {
        questionTtls[i].classList.toggle('is-open');
        const wrap= questionTtls[i].nextElementSibling;
        wrap.classList.toggle('is-open');
    });
};