import formHandler from "./modules/form-handler";
import headerMenuToggle from "./modules/header-menu-toggle";
import scrollMotion from "./modules/scroll-motion";

// Init header menu toggle
headerMenuToggle();

formHandler('form-contact');

// Init mouse depth
// window.addEventListener('mousemove', mouseDepth);

// Init scroll motion
window.addEventListener('scroll', scrollMotion);
window.addEventListener('load', scrollMotion);