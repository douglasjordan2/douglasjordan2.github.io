document.querySelector('.header-top .btn').addEventListener('click', () => {
  document.querySelector('#nav').style.top = "0";
  TweenMax.to('#nav', 0.5, {opacity:0.9});

  setTimeout(() => {
    for(let i = 1; i <= document.querySelectorAll('nav a').length; i++) {
      TweenMax.to(`#a${i}`, 0.5, {opacity: 1, paddingRight: 0, delay: (i / 5)});
    }
  }, 200)

  TweenMax.to('.header-top', 1, {opacity:0});
});

document.querySelector('#hide-nav').addEventListener('click', () => {
  for(let i = 1; i <= document.querySelectorAll('nav a').length; i++) {
    TweenMax.to(`#a${i}`, 0.5, {opacity:0, paddingBottom: '25px', marginTop: '50px', delay: (i / 8)})
  }

  TweenMax.to('#nav', 0.5, {top: '-100vh', delay: 0.9});

  TweenMax.to('.header-top', 1, {opacity:1, delay:1});

  setTimeout(() => {
    document.querySelectorAll('nav a').forEach(a => {
      a.style.paddingBottom = "0";
      a.style.paddingRight = "200px";
      a.style.marginTop = "0";
    });

    document.querySelector('#nav').style.opacity = "0";
  }, 2000)
})