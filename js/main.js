"use strict";

function init() {
  let approachSections = document.querySelectorAll('.approach');

}

window.addEventListener("load", init);

gsap.ticker.lagSmoothing(0)
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000);
});

gsap.to('.stats', {
  y: 0,
  scrollTrigger: {
    trigger: '.posts',
    start: 'center center',
    end: 'center center',
    scrub: true,
  }
})

gsap.to('.works', {
  scrollTrigger: {
    trigger: '.works',
    start: 'clamp(top bottom)',
    end: 'top top',
    toggleActions: 'play none none none',
    // pin: true,
    scrub: 1,
  },
  x: () => -1 * (document.querySelector('.works').scrollWidth - window.innerWidth),
  ease: "none"
});


gsap.to('.video', {
  scrollTrigger: {
    trigger: '.video',
    start: 'center 100%',
    end: 'top top',
    toggleActions: 'play none none none',
    // pin: true,
    scrub: true,
    // markers: true
  },
  // scale: "1.4",
  width: "100%"
});


if ( document.querySelector('.hero h2') ) {
  let splitText = new SplitText(".hero h2", { type: "words,chars" });
  let chars = splitText.chars;

  let tl = gsap.timeline();

  tl.from(chars, {
    duration: 0.5,
    // opacity: 0,
    // scale: 0,
    y: 160,
    // rotationX: 180,
    // transformOrigin: "0% 50% -50",
    ease: "Power3.easeOut",
    stagger: 0.03
  });

}

gsap.from('.approach h2', {
  // y: 150,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: '.approach',
    // start: 'top 50%'
  },
})

gsap.from('.stat', {
  y: 100,
  duration: 0.4,
  scrollTrigger: {
    trigger: '.stats h3',
  },
  stagger: 0.2
});

document.querySelectorAll('.fadeIn').forEach((el, index) => {
  gsap.from(el, {
    y: 150,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: 'top bottom'
    },
  })
});

document.querySelector(".menu-link").addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.hamburger').classList.toggle('open');
  document.querySelector(".topbar nav").classList.toggle("open");
  document.querySelector('html').classList.toggle('no-scroll');

  if (document.querySelector('html').classList.contains('no-scroll')) {
    lenis.stop();
  } else {
    lenis.start();
  }

});