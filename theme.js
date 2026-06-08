// Immediately set theme to prevent flashing (FOUC)
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Button Injection
  const nav = document.querySelector('nav');
  if (nav) {
    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    
    btn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      btn.textContent = isDark ? '☀️' : '🌙';
    });
    nav.appendChild(btn);
  }

  // Contact Form Submission Interceptor
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.style.color = 'var(--color-accent)';
      status.textContent = `Thank you, ${document.getElementById('full-name').value.trim()}! Your message has been sent successfully.`;
      form.reset();
    });
  }
});
