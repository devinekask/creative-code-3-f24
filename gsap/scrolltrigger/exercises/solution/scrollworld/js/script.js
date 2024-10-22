const changetitle = (self) => {
  const val = Math.round((self.progress) * 100);
  if (val) {
    document.querySelector(".subtitle").innerHTML = `${val}% explored`;
  } else {
    document.querySelector(".subtitle").innerHTML = `Explore Scrollworld`;
  }
}

const panelScrollAnimation = () => {
  const panels = gsap.utils.toArray(".explore .panel");
  const $explore = document.querySelector(".explore");
  let scrollTween = gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
      onUpdate: changetitle,
      trigger: $explore,
      start: "top top",
      end: () => {
        return "+=" + ($explore.offsetWidth)
      },
      pin: $explore,
      scrub: 1,
    }
  })
  panels.forEach(element => {
    const title = element.querySelector("h1");
    const image = element.querySelector("img");
    //
    let tl = gsap.timeline()
      .from(title, {
        opacity: 0,
        x: "-50",
        duration: 0.5
      })
      .from(image, {
        opacity: 0,
        y: "+30",
        duration: 0.5
      })
    ScrollTrigger.create({
      trigger: element,
      containerAnimation: scrollTween,
      animation: tl,
      start: "left 60%",
      end: "left 30%",
      scrub: 1
    })
  })
}
const heroScrollAnimation = () => {

  let bgTween = gsap.to(".hero", {
    filter: "brightness(0)",
    ease: "sine.in",
    duration: 2
  })

  ScrollTrigger.create({
    trigger: ".hero",
    start: "bottom 90%",
    end: "bottom 10%",
    toggleActions: "play none none reverse",
    animation: bgTween,
    scrub: true
  })
}

const init = () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });

  heroScrollAnimation();
  panelScrollAnimation();
}
init();