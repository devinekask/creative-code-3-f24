const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');

const init = () => {

  const tl = gsap.timeline({ paused: true, onComplete: completeHandler, onCompleteParams: ["complete"] });

  tl.to(red, { duration: 1, x: 200 });
  tl.to(green, { duration: 1, x: 300 });
  tl.to(blue, { duration: 1, x: 400 }, "<"); // position parameter

  //https://gsap.com/docs/v3/Plugins/GSDevTools/
  GSDevTools.create({ animation: tl });
}

//callback function
const completeHandler = (text) => {
  console.log(text);
}

init();