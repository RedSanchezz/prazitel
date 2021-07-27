const navigationMenu = document.querySelector('.navigation-menu');
const clickedMenuBlock = document.querySelector('.navigation-menu__active-widnow-inner');


clickedMenuBlock.addEventListener('click', (e)=>{
    navigationMenu.classList.toggle('active');
    console.log('toggle');
})