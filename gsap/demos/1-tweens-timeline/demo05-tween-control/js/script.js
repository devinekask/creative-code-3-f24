const button = document.querySelector('.button');
const bg = document.querySelector('.bg');

const init = () => {
  console.log(gsap.version);
  const tween = gsap.fromTo(bg, { duration: 0.2, scale: 0 }, { duration: 0.2, scale: 1, ease: 'circ', paused: true });

  button.addEventListener('mouseenter', () => {
    tween.restart();
  });
}

init();