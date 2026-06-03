
const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

if (mobileMenu && !mobileMenu.id) {
  mobileMenu.id = 'mobile-menu';
}

const closeMobileMenu = () => {
  if (!mobileMenu || !mobileMenuToggle) return;

  mobileMenu.classList.add('hidden');
  mobileMenuToggle.setAttribute('aria-expanded', 'false');
};

if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.setAttribute('aria-controls', mobileMenu.id);

  mobileMenuToggle.addEventListener('click', () => {
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';

    mobileMenu.classList.toggle('hidden', isExpanded);
    mobileMenuToggle.setAttribute('aria-expanded', String(!isExpanded));
  });

  mobileMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMobileMenu();
    }
  });
}

document.querySelectorAll('[data-faq-item]').forEach((item, index) => {
  const trigger = item.querySelector('[data-faq-trigger]');
  const panel = item.querySelector('[data-faq-panel]');

  if (!trigger || !panel) return;

  if (!panel.id) {
    panel.id = `faq-panel-${index + 1}`;
  }

  trigger.setAttribute('aria-controls', panel.id);

  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

    trigger.setAttribute('aria-expanded', String(!isExpanded));
    panel.classList.toggle('hidden', isExpanded);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');

    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();
    closeMobileMenu();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', targetId);
  });
});

document.querySelectorAll('form[data-success-message]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const status = form.querySelector('[data-form-status]');
    const message = form.getAttribute('data-success-message') || 'Thanks! Your message was received.';

    if (status) {
      status.textContent = message;
      status.classList.remove('hidden');
    }

    form.reset();
  });
});
