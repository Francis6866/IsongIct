'use strict';
const nav = document.querySelector('.nav')
const toggler = document.querySelector('.nav__tog')

function showMenu() {
    nav.classList.toggle('collapse')
}

toggler.addEventListener('click', showMenu)



const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    loop: true,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});