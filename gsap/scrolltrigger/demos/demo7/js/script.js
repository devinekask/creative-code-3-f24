const init = () => {
  //
  gsap.registerPlugin(ScrollTrigger);
  /*
    gsap.to(".square", {
      x: 700,
      duration: 3,
      scrollTrigger: {
        trigger: ".square",
        start: "top 70%",
        end: "bottom 50%",
        toggleClass: "white",
        markers: { fontSize: "25px", fontWeight: "bold" },
        scrub: 0.5, //true
        pin: true,
      },
    });*/

  gsap.to(".square", {
    //x: 700,
    duration: 3,
    scrollTrigger: {
      trigger: ".square2",
      start: "top 80%",
      end: "top 30%",
      toggleClass: "white",
      markers: { fontSize: "25px", fontWeight: "bold" },
      scrub: true,
      pin: ".square",
      pinSpacing: false, //set to true to see extra padding added
    },
  });

};
init();
