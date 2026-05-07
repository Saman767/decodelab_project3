let isDark = false;
 
    // ── DARK MODE TOGGLE ──
    const toggleBtn = document.getElementById('js-toggle');
 
    function applyTheme() {
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }
 
    toggleBtn.addEventListener('click', () => {
      isDark = !isDark;     // flip state
      applyTheme();         // update DOM
    });
 
    // keyboard accessibility
    toggleBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        isDark = !isDark;
        applyTheme();
      }
    });
 
    // ── ACCORDION ──
    const accordionBtns = document.querySelectorAll('.js-accordion-btn');
 
    accordionBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const item        = btn.closest('.accordion-item');
        const isOpen      = item.classList.contains('is-open');
 
        // Close ALL items first
        document.querySelectorAll('.accordion-item').forEach((el) => {
          el.classList.remove('is-open');
          el.querySelector('.js-accordion-btn').setAttribute('aria-expanded', 'false');
        });
 
        // If it wasn't open, open it now
        if (!isOpen) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });