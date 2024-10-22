const init = () => {
  //
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
      trigger: ".square",
      start: "top 30%",
      end: "center 20%",
      toggleClass: "white",
      markers: { fontSize: "25px", fontWeight: "bold" },
      toggleActions: "play pause resume reset",
    },
  });
};
init();
