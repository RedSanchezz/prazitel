


const navigationMenu = document.querySelector('.navigation-menu');
const clickedMenuBlock = document.querySelector('.navigation-menu__active-widnow-inner');


clickedMenuBlock.addEventListener('click', (e)=>{
    navigationMenu.classList.toggle('active');
    console.log('toggle');
})
let pluses = document.querySelectorAll('.plus__inner-block-plus');
let plusContents = document.querySelectorAll('.plus__peculiarities');



for (let i=0; i < pluses.length; i++) {
    let plus = pluses[i];
    let plusConetent = plusContents[i];

    plus.addEventListener('click', () => {
        plusConetent.classList.add('active');
    })

    let backBtn = plusConetent.querySelector('.plus__peculiarities-back-btn');

    backBtn.addEventListener('click', (e) => {
        plusConetent.classList.remove('active');
    });
}


const header = document.querySelector('#header_block');
const headerContent = document.querySelector('.header-content');
const headerBg = document.querySelector('.header-bg');
const headerDog = document.querySelector('.header-dog ')
const imgTablet = document.querySelector('#tablet_img');
const lineArrow  = document.querySelector('.header-arrow');
const lineImg = document.querySelector('#img_arrow');

const headerArrowText = document.querySelector('.header-arrow-text');
const container = document.querySelector('.container');
const imgArrow2 = document.querySelector('#img_arrow2');

const modalWindow = document.querySelector('.modal-video');
const modalWindowBtn = document.querySelector('#watch-video');
const modalCloseBtn = document.querySelector('.modal-video__back-btn');



let loadedIframe = false;


modalWindowBtn.addEventListener('click', (e) => {
    modalWindow.classList.add('active');
    if(!loadedIframe) {
        let modalCenterBlock = modalWindow.querySelector('center');
        let iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/UPEjiORVwT4';

        iframe.style.maxWidth = '700px';
        iframe.width='100%';
        iframe.height = '400';
        modalCenterBlock.appendChild(iframe);
        loadedIframe=true;
    }
})

modalCloseBtn.addEventListener('click', (e) => {
    modalWindow.classList.remove('active');
})


window.onload = ()=>{

    setHeaderBgSize();
    getArrowCoord();

    addEventListener('resize',  (e)=>{
        setHeaderBgSize();
        getArrowCoord();
    });
    
    function setHeaderBgSize(){
        headerBg.style.height = getComputedStyle(headerContent).height;
        header.style.height = getComputedStyle(headerContent).height;
        headerDog.style.height = getComputedStyle(headerContent).height;
    }
    
    function getArrowCoord (){
        let clientRectImgTablet = imgTablet.getBoundingClientRect();
        //если мобильные стили - стрелка должна быть под упаковкой

        if(window.matchMedia('(max-width: 768px)').matches){
            lineImg.previousSibling.srcset='images/mobile-arrow.webp'
            lineImg.src = 'images/mobile-arrow.png';
            return;
        }
        else {
            lineImg.previousSibling.srcset='images/header-arrow.webp'
            lineImg.src = 'images/header-arrow.png';

        }
        let width =  clientRectImgTablet.left + clientRectImgTablet.width - 80  +'px';
        lineArrow.style.width = width;
        // lineArrow.style.top = clientRectImgTablet.top + clientRectImgTablet.height  - height + pageYOffset -60 + 'px';
        //координаты текста
        //Задаем координаты второй линии
        imgArrow2.style.width = window.innerWidth - clientRectImgTablet.left - 100 +'px';

    }

}



setTimeout(() => {
    console.log('test');
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {
        grecaptcha.ready(function() {
            grecaptcha.execute('_reCAPTCHA_site_key_', {
                action: 'homepage'
            }).then(function(token) {});
        });
    }
    script.src = "https://www.google.com/recaptcha/api.js?render=_reCAPTCHA_site_key";

    let script2 = document.createElement('script');
    script2.type = 'text/javascript';

    script2.src = "https://yastatic.net/share2/share.js";
    head.appendChild(script);
    document.body.append(script2);
}, 1000);

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

let activeBlockNumber = Math.ceil(pageYOffset/window.innerHeight);
setCurrentSlide(activeBlockNumber);

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

function setCurrentSlide(number){
    navMenu.classList.remove('active');
    if(number===0){
        navMenu.style.display='none';
    }else{
        navMenu.style.display='';
    }
    window.removeEventListener('wheel', wheel);
    setTimeout(() => {
        window.addEventListener('wheel', wheel);
    }, 300);
    
    let top = slides[number].getBoundingClientRect().top + pageYOffset;
    window.scroll({
        top: top,
        behavior: 'smooth'
    });
    navMenuText.innerHTML=texts[number-1];
    activeBlockNumber = number;
} 



