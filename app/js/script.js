const header = document.querySelector('#header_block');
const headerContent = document.querySelector('.header-content');
const headerBg = document.querySelector('.header-bg');
const imgTablet = document.querySelector('#tablet_img');
const lineArrow  = document.querySelector('.header-arrow');
const lineImg = document.querySelector('#img_arrow');
const headerArrowText = document.querySelector('.header-arrow-text');
const container = document.querySelector('.container');
const imgArrow2 = document.querySelector('#img_arrow2');

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
    }
    
    function getArrowCoord (){

        let clientRectImgTablet = imgTablet.getBoundingClientRect();
        //если мобильные стили - стрелка должна быть под упаковкой
        if(window.matchMedia('(max-width: 768px)').matches){
            lineImg.src = 'images/mobile-arrow.png';
            lineArrow.style.width='100%'
            lineArrow.style.top = clientRectImgTablet.top + clientRectImgTablet.height + 9 +  pageYOffset + 'px';

            console.log('height' + clientRectImgTablet.height);
            console.log('pageYOffset' +( pageYOffset+ clientRectImgTablet.top) );
            console.log('tablet To ' + clientRectImgTablet.top);
            console.log('top' + lineArrow.style.top);
            
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
        // let clientRectImgTablet = imgTablet.getBoundingClientRect();

        // if(window.matchMedia('(max-width: 460px)').matches){
        //     console.log('460');
        //     headerArrowText.style.left = '20%';

        //     headerArrowText.style.top = clientRectImgTablet.top + clientRectImgTablet.height + pageYOffset+ 19 + 'px';
        //     return;
        // }

        // if(window.matchMedia('(max-width: 768px)').matches){
        //     console.log('768');
        //     headerArrowText.style.left = '20%';
        //     headerArrowText.style.top = clientRectImgTablet.top + clientRectImgTablet.height+ pageYOffset + 29 + 'px';
        //     return;
        // }

        // if(window.matchMedia('(max-width: 992px)').matches){
        //     headerArrowText.style.top = clientRectImgTablet.bottom + pageYOffset - 100 + 'px';
        //     return;
        // }

        let lineArrowCoord = parseInt(lineArrow.style.top) + lineArrow.getBoundingClientRect().height/3;
        console.log(lineArrowCoord);
        // headerArrowText.style.top = clientRectImgTablet.bottom + pageYOffset - 105 + 'px';
        headerArrowText.style.top = lineArrowCoord + 'px';
        textLeftPosition =  container.getBoundingClientRect().left + 15 + 'px';
        // headerArrowText.style.left = textLeftPosition; 
    }
}


let clue = document.querySelector('.ask-question__checkbox-question');
let icon = document.querySelector('.ask-question__question-icon');
icon.addEventListener('click', (e) => {
    clue.classList.toggle('active');
})
