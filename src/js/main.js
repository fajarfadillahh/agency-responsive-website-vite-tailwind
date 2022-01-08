import "../css/index.css";

// ==== SHOW HEADER MENU ====
const showMenu = (menuId, toggleId, closeId) => {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);
  const close = document.getElementById(closeId);

  if (menu && toggle && close) {
    toggle.onclick = () => {
      menu.classList.add("show-menu");
    };
    close.onclick = () => {
      menu.classList.remove("show-menu");
    };
  }
};
showMenu("header-menu", "header-toggle", "header-close");

// ===== STICKY HEADER =====
const scrollY = window.pageYOffset;
function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY >= 10
    ? header.classList.add("sticky-header")
    : header.classList.remove("sticky-header");
}
window.addEventListener("scroll", stickyHeader);

// ===== SCORLLUP SECTION =====
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY
    ? scrollup.classList.add("scroll-active")
    : scrollup.classList.remove("scroll-active");
}
window.addEventListener("scroll", scrollUp);

// ===== ACCORDION FEATURES SECTION =====
const accordionItems = document.querySelectorAll(".features__accordion-item");
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".features__accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".features__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

// ===== SCROLL SECTION ACTIVE MENU =====
const sections = document.querySelectorAll("section[id]");

function sectionActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.header__nav a[href*= ${sectionId} ]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.header__nav a[href*= ${sectionId} ]`)
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", sectionActive);
