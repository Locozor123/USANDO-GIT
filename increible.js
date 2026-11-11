const nav = document.getElementById('nav');
const handleNavScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
};
window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();