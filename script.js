document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger?.addEventListener('click', () => {
    console.log('Hamburger clicked');
    menu?.classList.toggle('show');
  });

  document.querySelectorAll('.menu-item').forEach((item) => {
    item.addEventListener('click', (e) => {
      console.log('Menu item clicked');
      const submenu = item.querySelector('.submenu');
      const link = item.querySelector('a');  // Check if the item has a link

      if (submenu && !link) {  // Prevent default only if there is a submenu and no link
        e.preventDefault();
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
});
