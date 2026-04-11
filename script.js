gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.to(".logo-fill-box", {
        height: "100%",
        duration: 4, 
        ease: "none"
    });

    tl.to("#loader", {
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
            document.getElementById('loader').style.display = 'none';
        }
    });

    tl.from(".home-bg", {
        opacity: 0,
        scale: 1.05, 
        duration: 1.5,
        ease: "power2.out"
    }, "-=0.8");

    tl.from(".scroll-down-center", {
        opacity: 0,
        y: 20, 
        duration: 1,
        ease: "power2.out"
    }, "-=1");

    tl.from(".carrusel-corner", {
        opacity: 0,
        y: 30, 
        duration: 1.5,
        ease: "power3.out"
    }, "-=0.8");

    tl.to(".top-nav", {
        opacity: 1,
        duration: 1
    }, "-=1.5");
});

gsap.from(".about-container", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 75%"
    },
    opacity: 0,
    y: 80,
    duration: 1.5,
    ease: "power3.out"
});