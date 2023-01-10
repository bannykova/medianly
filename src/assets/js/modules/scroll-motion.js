export default function scrollMotion() {
    const motionSection = document.querySelectorAll('[data-motion]');

    if (motionSection) for (let motion of motionSection) {
        let top = motion.getBoundingClientRect().top;

        if (top < window.innerHeight - 200) motion.classList.add('has-motion');
    }
}