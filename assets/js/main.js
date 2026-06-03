const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileMenuLabel = mobileMenuToggle?.querySelector('.sr-only');

if (mobileMenu && !mobileMenu.id) {
  mobileMenu.id = 'mobile-menu';
}

const setMobileMenuState = (isExpanded) => {
  if (!mobileMenu || !mobileMenuToggle) return;

  mobileMenu.classList.toggle('hidden', !isExpanded);
  mobileMenu.hidden = !isExpanded;
  mobileMenuToggle.setAttribute('aria-expanded', String(isExpanded));
  mobileMenuToggle.setAttribute(
    'aria-label',
    isExpanded ? 'Close navigation menu' : 'Open navigation menu',
  );

  if (mobileMenuLabel) {
    mobileMenuLabel.textContent = isExpanded ? 'Close navigation menu' : 'Open navigation menu';
  }
};

const closeMobileMenu = () => {
  setMobileMenuState(false);
};

if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.setAttribute('aria-controls', mobileMenu.id);
  setMobileMenuState(mobileMenuToggle.getAttribute('aria-expanded') === 'true');

  mobileMenuToggle.addEventListener('click', () => {
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';

    setMobileMenuState(!isExpanded);
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

  const setFaqState = (isExpanded) => {
    trigger.setAttribute('aria-expanded', String(isExpanded));
    panel.classList.toggle('hidden', !isExpanded);
    panel.hidden = !isExpanded;
  };

  trigger.setAttribute('aria-controls', panel.id);
  setFaqState(trigger.getAttribute('aria-expanded') === 'true');

  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

    setFaqState(!isExpanded);
  });
});

document.querySelectorAll('.cost-table-wrap, [data-scrollable-table]').forEach((wrapper, index) => {
  if (!wrapper.hasAttribute('role')) {
    wrapper.setAttribute('role', 'region');
  }

  if (!wrapper.hasAttribute('tabindex')) {
    wrapper.setAttribute('tabindex', '0');
  }

  if (!wrapper.hasAttribute('aria-label')) {
    wrapper.setAttribute('aria-label', `Scrollable comparison table ${index + 1}`);
  }
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
