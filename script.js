document.getElementById('language-select').addEventListener('change', function () {
  const selectedLang = this.value;
  document.querySelectorAll('[data-' + selectedLang + ']').forEach(el => {
    el.textContent = el.getAttribute('data-' + selectedLang);
  });
});

document.getElementById('resume-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Resume submitted successfully!');
  // Backend API integration can be added here
});
