const dude = document.querySelector('.dude');

let tween;

const init = () => {
  console.log(gsap.version);
  tween = gsap.to('.dude', { transformOrigin: 'center center', rotation: -20, repeat: 1, yoyo: true, duration: 0.3 })

  dude.addEventListener('click', (e) => {
    if (tween.isActive()) return;
    const rect = dude.getBoundingClientRect();
    const originX = e.clientX - rect.left;
    const originY = e.clientY - rect.top;
    //set the transformOrigin of the tween to the clicked position
    tween.vars.transformOrigin = `${originX}px ${originY}px`;
    console.log(tween.vars.transformOrigin);
    //restart the tween and invalidate the cache (to force the tween to recalculate the transformOrigin)
    tween.invalidate().restart();
  });

}

init();