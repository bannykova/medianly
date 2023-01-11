import headerMenuToggle from "./modules/header-menu-toggle";
import scrollMotion from "./modules/scroll-motion";

// Init header menu toggle
headerMenuToggle();

// Init scroll motion
window.addEventListener('scroll', scrollMotion);
window.addEventListener('load', scrollMotion);