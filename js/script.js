const burgerBtn = document.querySelector('.burger-btn');
const burgerArea = document.querySelector('.burger-area');
const burgerLists = document.querySelectorAll('nav ul li');

burgerBtn.addEventListener('click',() => {
    burgerBtn.classList.toggle('is-open');
    burgerArea.classList.toggle('is-open');
});

burgerLists.forEach((burgerList) => {
    burgerList.addEventListener('click',() => {
        burgerBtn.classList.remove('is-open');
        burgerArea.classList.remove('is-open');
    });
});