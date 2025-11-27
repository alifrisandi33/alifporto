const bubble = document.querySelector(".bubble");
const links = document.querySelectorAll(".nav a");

links.forEach(link => {
  link.addEventListener("mouseenter", (e) => {
    const rect = e.target.getBoundingClientRect();
    const navRect = e.target.closest("ul").getBoundingClientRect();

    bubble.style.opacity = 1;
    bubble.style.width = rect.width + "px";
    bubble.style.height = rect.height + "px";
    bubble.style.left = (rect.left - navRect.left) + "px";
    bubble.style.top = (rect.top - navRect.top) + "px";
  });
});

document.querySelector(".nav ul").addEventListener("mouseleave", () => {
  bubble.style.opacity = 0;
});
