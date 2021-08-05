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


modalWindowBtn.addEventListener('click', (e) => {
    modalWindow.classList.add('active');
})

modalCloseBtn.addEventListener('click', (e) => {
    modalWindow.classList.remove('active');
})

window.onload = ()=>{

    setHeaderBgSize();
    getArrowCoord();

    addEventListener('resize',  ()=>{
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
            lineArrow.style.width='100%'
            lineArrow.style.top = clientRectImgTablet.top + clientRectImgTablet.height + 9 +  pageYOffset + 'px';
            
            getTextCoord();
            return;
        }

        let width =  clientRectImgTablet.left + clientRectImgTablet.width - 80  +'px';
        let height = parseInt(getComputedStyle(lineArrow).height);
        lineArrow.style.width = width;
        lineArrow.style.top = clientRectImgTablet.top + clientRectImgTablet.height  - height + pageYOffset -60 + 'px';
        //координаты текста
        getTextCoord();
        //Задаем координаты второй линии
        imgArrow2.style.width = window.innerWidth - clientRectImgTablet.left - 100 +'px';
        console.log(window.innerWidth - clientRectImgTablet.left+'px');


    }
    function getTextCoord(){

        let lineArrowCoord = parseInt(lineArrow.style.top) + lineArrow.getBoundingClientRect().height/3;
        console.log(lineArrowCoord);
        // headerArrowText.style.top = clientRectImgTablet.bottom + pageYOffset - 105 + 'px';
        if(window.matchMedia('(max-width: 768px)').matches){
            headerArrowText.style.top = lineArrowCoord -4 + 'px';


        }
        else {
            headerArrowText.style.top = lineArrowCoord + 'px';
        }
        textLeftPosition =  container.getBoundingClientRect().left + 15 + 'px';
        // headerArrowText.style.left = textLeftPosition; 
    }
}


// let clue = document.querySelector('.ask-question__checkbox-question');
// let icon = document.querySelector('.ask-question__question-icon');
// icon.addEventListener('click', (e) => {
//     clue.classList.toggle('active');
// })
