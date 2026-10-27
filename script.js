const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  });
});

const filterButtons = document.querySelectorAll('.filter-button');
const cakeCards = document.querySelectorAll('.cake-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    cakeCards.forEach(card => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !matches);
    });
  });
});

// Cake enquiry links preselect the cake name in the contact section's phone prompt.
document.querySelectorAll('[data-cake]').forEach(link => {
  link.addEventListener('click', () => {
    const cake = link.dataset.cake;
    sessionStorage.setItem('hemaBakeryCakeInterest', cake);
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
