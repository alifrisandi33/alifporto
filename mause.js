const light = document.querySelector(".hero-light");

document.addEventListener("mousemove", (e) => {
    light.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});