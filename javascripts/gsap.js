/* ----------------------------------------- Gsap animation added ---------------------------------------- */
gsap.from('.nav__items', {duration: 1, y: '-100%', delay: 2.5, ease: "elastic"})

gsap.from('.nav__item', {duration: 1, opacity: 0, delay: 3.5, stagger: .2})

gsap.from('.header__text', {duration: 2.5, x: '-100%', ease: "power2.out"})