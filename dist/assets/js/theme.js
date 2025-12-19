const burger = document.querySelector('.burger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Блокируем скролл
  });
  
  if (closeMenu) {
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = ''; // Восстанавливаем скролл
    });
  }
  
  // Закрытие при клике вне области меню
  document.addEventListener('click', (event) => {
    if (mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(event.target) && 
        !burger.contains(event.target)) {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Закрытие при нажатии клавиши Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}




document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.comp-tab');
  const floors = document.querySelectorAll('.comp-floor');

  if (!tabs.length || !floors.length) {
    console.log('Элементы не найдены');
    return;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.floor;

      tabs.forEach(t => t.classList.remove('active'));
      floors.forEach(f => f.classList.remove('active'));

      tab.classList.add('active');
      document.querySelector(`.${target}`).classList.add('active');
    });
  });
});
