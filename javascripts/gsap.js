/* ----------------------------------------- Gsap animation added ---------------------------------------- */
gsap.from('.nav__items', {duration: 1, y: '-200%', delay: 2.5, ease: "elastic"})

gsap.from('.nav__item', {duration: 1, opacity: 0, delay: 3.5, stagger: .2})

gsap.from('.header__text', {duration: 2.5, x: '-100%', ease: "power2.out"})

gsap.fromTo('.btn', {opacity: 0, sacle: 0, rotation: 360}, {duration: .8, delay: 2.5, opacity: 1, sacle: 1, rotation: 0})

let count = 0;
const targets = document.querySelectorAll(".work__box");
gsap.set(targets, { x: '100%' });
gsap.set(targets[0], { x: '0' });

// Next button
function slideOneNext() {
gsap.fromTo(targets[count], { x: '0' }, { x: '-100%', duration: 1.2, zindex: 0 });
count = count < targets.length - 1 ? ++count : 0;
gsap.fromTo(targets[count], { x: '100%' }, { x: '0', delay: 0.4, duration: 1.2, zindex: 10  });
}
document.getElementById("nextButton").addEventListener("click", function() {
    slideOneNext();
});

// Previous button
function slideOnePrev() {
  gsap.fromTo(targets[count], { x: '0' }, { x: '100%', duration: 1.2, zindex: 0 });
  if (count < targets.length) {
      if (count > 0) {
        --count;
      } else {
        count = targets.length -1;
      }   
  }
  gsap.fromTo(targets[count], { x: '-100%' }, { x: '0', delay: 0.4, duration: 1.2, zindex: 10  });
}
document.getElementById("prevButton").addEventListener("click", function() {
  slideOnePrev();
});