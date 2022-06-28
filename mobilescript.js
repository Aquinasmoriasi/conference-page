/* top menu */
const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-items a');

ham.addEventListener('click', () => {
  if (ham.classList.contains('active')) {
    ham.classList.remove('active');
    menu.style.transition = 'all 0.1s ease-out';
    menu.style.left = '-100%';
  } else {
    ham.classList.add('active');
    menu.style.transition = 'all 0.3s ease-in';
    menu.style.left = '0';
  }
});

menuItem.forEach((link) => {
  if (ham.classList.contains('active')) {
    link.addEventListener('click', () => {
      ham.classList.remove('active');
      menu.style.top = '-100%';
    });
  } else {
    link.addEventListener('click', () => {
      ham.classList.remove('active');
      menu.style.left = '-100%';
    });
  }
});
