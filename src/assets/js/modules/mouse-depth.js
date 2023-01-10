export default function mouseDepth(pos) {
    const depthElements = document.querySelectorAll('[data-depth]');

    let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;

    let x = pos.clientX;
    let y = pos.clientY;

    if (depthElements) for (let depthElement of depthElements) {
        let depth = '0.01' * depthElement.dataset.depth;

        depthElement.style.transform = `translate(${(x - w) * depth}px, ${(y - h) * depth}px)`;
    }
}