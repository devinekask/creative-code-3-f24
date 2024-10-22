const init = () => {
  //
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
      trigger: ".square2",
    },
  });
};
init();
