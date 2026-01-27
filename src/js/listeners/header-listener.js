const headerInit = () => {
  const navItems = document.querySelectorAll('.header__menu-item');
  let activeNavItemIndex = Number(sessionStorage.getItem('activeNavItemIndex'));

  if (isNaN(activeNavItemIndex)) {
    activeNavItemIndex = 0;
  }

  if (navItems[activeNavItemIndex]) {
    navItems[activeNavItemIndex].classList.add('header__menu-item--active');
  }

  navItems.forEach((nav, index) => {
    const navLink = nav.querySelector('.header__menu-link');

    navLink?.addEventListener('click', () => {
      navItems.forEach(navItem => navItem.classList.remove('header__menu-item--active'));
      nav.classList.add('header__menu-item--active');
      sessionStorage.setItem('activeNavItemIndex', index);
    });
  });
};

export { headerInit };
