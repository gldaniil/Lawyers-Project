const hamburger = document.querySelector("div.hamburger");
const headerMenu = document.querySelector("nav.bottom-menu");

hamburger.addEventListener('click', () => {
  headerMenu.classList.contains('active')
    ? headerMenu.classList.remove('active')
    : headerMenu.classList.add('active')
});

const aboutUs = document.querySelector("li#about-us");
const subMenuAboutUs = document.querySelector("li#about-us ul");

aboutUs.addEventListener('click', () => {
  subMenuAboutUs.classList.contains('active')
    ? subMenuAboutUs.classList.remove('active')
    : subMenuAboutUs.classList.add('active')
});

const clickedLink = () => ( false );