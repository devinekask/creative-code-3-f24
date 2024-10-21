const svgBlocks = gsap.utils.toArray(".hero div svg");

const init = () => {

  gsap.set(svgBlocks, {
    visibility: "visible"
  });




}
init();