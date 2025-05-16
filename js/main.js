document.addEventListener("DOMContentLoaded", () => {
  // Initialize Swiper
  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

  // Navigation toggle
  const navToggler = document.querySelector(".nav__tog")
  const navList = document.querySelector(".nav__list")

  navToggler.addEventListener("click", () => {
    navList.classList.toggle("active")
    document.body.classList.toggle("no-scroll")
  })

  // Close mobile menu on link click
  const navLinks = document.querySelectorAll(".nav__link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("active")
      document.body.classList.remove("no-scroll")
    })
  })

  // Remove header scroll effect since navbar is now static
  // const header = document.querySelector(".header")
  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > 50) {
  //     header.classList.add("scrolled")
  //   } else {
  //     header.classList.remove("scrolled")
  //   }
  // })

  // Back to top button
  const backToTopButton = document.querySelector(".back-to-top")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("active")
    } else {
      backToTopButton.classList.remove("active")
    }
  })

  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#") {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          })
        }
      }
    })
  })
})
