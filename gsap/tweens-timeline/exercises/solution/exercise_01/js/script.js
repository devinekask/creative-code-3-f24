const init = () => {
  let tl = gsap.timeline({
    repeat: -1
  })
  tl.to('.ball', {
    transformOrigin: '109% 50%',
    rotation: gsap.utils.wrap([180, -180]),
    stagger: {
      each: 0.3
    }
  })
  tl.to('#allBalls', {
    x: -50,
    duration: 0.3,
    ease: 'linear'
  }, 0)
}
init();