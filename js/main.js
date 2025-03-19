'use strict';

// const swiper = new Swiper('.swiper', {
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false
//     },
//     loop: true,

//     // If we need pagination
//     // pagination: {
//     //     el: '.swiper-pagination',
//     // },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },


// });

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        autoplay: { delay: 4000 },
        loop: true,
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    });

    // nav toggler
    const nav = document.querySelector('.nav')
    const toggler = document.querySelector('.nav__tog')

    function showMenu() {
    nav.classList.toggle('collapse')
    }

    toggler.addEventListener('click', showMenu)

     // Close mobile menu on link click
     const navLinks = document.querySelectorAll(".nav__link");
     navLinks.forEach(link => {
         link.addEventListener("click", () => {
             nav.classList.toggle("collapse");
         });
        })
});