const init = () => {
  let tl = gsap.timeline({
    repeat: -1
  })
  tl.to('.ball', {
    transformOrigin: 'center right',
    rotation: 180,
    stagger: .5
  })
  tl.to('.ball', {
    x: "-100%",
  }, "<")
}
init();