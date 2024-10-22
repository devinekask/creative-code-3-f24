const init = () => {
  //
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".square", {
    x: 700,

    scrollTrigger: {
      trigger: ".square",
      start: "top 70%",
      end: "bottom 20%",
      toggleClass: "white",
      markers: { fontSize: "25px", fontWeight: "bold" },
      scrub: 0.3
    },
  });
};
init();
