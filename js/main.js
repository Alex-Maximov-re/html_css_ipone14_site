const btn = document.querySelector('.menu-btn');  // с помощью btn обращаемся к button
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');  //присвоить класс переменной при опред событии
})