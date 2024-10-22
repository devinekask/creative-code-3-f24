const init = () => {
  //
  gsap.registerPlugin(ScrollTrigger);
  //using a number as start position

  /*gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
      trigger: ".square",
      start: 400, // animation starts when viewport scrolls by exactly 400px
      markers: true, //Dev help
    },
  });*/

  /*
    //using a string as start position
    gsap.to(".square", {
      x: 700,
      duration: 3,
      scrollTrigger: {
        trigger: ".square",
        start: "top center", // animation starts when top of trigger meets center of viewport
        markers: {
          startColor: "grey",
          endColor: "white",
          fontSize: "25px",
          fontWeight: "bold",
        },
      },
    });*/
  /*
    //using a relative value as start position
    gsap.to(".square", {
      x: 700,
      duration: 3,
      scrollTrigger: {
        trigger: ".square",
        start: "top bottom-=300", // animation starts when top of trigger hits 300px above the bottom of viewport
        markers: true,
      },
    });*/
  /*
    //using a percentage as start position
    gsap.to(".square", {
      x: 700,
      duration: 3,
      scrollTrigger: {
        trigger: ".square",
        start: "top 20%", // animation starts when top of trigger hits 20% down the top of the viewport
        markers: true,
      },
    });
    */
  // using a functon as start position
  gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
      trigger: ".square",
      start: (self) => {
        const hsquare = document.querySelector(".square").offsetHeight;
        return `30% ${hsquare}`;
      },
      markers: true,
    },
  });

};
init();
