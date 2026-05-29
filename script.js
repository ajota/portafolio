gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const tl = gsap.timeline();

  tl.to("#loader", {
    opacity: 0,
    duration: 1.2,
    delay: 3,
    ease: "power2.inOut",
    onComplete: () => {
      const loader = document.getElementById("loader");
      if (loader) loader.style.display = "none";
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

// MODAL LOGO
const logoBtn = document.getElementById("logo-btn");
const infoModal = document.getElementById("info-modal");
const modalClose = document.getElementById("modal-close");

const openModal = () => {
  if (!infoModal || !logoBtn) return;
  infoModal.classList.add("active");
  logoBtn.setAttribute("aria-expanded", "true");
};

const closeModal = () => {
  if (!infoModal || !logoBtn) return;
  infoModal.classList.remove("active");
  logoBtn.setAttribute("aria-expanded", "false");
};

if (logoBtn) logoBtn.addEventListener("click", openModal);
if (modalClose) modalClose.addEventListener("click", closeModal);
if (infoModal) {
  infoModal.addEventListener("click", (e) => {
    if (e.target === infoModal) closeModal();
  });
}

// MENU HAMBURGUESA
const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");
const menuClose = document.getElementById("menu-close");
const menuLinks = document.querySelectorAll(".menu-link");

const openMenu = () => {
  if (!sideMenu || !menuBtn) return;
  sideMenu.classList.add("active");
  menuBtn.setAttribute("aria-expanded", "true");
};

const closeMenu = () => {
  if (!sideMenu || !menuBtn) return;
  sideMenu.classList.remove("active");
  menuBtn.setAttribute("aria-expanded", "false");
};

if (menuBtn) menuBtn.addEventListener("click", openMenu);
if (menuClose) menuClose.addEventListener("click", closeMenu);
menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
