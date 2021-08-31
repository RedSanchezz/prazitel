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
            lineImg.src = 'images/mobile-arrow.png';
            return;
        }
        else {
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

