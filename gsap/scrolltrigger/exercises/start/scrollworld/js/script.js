const init = () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });
}
init();