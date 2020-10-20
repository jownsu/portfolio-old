const ham = document.getElementById('ham');
const hamBar = document.getElementById('hamBar');
const nav = document.getElementById('nav');
const header = document.querySelector('header');
const a = document.querySelectorAll('.navList a');

ham.addEventListener('click', function(){
    hamBar.classList.toggle('active');
    nav.classList.toggle('active');
});


a.forEach(item => item.addEventListener('click', function(){
    hamBar.classList.toggle('active');
    nav.classList.toggle('active');
}));

document.addEventListener('scroll', function(){
    var scroll = window.scrollY;
    if(scroll > 250){
        header.style.background = 'rgb(41, 41, 41)';
    }else{
        header.style.background = 'rgba(41, 41, 41, 0.3)';
    }
});