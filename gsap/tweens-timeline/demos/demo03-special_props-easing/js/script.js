const img = document.querySelector('.myImage');
const startAnimationBtn = document.querySelector('.startAnimationBtn');

const init = () => {
  console.log(gsap.version);
  startAnimationBtn.addEventListener('click', startAnimation);
}

const startAnimation = () => {
  //animate the image
  //yoyo in combination with repeat will make the animation go back and forth
  gsap.to(img, { duration: 2, x: 500, y: 200, rotation: 360, repeat: 2, yoyo: true, scale: 2, ease: "elastic.out(1, 0.3)" });
}


init();