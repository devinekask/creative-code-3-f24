let count = 0;
const maxPlays = 3;
let tl;
const init = () => {

  console.log(gsap.version);
  gsap.set(".banner", { autoAlpha: 1 });

  tl = gsap.timeline({ repeat: -1 });

  tl.from("h1", { opacity: 0 })
    .from(".item", { opacity: 0, scale: 0.5, stagger: 0.2 })
    .from(".footer", { width: 0 }, "+=0.3")
    .call(checkCount, [], "+=1")
    .to("h1, .item, .footer", { opacity: 0, stagger: 0.1 })

}

const checkCount = () => {

  if (++count === maxPlays) {
    tl.pause();
    gsap.to(".footer", { backgroundColor: "green", yoyo: true, repeat: 4, duration: 0.2 })
  }
}
init();