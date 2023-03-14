const hamburger = document.querySelector("div.hamburger");
const headerMenu = document.querySelector("nav.bottom-menu");

hamburger.addEventListener('click', () => {
  headerMenu.classList.toggle('active')
  
  if (subMenuAboutUs.classList.contains('active')) subMenuAboutUs.classList.remove('active') 
  if (subMenuServices.classList.contains('active')) subMenuServices.classList.remove('active')
});

const aboutUs = document.querySelector("#li-about-us");
const subMenuAboutUs = document.querySelector("#li-about-us ul");

aboutUs.addEventListener('click', () => {
  subMenuAboutUs.classList.toggle('active')
});

const services = document.querySelector("#li-services");
const subMenuServices = document.querySelector("#li-services ul");

services.addEventListener('click', () => {
  subMenuServices.classList.toggle('active')
})

const clickedLink = () => ( false );