const header = document.querySelector('.header');
const toggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');
const menuLinks = document.querySelectorAll('.header__menu-link');

if (header && toggle && nav) {
  const closeMenu = () => {
    header.classList.remove('header--open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    document.body.classList.remove('no-scroll');
  };

  const openMenu = () => {
    header.classList.add('header--open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú');
    document.body.classList.add('no-scroll');
  };

  toggle.addEventListener('click', () => {
    const isOpen = header.classList.contains('header--open');

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('header--open')) {
      closeMenu();
      toggle.focus();
    }
  });
}
