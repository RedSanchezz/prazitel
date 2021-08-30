
const sections = document.querySelectorAll('section');
const headerBlock = document.querySelector('header');
const slides = [headerBlock, ...sections];
const texts = [
            'Бережная обработка нужна каждому питомцу',
            'Защита от гельминтов: главное',
            'Меняйте жизнь питомца к лучшему',
            'Ассортимент',
            'Где купить',
            'Задать вопрос ветеринарному врачу'
] 
const navMenu = document.querySelector('.navigation-menu');
const navMenuText = document.querySelector('.navigation-menu__active-window-text');
const whereBuy = document.querySelector('.navigation-menu__where-buy');
const navigationMenu = document.querySelector('.navigation-menu');
const clickedMenuBlock = document.querySelector('.navigation-menu__active-widnow-inner');

let activeBlockNumber = Math.ceil(pageYOffset/window.innerHeight);
setCurrentSlide(activeBlockNumber);
//если первый слайд - то скрываем меню
if(activeBlockNumber===0){
    navMenu.style.display='none';
}else{
    navMenu.style.display='';
}

whereBuy.addEventListener('click', () => {
    setCurrentSlide(5);
})

function wheel(e){
    if(window.matchMedia('(max-width: 768px)').matches) return;

    if(e.deltaY>0){
        if(activeBlockNumber <slides.length -1) setCurrentSlide(activeBlockNumber+1);
    }
    else {
        if(activeBlockNumber>0) setCurrentSlide(activeBlockNumber-1);
    }
}
window.addEventListener('wheel', wheel);

clickedMenuBlock.addEventListener('click', (e)=>{
    navigationMenu.classList.toggle('active');
})


function setCurrentSlide(number){
    navMenu.classList.remove('active');
    //Если первый слайд - скрываем меню
    if(number===0){
        navMenu.style.display='none';
    }else{
        navMenu.style.display='';
    }

    //на время выключаем скролл
    window.removeEventListener('wheel', wheel);
    setTimeout(() => {
        window.addEventListener('wheel', wheel);
    }, 300);
    
    let top = slides[number].getBoundingClientRect().top + pageYOffset;
    window.scroll({
        top: top,
        behavior: 'smooth'
    });
    //надпись в верхнем меню
    navMenuText.innerHTML=texts[number-1];
    activeBlockNumber = number;
} 


