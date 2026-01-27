export function initBurgerMenu() {
  const burgerBtn = document.querySelector('.header__burger-btn');
  const sidebar = document.querySelector('.mobile-menu__sidebar');
  const closeBtn = document.querySelector('.mobile-menu__close-btn');
  const overlay = document.querySelector('.mobile-menu__overlay');

  if (!burgerBtn) return;

  const openMenu = () => {
    sidebar.classList.add('is-open');
    document.body.classList.add('no-scroll');
    overlay.classList.add('is-open');
    burgerBtn.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    sidebar.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    overlay.classList.remove('is-open');
    burgerBtn.setAttribute('aria-expanded', 'false');
  };

  const handleEscKey = event => {
    if (event.key === 'Escape' && sidebar.classList.contains('is-open')) {
      closeMenu();
    }
  };

  burgerBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', handleEscKey);

  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}
