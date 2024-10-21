
const maxPlays = 3;

const init = () => {

  console.log(gsap.version);
  gsap.set(".banner", { autoAlpha: 1 });

  const tl = gsap.timeline({ repeat: -1 });

  tl.from("h1", { opacity: 0 })
    .from(".item", { opacity: 0, scale: 0.5, stagger: 0.2 })
    .from(".footer", { width: 0 }, "+=0.3")
    .add("resolve")
    .to("h1, .item, .footer", { opacity: 0, stagger: 0.1 }, "+=1")
    .add("end")

  const master = gsap.timeline()
    .add(tl.tweenTo("end", { repeat: maxPlays - 2 }))
    .add(tl.tweenFromTo(0, "resolve"))
    .to(".footer", { backgroundColor: "green", yoyo: true, repeat: 4, duration: 0.5 })
}

init();