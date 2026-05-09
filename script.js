gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const tl = gsap.timeline();

  tl.to(".logo-fill-box", {
    height: "100%",
    duration: 4,
    ease: "none",
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 1.2,
    ease: "power2.inOut",
    onComplete: () => {
      document.getElementById("loader").style.display = "none";
    },
  });

  tl.from(
    ".home-bg",
    {
      opacity: 0,
      scale: 1.05,
      duration: 1.5,
      ease: "power2.out",
    },
    "-=0.8",
  );

  tl.from(
    ".scroll-down-center",
    {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
    },
    "-=1",
  );

  tl.from(
    ".carrusel-corner",
    {
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: "power3.out",
    },
    "-=0.8",
  );
});

gsap.from(".about-container", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 75%",
  },
  opacity: 0,
  y: 80,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from(".projects-container", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 75%",
  },
  opacity: 0,
  y: 80,
  duration: 1.5,
  ease: "power3.out",
});
// --- MODAL INFO (logo) ---
const logoBtn = document.getElementById("logo-btn");
const infoModal = document.getElementById("info-modal");
const modalClose = document.getElementById("modal-close");

logoBtn.addEventListener("click", () => {
  infoModal.classList.add("active");
});

modalClose.addEventListener("click", () => {
  infoModal.classList.remove("active");
});

infoModal.addEventListener("click", (e) => {
  if (e.target === infoModal) {
    infoModal.classList.remove("active");
  }
});

// --- SIDE MENU ---
const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");
const menuClose = document.getElementById("menu-close");
const menuLinks = document.querySelectorAll(".menu-link");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

menuClose.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    infoModal.classList.remove("active");
    sideMenu.classList.remove("active");
  }
});
