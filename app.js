gsap.registerPlugin(ScrollTrigger);
gsap.to(".name", {
    y: -100,

    duration: 2,
    scrollTrigger: {
        trigger: ".name",
        start: 2,
        end:300,
        markers:false,
        scrub:1,
        toggleActions:"restart none reverse none"
    
    }
})

gsap.to(".snap", {
    x: 100,

    duration: 0.1,
    scrollTrigger: {
        trigger: ".snap",
        start: 150,
        end:800,
        markers:false,
        scrub:1,
        toggleActions:"restart none reverse none"
    }
})

gsap.to(".details", {
    x: -100,

    duration: 0.1,
    scrollTrigger: {
        trigger: ".details",
        start: 150,
        end:800,
        markers:false,
        scrub:1,
        toggleActions:"restart none reverse none"
    }
})

gsap.to(".specs", {
    x: -100,

    duration: 0.1,
    scrollTrigger: {
        trigger: ".snap",
        start: 150,
        end:1080,
        markers:false,
        scrub:1,
        toggleActions:"restart none reverse none"
    }
})

gsap.to(".rog", {
    x: 100,

    duration: 0.1,
    scrollTrigger: {
        trigger: ".details",
        start: 150,
        end:1080,
        markers:false,
        scrub:1,
        toggleActions:"restart none reverse none"
    }
})

gsap.to(".tag", {
    y: -100,

    duration: 0.1,
    scrollTrigger: {
        trigger: ".tag",
        start: 500,
        end:900,
        markers:false,
        scrub:1,
        toggleActions:"restart none reverse none"
    
    }
})