AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: -100,
  delay: 500,
  duration: 400,
  easing: 'ease',
  once: true,
  mirror: true,
  anchorPlacement: 'bottom-bottom',
});

const logo = document.querySelector('.logo .home');
const slogan = document.querySelector('.logo h1');
const overlays=document.querySelectorAll('.overlay');

window.addEventListener('scroll', () => {
  document.querySelector('main').style.marginTop = "30vw";
  logo.classList.add('fade-up');
  if(Array.from(logo.classList).includes('fade-down')) {
    logo.classList.remove('fade-down');
  }
  
  return (() => {
    if(window.scrollY < 1) {
      logo.classList.add('fade-down');
      logo.classList.remove('fade-up');
      overlays[0].classList.add('slide-up')
    }

    if(window.scrollY < 60) {
      slogan.style.opacity = '1';
      slogan.style.transition = 'opacity 1s ease-out'
    } else {
      slogan.style.opacity = '0'
    }
  })();
});