/* ----------------------------------------- Gsap animation added ---------------------------------------- */
gsap.from('.nav__items', {duration: 1, y: '-200%', delay: 2.5, ease: "elastic"})

gsap.from('.nav__item', {duration: 1, opacity: 0, delay: 3.5, stagger: .2})

gsap.from('.header__text', {duration: 2.5, x: '-100%', ease: "power2.out"})

gsap.fromTo('.btn', {opacity: 0, scale: 0, rotation: 360}, {duration: .8, delay: 2.5, opacity: 1, scale: 1, rotation: 0})

/* ----------------------------------------- Carousel ---------------------------------------- */
const inditargets = document.querySelectorAll(".indi_box");
const teamtargets = document.querySelectorAll(".team_box");

function indi (targets, type) {
  let count = 0;

  const currentId = document.getElementById(`${type}-current`);

  gsap.set(targets, { x: '100%' });
  gsap.set(targets[0], { x: '0' });
  currentId.innerHTML = `( 1 / ${targets.length} )`;

  // Next button
  function slideOneNext() {
    // console.log(count);
    gsap.fromTo(targets[count], { x: '0' }, { x: '-100%', duration: 1.2 });
    if (count == targets.length -1 ) {
      count = 0;
      } else {
        count = count + 1;
      }   
    gsap.fromTo(targets[count], { x: '100%' }, { x: '0', delay: 0.4, duration: 1.2 });
    currentId.innerHTML = `( ${count+1} / ${targets.length} )`;
  }

  document.getElementById(`${type}NextButton`).addEventListener("click", slideOneNext);

  // Previous button
  function slideOnePrev() {
    // console.log(count);
    gsap.fromTo(targets[count], { x: '0' }, { x: '100%', duration: 1.2 });
    if (count < targets.length) {
        if (count > 0) {
          count = count -1;
        } else {
          count = targets.length -1;
        }   
    }
    gsap.fromTo(targets[count], { x: '-100%' }, { x: '0', delay: 0.4, duration: 1.2 });
    currentId.innerText = `( ${count+1} / ${targets.length} )`;
  }

  document.getElementById(`${type}PrevButton`).addEventListener("click", slideOnePrev);
}

indi (inditargets, "indi");
indi (teamtargets, "team");










// document.getElementById("TeamNextButton").addEventListener("click", function() {
//   slideOneNext(teamtargets, TeamCount);
// });
// const teamtargets = document.querySelectorAll(".project__box");
// document.getElementById("TeamPrevButton").addEventListener("click", slideOnePrev);