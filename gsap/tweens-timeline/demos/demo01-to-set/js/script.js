const img = document.querySelector('.myImage');
const startAnimationBtn = document.querySelector('.startAnimationBtn');

const init = () => {
  console.log(gsap.version);
  startAnimationBtn.addEventListener('click', startAnimation);
}

const startAnimation = () => {
  //reset the image
  gsap.set(img, { x: 0, y: 0, rotation: 0, scale: 1 });
  //animate the image
  gsap.to(img, { duration: 2, x: 500, y: 200, rotation: 360, scale: 2 })
}

init();