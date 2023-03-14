const hamburger = document.querySelector("div.hamburger");
const headerMenu = document.querySelector("nav.bottom-menu");

hamburger.addEventListener('click', () => {
  headerMenu.classList.toggle('active')
  
  if (subMenuAboutUs.classList.contains('active')) subMenuAboutUs.classList.remove('active') 
  if (subMenuServices.classList.contains('active')) subMenuServices.classList.remove('active')
  if (subMenuServicesAl) subMenuServicesAl.classList.remove('active')
  if (subMenuServicesRe) subMenuServicesRe.classList.remove('active')
  if (subMenuServicesEs) subMenuServicesEs.classList.remove('active')
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

const servicesAutolawyer = document.querySelector("#li-services-autolawyer");
const subMenuServicesAl = document.querySelector("#li-services-autolawyer ul")

servicesAutolawyer.addEventListener('click', () => {
  subMenuServicesAl.classList.toggle('active')
});

const servicesReparation = document.querySelector("#li-services-reparation");
const subMenuServicesRe = document.querySelector("#li-services-reparation ul");

servicesReparation.addEventListener('click', () => {
  subMenuServicesRe.classList.toggle('active')
});

const servicesEstimate = document.querySelector("#li-services-estimate");
const subMenuServicesEs = document.querySelector("#li-services-estimate ul");

servicesEstimate.addEventListener('click', () => {
  subMenuServicesEs.classList.toggle('active')
});

const clickedLink = () => ( false );