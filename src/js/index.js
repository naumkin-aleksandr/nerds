// import jQuery from "jquery";
// import popper from "popper.js";
// import bootstrap from "bootstrap";

let benefitBtn1 = document.querySelector('#benefit__btn-1');
let benefitBtn2 = document.querySelector('#benefit__btn-2');
let benefitBtn3 = document.querySelector('#benefit__btn-3');
let benefitBox1 = document.querySelector('#benefit__box-1');
let benefitBox2 = document.querySelector('#benefit__box-2');
let benefitBox3 = document.querySelector('#benefit__box-3');

function toSwitchBlockBenefit ( btnSelected, btnInactiveOne, btnInactiveTwo, slideShow, slideHideOne, slideHideTwo) {
    btnSelected.classList.add('benefit__btn_selected');
    btnInactiveOne.classList.remove('benefit__btn_selected');
    btnInactiveTwo.classList.remove('benefit__btn_selected');

    slideShow.classList.remove('none');
    slideHideOne.classList.add('none');
    slideHideTwo.classList.add('none');

}

if (benefitBtn1) benefitBtn1.addEventListener('click', ()=> toSwitchBlockBenefit(benefitBtn1, benefitBtn2, benefitBtn3, benefitBox1, benefitBox2, benefitBox3) );

if (benefitBtn2) benefitBtn2.addEventListener('click', ()=> toSwitchBlockBenefit(benefitBtn2, benefitBtn1, benefitBtn3, benefitBox2, benefitBox1, benefitBox3) );

if (benefitBtn3) benefitBtn3.addEventListener('click', ()=> toSwitchBlockBenefit(benefitBtn3, benefitBtn1, benefitBtn2, benefitBox3, benefitBox1, benefitBox2) );



let contactsBtn =document.querySelector('#contacts__btn');
let windowForConnections = document.querySelector('#relation');
let windowForConnectionsBtnClose = document.querySelector('#relation__btn-close')

contactsBtn.addEventListener('click', ()=> windowForConnections.classList.remove('none') );
windowForConnectionsBtnClose.addEventListener('click', ()=> windowForConnections.classList.add('none'));

if (document.querySelector('.shop') ) {
    document.querySelector('#shopLink').classList.add('nav__item_selected');
}