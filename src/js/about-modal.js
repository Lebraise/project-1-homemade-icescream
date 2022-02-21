(() => {
  const refs = {
    openAboutBtn: document.querySelector('[data-about-open]'),
    closeAboutBtn: document.querySelector('[data-about-close]'),
    about: document.querySelector('[data-about]'),
  };

  refs.openAboutBtn.addEventListener('click', toggleAbout);
  refs.closeAboutBtn.addEventListener('click', toggleAbout);

  function toggleAbout() {
    refs.about.classList.toggle('is-hidden');
  }
})();