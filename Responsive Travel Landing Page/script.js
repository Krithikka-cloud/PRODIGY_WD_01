const menuIcon = document.getElementById('menuIcon');
const icon = menuIcon.querySelector('i'); 
const menubar = document.querySelector('.menubar');
const menuItems = document.querySelectorAll('.menubar li');


menuIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  menubar.classList.toggle('active');
  icon.classList.toggle('ri-menu-3-line');
  icon.classList.toggle('ri-close-line');
});


menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menubar.classList.remove('active');
    icon.classList.remove('ri-close-line');
    icon.classList.add('ri-menu-3-line');
  });
});


document.addEventListener('click', (e) => {
  const isClickInside = menubar.contains(e.target) || menuIcon.contains(e.target);
  if (!isClickInside && menubar.classList.contains('active')) {
    menubar.classList.remove('active');
    icon.classList.remove('ri-close-line');
    icon.classList.add('ri-menu-3-line');
  }
});
