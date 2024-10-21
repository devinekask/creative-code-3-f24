
const init = () => {

  console.log(gsap.version);

  gsap.to("li", {
    duration: 1,
    scale: 0,
    ease: "power4.inOut",
    repeat: -1,
    yoyo: true,
    stagger: {
      each: 0.1,
      from: "random",
      grid: "auto",
      amount: 1
    }
  }
  );


}

init();