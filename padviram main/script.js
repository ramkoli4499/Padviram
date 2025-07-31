// Multilingual support
function changeLang(lang) {
  const elements = document.querySelectorAll('.lang-text');
  elements.forEach(el => {
    const translation = el.getAttribute(`data-${lang}`);
    if (translation) el.innerText = translation;
  });
}

// Resume Form Submission
document.getElementById('resumeForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const responseMsg = document.getElementById('responseMsg');

  try {
    const res = await fetch('https://api.padviram.in/upload', {
      method: 'POST',
      body: formData
    });

    const result = await res.json();
    responseMsg.innerText = result.message || 'Uploaded successfully!';
  } catch (err) {
    responseMsg.innerText = 'Upload failed!';
  }
});
