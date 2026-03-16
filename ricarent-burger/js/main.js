let btn = true;
document.getElementById('js-btn').addEventListener('click',function () {
    if(btn) {
        this.innerText = '押すんじゃねーよ！！！';  
    } else{
        this.innerText = 'MENU';  
    }btn = !btn;
});

const firstView = document.querySelector('.js-fv');
let fv = true;
firstView.addEventListener('click',() => {
    // event.target.src = (fv ? './img/mainvisual.jpg' : './img/firstview.webp');
    if(fv){
        event.target.src = './img/mainvisual.jpg';
    }else{
        event.target.src = './img/firstview.webp';
    }
    fv = !fv;
});

// let fv = true;
// document.querySelector('.js-fv').addEventListener('click',function () {
//     if(fv){
//         this.src = './img/mainvisual.jpg';
//     }else{
//         this.src = './img/firstview.webp';
//     }fv = !fv;
// });

// jquery('.js-accordion').on('click',function() {
//     jquery(this).next().slideToggle();
// });

