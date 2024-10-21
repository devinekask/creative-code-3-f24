const init = () => {

  const allCircles = gsap.utils.toArray('circle');

  gsap.set('svg', {
    visibility: 'visible'
  })

  gsap.from(allCircles, {
    alpha: 0,
    duration: gsap.utils.random(1, 3),
    rotation: gsap.utils.wrap([360, -360]),
    ease: 'Power3.easeOut',
    transformOrigin: '250% 150%',
    scale: 0,
    repeat: -1,
    yoyo: true,
    yoyoEase: 'Power3.easeIn',
    y: -360,
    stagger: {
      each: 0.006
    }
  })


}
init();