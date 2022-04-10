/* ----------------------------------------- Gsap animation added ---------------------------------------- */
gsap.from('.nav__items', {duration: 1, y: '-200%', delay: 2.5, ease: "elastic"})

gsap.from('.nav__item', {duration: 1, opacity: 0, delay: 3.5, stagger: .2})

gsap.from('.header__text', {duration: 2.5, x: '-100%', ease: "power2.out"})

gsap.fromTo('.btn', {opacity: 0, sacle: 0, rotation: 360}, {duration: .8, delay: 2.5, opacity: 1, sacle: 1, rotation: 0})

/* ----------------------------------------- Carousel ---------------------------------------- */
let IndiCount = 0;
let TeamCount = 0;
const individualtargets = document.querySelectorAll(".work__box");
const teamtargets = document.querySelectorAll(".project__box");

function initSetting(targets) {
  gsap.set(targets, { x: '100%' });
  gsap.set(targets[0], { x: '0' });
}

function init() {
  initSetting(individualtargets);
  initSetting(teamtargets);
}
init();

// Next button
function slideOneNext(targets, count) {

gsap.fromTo(targets[count], { x: '0' }, { x: '-100%', duration: 1.2, zindex: 0 });
count = count < targets.length - 1 ? ++count : 0;
gsap.fromTo(targets[count], { x: '100%' }, { x: '0', delay: 0.4, duration: 1.2, zindex: 10  });
}

document.getElementById("IndiNextButton").addEventListener("click", function() {
    slideOneNext(individualtargets, IndiCount);
});
document.getElementById("TeamNextButton").addEventListener("click", function() {
  slideOneNext(teamtargets, TeamCount);
});


// Previous button
function slideOnePrev(targets, count) {
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

document.getElementById("IndiPrevButton").addEventListener("click", function() {
  slideOnePrev(individualtargets, IndiCount);
});
document.getElementById("TeamPrevButton").addEventListener("click", function() {
  slideOnePrev(teamtargets, TeamCount);
});