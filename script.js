  let lastScroll = 0;
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
      // Scroll down -> nav hilang
      nav.classList.remove('show');
      nav.classList.add('hide');
    } else {
      // Scroll up -> nav muncul
      nav.classList.remove('hide');
      nav.classList.add('show');
    }

    lastScroll = currentScroll;
  });

const text = document.querySelector(".glass-text");
const letters = text.textContent.split("");

text.innerHTML = letters
  .map(l => `<span>${l === " " ? "&nbsp;" : l}</span>`)
  .join("");


