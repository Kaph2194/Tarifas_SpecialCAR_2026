/* ===========================
   SPECIAL CAR — TARIFAS 2026
   app.js
   =========================== */

document.addEventListener('DOMContentLoaded', () => {
  const tabBtns  = document.querySelectorAll('.tab-btn');
  const modules  = document.querySelectorAll('.module');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;

      // Update active button
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show matching module
      modules.forEach(m => {
        m.classList.remove('active');
        if (m.id === target) m.classList.add('active');
      });

      // Scroll to top of content area
      document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
