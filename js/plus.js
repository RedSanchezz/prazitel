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

