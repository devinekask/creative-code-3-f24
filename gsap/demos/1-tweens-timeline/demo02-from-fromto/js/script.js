const img = document.querySelector('.myImage');
const startAnimationBtn = document.querySelector('.startAnimationBtn');

const init = () => {
  console.log(gsap.version);
  startAnimationBtn.addEventListener('click', startAnimation);
}

const startAnimation = () => {
  //animate the image
  gsap.from(img, { duration: 2, x: 500, y: 200, rotation: 360, scale: 2, yoyo: true, repeat: 2 });

  //gsap.fromTo(img, { x: 0, y: 0, rotation: 0, scale: 1 }, { duration: 2, x: 500, y: 200, rotation: 360, scale: 2 });

}


init();