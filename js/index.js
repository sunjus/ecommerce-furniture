const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navBar = document.querySelector(".nav");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

//Fix Nav
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

//Scroll To
const links = [...document.querySelectorAll(".scroll-link")];

links.map((link) => {
  if (!link) return;
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const el = document.getElementsById(id);
    let position = el.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  });
});
