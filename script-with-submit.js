const translations = {
  en: {
    title: "Padviram Employee Services",
    "nav-about": "About",
    "nav-services": "Services",
    "nav-join": "Join Us",
    "nav-contact": "Contact",
    "hero-title": "After graduation, let your job journey begin with us!",
    "hero-sub": "Your trusted partner in career building.",
    "about-title": "About Us",
    "about-desc": "We support fresh graduates in building resumes, preparing for interviews, and getting job-ready.",
    "contact-title": "Contact Us"
  },
  hi: {
    title: "पदवीराम कर्मचारी सेवाएँ",
    "nav-about": "हमारे बारे में",
    "nav-services": "सेवाएं",
    "nav-join": "हमसे जुड़ें",
    "nav-contact": "संपर्क करें",
    "hero-title": "स्नातक के बाद, अपनी नौकरी की यात्रा हमारे साथ शुरू करें!",
    "hero-sub": "आपका करियर साथी।",
    "about-title": "हमारे बारे में",
    "about-desc": "हम नए ग्रेजुएट्स को रिज़्यूमे बनाने, इंटरव्यू की तैयारी और नौकरी के लिए तैयार होने में मदद करते हैं।",
    "contact-title": "संपर्क करें"
  },
  mr: {
    title: "पदविराम कर्मचारी सेवा",
    "nav-about": "आमच्याबद्दल",
    "nav-services": "सेवा",
    "nav-join": "संपर्क करा",
    "nav-contact": "आमच्याशी बोला",
    "hero-title": "पदवी पूर्ण केल्यावर, तुमची करिअर यात्रा आमच्यासोबत सुरू करा!",
    "hero-sub": "तुमचा करिअर भागीदार.",
    "about-title": "आमच्याबद्दल",
    "about-desc": "नवीन पदवीधरांना आम्ही रेज्युमे तयार करणे, मुलाखत तयारी आणि नोकरीसाठी सज्ज होण्यात मदत करतो.",
    "contact-title": "संपर्क करा"
  },
  kn: {
    title: "ಪದ್ವಿರಾಮ ಉದ್ಯೋಗ ಸೇವೆಗಳು",
    "nav-about": "ನಮ್ಮ ಬಗ್ಗೆ",
    "nav-services": "ಸೇವೆಗಳು",
    "nav-join": "ಸೇರಿಸಿ",
    "nav-contact": "ಸಂಪರ್ಕಿಸಿ",
    "hero-title": "ಪದವಿ ನಂತರ, ನಿಮ್ಮ ಉದ್ಯೋಗ ಪ್ರಯಾಣವನ್ನು ನಮ್ಮೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಿ!",
    "hero-sub": "ನಿಮ್ಮ ನಂಬಲಿರುವ ಉದ್ಯೋಗ ಪಾಲುದಾರ.",
    "about-title": "ನಮ್ಮ ಬಗ್ಗೆ",
    "about-desc": "ನಾವು ಹೊಸ ಪದವೀಧರರಿಗೆ ರೆಸ್ಯೂಮ್ ಕಟ್ಟುವುದು, ಸಂದರ್ಶನ ತಯಾರಿ, ಮತ್ತು ಉದ್ಯೋಗಕ್ಕೆ ತಯಾರಾಗಲು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
    "contact-title": "ಸಂಪರ್ಕಿಸಿ"
  }
};

function changeLanguage() {
  const lang = document.getElementById("languageSelector").value;
  const strings = translations[lang];
  for (const key in strings) {
    const el = document.getElementById(key);
    if (el) el.innerText = strings[key];
  }
}

// Handle form submission to backend
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch("https://padviram-backend.onrender.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.text();
      alert(result);
      form.reset();
    } catch (err) {
      alert("Something went wrong while submitting. Please try again.");
      console.error(err);
    }
  });
});
