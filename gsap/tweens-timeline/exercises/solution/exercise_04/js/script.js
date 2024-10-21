const svgBlocks = gsap.utils.toArray(".hero div svg");

const init = () => {

  gsap.set(svgBlocks, {
    visibility: "visible"
  });

  /*
  eerst kleurvlakken inkomen
   */
  const bgShapes = gsap.utils.toArray(".bg")
  console.log(bgShapes);
  const tl = gsap.timeline();
  tl.from(bgShapes, {

    duration: .7,
    height: 0,
    scaleY: 0,
    stagger: {
      each: 0.2
    },
    ease: "expo.out"
  })
  tl.from("#oog", {
    rotate: 180,
    scale: 1.5,
    transformOrigin: "50% 50%",
    ease: "expo.out",
    duration: 1.3
  }, 0)

  tl.from(".bar", {
    y: 50,
    alpha: 0,
    ease: "expo.out",
    duration: 0.3,
    stagger: {
      each: 0.5
    }

  }, 0)

  tl.from(".circle_left", {
    transformOrigin: "50% 50%",
    rotate: 90,
    scale: 0,
    stagger: {
      each: 0.2
    }
  }, 0.5)

  tl.from(".windowbutton", {
    alpha: 0,
    stagger: {
      each: 0.1
    },
    duration: 0.3,

  }, 0.3)

  tl.from(".cross", {
    alpha: 0,
    transformOrigin: "50% 50%",
    scale: 0,
    duration: 0.1,
    stagger: {
      each: 0.4
    }
  }, 0.5)


  tl.to(".blueiris", {
    scale: 1.5,
    transformOrigin: "50% 50%",
    repeat: -1,
    yoyo: true,
    duration: 0.4,
    ease: "sine.in"

  }, 0)

  tl.to("#oog", {
    rotate: "+=90",
    duration: 1.3,
    delay: 3,
    repeatDelay: 2.6, /* moet een veelvoud van duration zijn anders  bug */
    repeat: -1,
    repeatRefresh: true,
    ease: "expo.out"
  })



  tl.from('.dots.blue path', {
    alpha: 0,
    scale: 0,
    transformOrigin: "50% 50%",
    stagger: {
      each: 0.010
    },
  }, 0.5)

  tl.from('.dots.orange path', {
    alpha: 0,
    scale: 0,
    transformOrigin: "50% 50%",
    stagger: {
      each: 0.010
    }
  }, 0.7)

  tl.from("#creative_bg", {
    scaleX: 0,
    ease: "expo.out"
  }, 0.7)

  tl.from("#CREATIVE", {
    x: -50,
    transformOrigin: "100% 50%",
    ease: "expo.out"
  }, 0.7)

  tl.from("#coding_bg", {
    scaleX: 0,
    ease: "expo.out"
  }, 0.9)

  tl.from("#CODING", {
    x: -100,
    alpha: 0,
    ease: "expo.out",
    transformOrigin: "100% 50%",

  }, 1.0)
  tl.from("#studio_bg", {
    scaleX: 0,
    ease: "expo.out"
  }, 1.1)

  tl.from("#STUDIO", {
    x: -100,
    alpha: 0,
    ease: "expo.out",
    transformOrigin: "100% 50%",

  }, 1.2)

  tl.from("#locationpointer", {
    alpha: 0
  }, 1)

  tl.from("#Kortrijk", {
    alpha: 0
  }, 1.3)

  tl.from("#see_our_work", {
    alpha: 0
  }, 1.5)

  tl.from("#head", {
    x: -400,
    ease: "expo.out",
  }, 1.5)

  tl.from("#body", {
    y: 400,
    ease: "expo.out",
  }, 1.8)

  tl.to("#head", {
    x: 280,
    repeat: -1,
    repeatDelay: 4,
    ease: "expo.in",
    yoyo: true
  }, 3)

  tl.from("#mouth path", {

    transformOrigin: "50% 50%",
    rotate: -45,
    stagger: {
      each: 0.1
    },
    ease: "expo.out",
    repeatDelay: 3,
    yoyo: true,
    repeat: -1,
  }, 3)

  tl.from(".eyeball", {
    transformOrigin: "50% 50%",
    scale: gsap.utils.random(0.3, 1),
    repeat: -1,
    repeatDelay: 3,
    ease: "expo.out",
    yoyo: true,

  })

  tl.from(".eyewhite", {
    transformOrigin: "50% 50%",
    scaleY: gsap.utils.random(0.5, 1.0),
    repeat: -1,
    repeatDelay: 3,
    yoyo: true,
    repeatRefresh: true,
  }, 0)



}
init();