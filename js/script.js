const burgerBtn = document.querySelector('.burger-btn');
const burgerArea = document.querySelector('.burger-area');

burgerBtn.addEventListener('click',() => {
    burgerBtn.classList.toggle('is-open');
    burgerArea.classList.toggle('is-open');

});
