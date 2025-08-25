 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Padviram CareerGuidePro AI - Complete Career Platform</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
  <style>
    :root {
      --primary-color: #1B2A49;
      --secondary-color: #25D366;
      --accent-color: #FF6B6B;
      --light-bg: #f8f9fa;
      --dark-text: #1B2A49;
      --light-text: #f8f9fa;
      --card-bg: #ffffff;
      --shadow: 0 5px 15px rgba(0,0,0,0.1);
      --transition: all 0.3s ease;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: var(--dark-text);
      background-color: var(--light-bg);
      overflow-x: hidden;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    /* Header Styles */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .logo-container {
      display: flex;
      align-items: center;
    }
    
    .logo {
      height: 50px;
      margin-right: 15px;
    }
    
    .brand-name {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-color);
    }
    
    .language-selector {
      padding: 0.5rem;
      border-radius: 5px;
      border: 1px solid var(--primary-color);
      background-color: white;
      cursor: pointer;
    }
    
    h1, h2, h3 {
      color: var(--primary-color);
    }
    
    .hero {
      text-align: center;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, var(--primary-color), #2c3e50);
      color: white;
      border-radius: 10px;
      margin: 3rem 0;
      position: relative;
      overflow: hidden;
    }
    
    .hero::before {
      content: "";
      position: absolute;
      top: -50px;
      right: -50px;
      width: 200px;
      height: 200px;
      background: rgba(255,255,255,0.1);
      border-radius: 50%;
    }
    
    .hero::after {
      content: "";
      position: absolute;
      bottom: -80px;
      left: -80px;
      width: 250px;
      height: 250px;
      background: rgba(255,255,255,0.05);
      border-radius: 50%;
    }
    
    .hero h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: white;
      position: relative;
      z-index: 2;
    }
    
    .hero p {
      font-size: 1.2rem;
      max-width: 800px;
      margin: 0 auto 2rem;
      color: rgba(255,255,255,0.9);
      position: relative;
      z-index: 2;
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
    }
    
    .service-card {
      background: var(--card-bg);
      border-radius: 10px;
      padding: 2rem;
      box-shadow: var(--shadow);
      transition: var(--transition);
      text-align: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.05);
    }
    
    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0,0,0,0.15);
    }
    
    .service-icon {
      font-size: 3rem;
      color: var(--secondary-color);
      margin-bottom: 1rem;
    }
    
    .btn {
      display: inline-block;
      padding: 0.8rem 1.8rem;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 50px;
      font-weight: 600;
      cursor: pointer;
      margin-top: auto;
      transition: var(--transition);
      text-decoration: none;
    }
    
    .btn:hover {
      background-color: #334a6d;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .btn-secondary {
      background-color: var(--secondary-color);
    }
    
    .btn-accent {
      background-color: var(--accent-color);
    }
    
    .ai-tool-section {
      background-color: white;
      padding: 5rem 0;
      margin-top: 3rem;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
    }
    
    .ai-tool-card {
      background: #f8f9fa;
      border-radius: 15px;
      padding: 2.5rem;
      margin-bottom: 2rem;
      box-shadow: var(--shadow);
    }
    
    .testimonial-section {
      background: linear-gradient(135deg, var(--primary-color), #2c3e50);
      padding: 4rem 0;
      color: white;
      margin-top: 4rem;
    }
    
    .testimonial-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .testimonial-card {
      background: rgba(255,255,255,0.1);
      padding: 2rem;
      border-radius: 10px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.2);
    }
    
    .testimonial-card p {
      font-style: italic;
      margin-bottom: 1.5rem;
      position: relative;
      padding-left: 1.5rem;
    }
    
    .testimonial-card p::before {
      content: "";
      position: absolute;
      left: 0;
      top: -15px;
      font-size: 3rem;
      color: rgba(255,255,255,0.3);
    }
    
    .testimonial-author {
      display: flex;
      align-items: center;
    }
    
    .testimonial-author img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 15px;
      object-fit: cover;
      border: 2px solid var(--secondary-color);
    }
    
    .footer {
      background: var(--primary-color);
      color: white;
      padding: 3rem 0;
      text-align: center;
    }
    
    .social-icons {
      margin: 1.5rem 0;
    }
    
    .social-icons a {
      color: white;
      margin: 0 10px;
      font-size: 1.5rem;
      transition: var(--transition);
      display: inline-block;
    }
    
    .social-icons a:hover {
      color: var(--secondary-color);
      transform: translateY(-3px);
    }
    
    .section-title {
      text-align: center;
      margin: 2rem 0;
      position: relative;
      padding-bottom: 1rem;
    }
    
    .section-title::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: var(--secondary-color);
      border-radius: 2px;
    }
    
    .ai-features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
    }
    
    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: var(--shadow);
      text-align: center;
      transition: var(--transition);
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    
    .feature-icon {
      font-size: 2.5rem;
      color: var(--secondary-color);
      margin-bottom: 1rem;
    }
    
    .tool-container {
      background: white;
      border-radius: 10px;
      padding: 2rem;
      margin: 2rem 0;
      box-shadow: var(--shadow);
    }
    
    .tool-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    
    .tool-content {
      display: flex;
      gap: 2rem;
      margin-top: 1.5rem;
    }
    
    .tool-input, .tool-output {
      flex: 1;
    }
    
    textarea {
      width: 100%;
      height: 200px;
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid #ddd;
      resize: vertical;
      font-family: inherit;
      font-size: 1rem;
    }
    
    .tool-btn {
      background: var(--primary-color);
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 5px;
      cursor: pointer;
      transition: var(--transition);
      font-weight: 600;
    }
    
    .tool-btn:hover {
      background: #334a6d;
    }
    
    .tool-output-content {
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 8px;
      min-height: 200px;
      border: 1px solid #eee;
    }
    
    .tool-active {
      border: 2px solid var(--secondary-color);
      box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.2);
    }
    
    .tool-selector {
      display: flex;
      overflow-x: auto;
      gap: 0.5rem;
      padding: 1rem 0;
      margin-bottom: 2rem;
    }
    
    .tool-tab {
      padding: 0.8rem 1.5rem;
      background: white;
      border: 1px solid #ddd;
      border-radius: 50px;
      cursor: pointer;
      transition: var(--transition);
      white-space: nowrap;
      font-weight: 600;
    }
    
    .tool-tab:hover, .tool-tab.active {
      background: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
    }
    
    @media (max-width: 768px) {
      .services-grid, .testimonial-grid, .ai-features {
        grid-template-columns: 1fr;
      }
      
      .header {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      
      .logo-container {
        margin-bottom: 1rem;
      }
      
      .language-selector {
        margin-top: 1rem;
        width: 100%;
      }
      
      .hero {
        padding: 2rem 1rem;
      }
      
      .hero h1 {
        font-size: 2rem;
      }
      
      .tool-content {
        flex-direction: column;
      }
      
      .tool-selector {
        flex-wrap: wrap;
      }
    }
  </style>
</head>
<body>
  <!-- Header with Logo and Language Selector -->
  <div class="header">
    <div class="logo-container">
      <!-- SVG Logo -->
      <svg class="logo" viewBox="0 0 100 40" width="120" height="50">
        <rect x="0" y="0" width="100" height="40" rx="5" fill="#1B2A49"/>
        <text x="50" y="25" font-family="Arial" font-size="14" fill="white" text-anchor="middle" font-weight="bold">AI CAREER</text>
      </svg>
      <div class="brand-name">Padviram CareerGuidePro AI</div>
    </div>
    
    <select class="language-selector" id="languageSelect" onchange="changeLanguage()">
      <option value="en">English</option>
      <option value="mr">मराठी (Marathi)</option>
      <option value="hi">हिन्दी (Hindi)</option>
      <option value="kn">ಕನ್ನಡ (Kannada)</option>
    </select>
  </div>

  <!-- Hero Section -->
  <div class="hero">
    <div class="container">
      <h1 id="heroTitle">Transform Your Career with AI</h1>
      <p id="heroSubtitle">Our intelligent AI tools help you build a better resume, prepare for interviews, find your dream job, and develop skills for the future.</p>
      <button class="btn btn-secondary" id="heroButton">Get Started Today</button>
    </div>
  </div>

  <div class="container">
    <h1 id="mainHeading" class="section-title">Our AI-Powered Career Tools</h1>
    
    <div class="tool-selector" id="toolTabs">
      <!-- Tool tabs will be generated by JavaScript -->
    </div>
    
    <div class="tool-container" id="toolContainer">
      <!-- Tool content will be generated by JavaScript -->
    </div>
  </div>
  
  <div class="container">
    <h1 id="servicesHeading" class="section-title">All AI Career Services</h1>
    
    <div class="services-grid">
      <!-- Resume Building Service -->
      <div class="service-card">
        <div class="service-icon"><i class="fas fa-file-alt"></i></div>
        <h2 id="resumeTitle">Resume Builder</h2>
        <p id="resumeDesc">AI-powered resume analysis and optimization</p>
        <button class="btn" onclick="selectTool('resume')" id="resumeBtn">Try Now</button>
      </div>
      
      <!-- Cover Letter Service -->
      <div class="service-card">
        <div class="service-icon"><i class="fas fa-envelope"></i></div>
        <h2 id="coverTitle">Cover Letter Creator</h2>
        <p id="coverDesc">Personalized cover letters for job applications</p>
        <button class="btn" onclick="selectTool('cover')" id="coverBtn">Try Now</button>
      </div>
      
      <!-- Interview Coaching Service -->
      <div class="service-card">
        <div class="service-icon"><i class="fas fa-comments"></i></div>
        <h2 id="interviewTitle">Interview Coach</h2>
        <p id="interviewDesc">Practice with AI and get real-time feedback</p>
        <button class="btn" onclick="selectTool('interview')" id="interviewBtn">Try Now</button>
      </div>
      
      <!-- Job Matching Service -->
      <div class="service-card">
        <div class="service-icon"><i class="fas fa-briefcase"></i></div>
        <h2 id="jobTitle">Job Matcher</h2>
        <p id="jobDesc">Smart AI algorithms match you with perfect jobs</p>
        <button class="btn" onclick="selectTool('job')" id="jobBtn">Try Now</button>
      </div>
      
      <!-- Skill Development Service -->
      <div class="service-card">
        <div class="service-icon"><i class="fas fa-graduation-cap"></i></div>
        <h2 id="skillTitle">Skill Developer</h2>
        <p id="skillDesc">Personalized learning paths based on career goals</p>
        <button class="btn" onclick="selectTool('skill')" id="skillBtn">Try Now</button>
      </div>
      
      <!-- Career Analytics Service -->
      <div class="service-card">
        <div class="service-icon"><i class="fas fa-chart-line"></i></div>
        <h2 id="analyticsTitle">Career Analytics</h2>
        <p id="analyticsDesc">Track your progress and get personalized insights</p>
        <button class="btn" onclick="selectTool('analytics')" id="analyticsBtn">Try Now</button>
      </div>
      
      <!-- Salary Negotiation Service -->
      <div class="service-card">
        <div class="service-icon"><i class="fas fa-hand-holding-usd"></i></div>
        <h2 id="salaryTitle">Salary Negotiator</h2>
        <p id="salaryDesc">AI guidance for salary negotiation strategies</p>
        <button class="btn" onclick="selectTool('salary')" id="salaryBtn">Try Now</button>
      </div>
      
      <!-- LinkedIn Optimizer Service -->
      <div class="service-card">
        <div class="service-icon"><i class="fab fa-linkedin"></i></div>
        <h2 id="networkTitle">LinkedIn Optimizer</h2>
        <p id="networkDesc">Optimize your LinkedIn profile for recruiters</p>
        <button class="btn" onclick="selectTool('linkedin')" id="networkBtn">Try Now</button>
      </div>
    </div>
  </div>
  
  <!-- Testimonials Section -->
  <div class="testimonial-section">
    <div class="container">
      <h2 class="section-title" style="text-align: center; color: white;" id="testimonialTitle">Success Stories</h2>
      <div class="testimonial-grid">
        <div class="testimonial-card">
          <p id="testimonial1">"The AI resume builder helped me land 3 interviews in just one week. I finally got my dream job!"</p>
          <div class="testimonial-author">
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User">
            <div>
              <strong>Priya Sharma</strong>
              <p id="testimonialRole1">Software Developer</p>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <p id="testimonial2">"The interview coaching prepared me better than any human coach. The AI feedback was incredibly insightful."</p>
          <div class="testimonial-author">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User">
            <div>
              <strong>Raj Patel</strong>
              <p id="testimonialRole2">Product Manager</p>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <p id="testimonial3">"Thanks to the AI job matching, I found a position that perfectly aligns with my skills and career goals."</p>
          <div class="testimonial-author">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User">
            <div>
              <strong>Ananya Desai</strong>
              <p id="testimonialRole3">Data Scientist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Footer -->
  <div class="footer">
    <div class="container">
      <div class="brand-name" style="color: white; margin-bottom: 1rem;"> Padviram CareerGuidePro AI</div>
      <p id="footerText">Transform your career with our AI-powered tools and services</p>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
      <p id="copyright">&copy; 2025 Padviram CareerGuidePro AI. All rights reserved.</p>
    </div>
  </div>

  <script>
    // Language translations
    const translations = {
      en: {
        heroTitle: "Transform Your Career with AI",
        heroSubtitle: "Our intelligent AI tools help you build a better resume, prepare for interviews, find your dream job, and develop skills for the future.",
        heroButton: "Get Started Today",
        mainHeading: "Our AI-Powered Career Tools",
        servicesHeading: "All AI Career Services",
        resumeTitle: "Resume Builder",
        resumeDesc: "AI-powered resume analysis and optimization",
        resumeBtn: "Try Now",
        coverTitle: "Cover Letter Creator",
        coverDesc: "Personalized cover letters for job applications",
        coverBtn: "Try Now",
        interviewTitle: "Interview Coach",
        interviewDesc: "Practice with AI and get real-time feedback",
        interviewBtn: "Try Now",
        jobTitle: "Job Matcher",
        jobDesc: "Smart AI algorithms match you with perfect jobs",
        jobBtn: "Try Now",
        skillTitle: "Skill Developer",
        skillDesc: "Personalized learning paths based on career goals",
        skillBtn: "Try Now",
        analyticsTitle: "Career Analytics",
        analyticsDesc: "Track your progress and get personalized insights",
        analyticsBtn: "Try Now",
        salaryTitle: "Salary Negotiator",
        salaryDesc: "AI guidance for salary negotiation strategies",
        salaryBtn: "Try Now",
        networkTitle: "LinkedIn Optimizer",
        networkDesc: "Optimize your LinkedIn profile for recruiters",
        networkBtn: "Try Now",
        testimonialTitle: "Success Stories",
        testimonial1: "\"The AI resume builder helped me land 3 interviews in just one week. I finally got my dream job!\"",
        testimonialRole1: "Software Developer",
        testimonial2: "\"The interview coaching prepared me better than any human coach. The AI feedback was incredibly insightful.\"",
        testimonialRole2: "Product Manager",
        testimonial3: "\"Thanks to the AI job matching, I found a position that perfectly aligns with my skills and career goals.\"",
        testimonialRole3: "Data Scientist",
        footerText: "Transform your career with our AI-powered tools and services",
        copyright: "© 2025 Padviram CareerGuidePro AI. All rights reserved.",
        brandName: "Padviram CareerGuidePro AI",
        toolResume: "Resume Builder",
        toolCover: "Cover Letter Creator",
        toolInterview: "Interview Coach",
        toolJob: "Job Matcher",
        toolSkill: "Skill Developer",
        toolAnalytics: "Career Analytics",
        toolSalary: "Salary Negotiator",
        toolLinkedin: "LinkedIn Optimizer",
        inputLabel: "Your Information:",
        outputLabel: "AI-Generated Result:",
        generateBtn: "Generate with AI"
      },
      mr: {
        heroTitle: "AI सह तुमच्या करिअरचे रूपांतर करा",
        heroSubtitle: "आमची बुद्धिमान AI साधने तुम्हाला चांगले रेझ्युमे तयार करण्यात, मुलाखतींची तयारी करण्यात, स्वप्नांची नोकरी शोधण्यात आणि भविष्यासाठी कौशल्ये विकसित करण्यात मदत करतात.",
        heroButton: "आजच सुरु करा",
        mainHeading: "आमची AI-चालित करिअर साधने",
        servicesHeading: "सर्व AI करिअर सेवा",
        resumeTitle: "रेझ्युमे बिल्डर",
        resumeDesc: "AI-चालित रेझ्युमे विश्लेषण आणि ऑप्टिमायझेशन",
        resumeBtn: "आता वापरा",
        coverTitle: "कव्हर लेटर निर्माता",
        coverDesc: "नोकरीच्या अर्जासाठी वैयक्तिकृत कव्हर लेटर्स",
        coverBtn: "आता वापरा",
        interviewTitle: "मुलाखत प्रशिक्षक",
        interviewDesc: "AI सह सराव करा आणि रिअल-टाइम फीडबॅक मिळवा",
        interviewBtn: "आता वापरा",
        jobTitle: "नोकरी जुळणारा",
        jobDesc: "स्मार्ट AI अल्गोरिदम तुम्हाला योग्य नोकऱ्यांशी जोडतात",
        jobBtn: "आता वापरा",
        skillTitle: "कौशल्य विकसक",
        skillDesc: "करिअर ध्येयांवर आधारित वैयक्तिकृत शिक्षण मार्ग",
        skillBtn: "आता वापरा",
        analyticsTitle: "करिअर विश्लेषण",
        analyticsDesc: "तुमची प्रगती ट्रॅक करा आणि वैयक्तिकृत अंतर्दृष्टी मिळवा",
        analyticsBtn: "आता वापरा",
        salaryTitle: "पगार वाटाघाटी",
        salaryDesc: "पगार वाटाघाटीच्या रणनीतीसाठी AI मार्गदर्शन",
        salaryBtn: "आता वापरा",
        networkTitle: "लिंक्डइन ऑप्टिमायझर",
        networkDesc: "भरतीकर्त्यांसाठी तुमचे लिंक्डइन प्रोफाइल ऑप्टिमाइझ करा",
        networkBtn: "आता वापरा",
        testimonialTitle: "यशोगाथा",
        testimonial1: "\"AI रेझ्युमे बिल्डरने फक्त एका आठवड्यात 3 मुलाखती मिळवण्यात मला मदत केली. मला शेवटी माझी स्वप्नांची नोकरी मिळाली!\"",
        testimonialRole1: "सॉफ्टवेअर डेव्हलपर",
        testimonial2: "\"मुलाखत प्रशिक्षणाने कोणत्याही मानवी प्रशिक्षकापेक्षा चांगली तयारी केली. AI फीडबॅक अतिशय अंतर्दृष्टिपूर्ण होता.\"",
        testimonialRole2: "उत्पादन व्यवस्थापक",
        testimonial3: "\"AI नोकरी जुळणीमुळे, मला माझ्या कौशल्यांशी आणि करिअर ध्येयांशी पूर्णपणे जुळणारी पोझिशन सापडली.\"",
        testimonialRole3: "डेटा सायंटिस्ट",
        footerText: "आमच्या AI-चालित साधनांसह तुमच्या करिअरचे रूपांतर करा",
        copyright: "© 2025 Padviram CareerGuidePro AI. सर्व हक्क राखीव.",
        brandName: "Padviram CareerGuidePro AI",
        toolResume: "रेझ्युमे बिल्डर",
        toolCover: "कव्हर लेटर निर्माता",
        toolInterview: "मुलाखत प्रशिक्षक",
        toolJob: "नोकरी जुळणारा",
        toolSkill: "कौशल्य विकसक",
        toolAnalytics: "करिअर विश्लेषण",
        toolSalary: "पगार वाटाघाटी",
        toolLinkedin: "लिंक्डइन ऑप्टिमायझर",
        inputLabel: "तुमची माहिती:",
        outputLabel: "AI-जनरेट केलेला निकाल:",
        generateBtn: "AI सह निर्मिती करा"
      },
      hi: {
        heroTitle: "AI के साथ अपने करियर को बदलें",
        heroSubtitle: "हमारे बुद्धिमान AI उपकरण आपको बेहतर रिज्यूमे बनाने, इंटरव्यू की तैयारी करने, सपनों की नौकरी खोजने और भविष्य के लिए कौशल विकसित करने में मदद करते हैं।",
        heroButton: "आज ही शुरू करें",
        mainHeading: "हमारे AI-संचालित करियर उपकरण",
        servicesHeading: "सभी AI करियर सेवाएँ",
        resumeTitle: "रिज्यूमे बिल्डर",
        resumeDesc: "AI-संचालित रिज्यूमे विश्लेषण और अनुकूलन",
        resumeBtn: "अभी आज़माएं",
        coverTitle: "कवर लेटर निर्माता",
        coverDesc: "नौकरी आवेदन के लिए व्यक्तिगत कवर लेटर",
        coverBtn: "अभी आज़माएं",
        interviewTitle: "इंटरव्यू कोच",
        interviewDesc: "AI के साथ अभ्यास करें और वास्तविक समय में प्रतिक्रिया प्राप्त करें",
        interviewBtn: "अभी आज़माएं",
        jobTitle: "नौकरी मिलानकर्ता",
        jobDesc: "स्मार्ट AI एल्गोरिदम आपको सही नौकरियों से मिलाते हैं",
        jobBtn: "अभी आज़माएं",
        skillTitle: "कौशल विकासक",
        skillDesc: "करियर लक्ष्यों के आधार पर व्यक्तिगत शिक्षण पथ",
        skillBtn: "अभी आज़माएं",
        analyticsTitle: "करियर एनालिटिक्स",
        analyticsDesc: "अपनी प्रगति को ट्रैक करें और व्यक्तिगत अंतर्दृष्टि प्राप्त करें",
        analyticsBtn: "अभी आज़माएं",
        salaryTitle: "वेतन वार्ताकार",
        salaryDesc: "वेतन वार्ता रणनीतियों के लिए AI मार्गदर्शन",
        salaryBtn: "अभी आज़माएं",
        networkTitle: "लिंक्डइन ऑप्टिमाइज़र",
        networkDesc: "भर्तीकर्ताओं के लिए अपना लिंक्डइन प्रोफाइल ऑप्टिमाइज़ करें",
        networkBtn: "अभी आज़माएं",
        testimonialTitle: "सफलता की कहानियाँ",
        testimonial1: "\"AI रिज्यूमे बिल्डर ने मुझे सिर्फ एक हफ्ते में 3 इंटरव्यू दिलाने में मदद की। आखिरकार मुझे अपनी सपनों की नौकरी मिल गई!\"",
        testimonialRole1: "सॉफ्टवेयर डेवलपर",
        testimonial2: "\"इंटरव्यू कोचिंग ने किसी भी मानव कोच से बेहतर तैयारी कराई। AI प्रतिक्रिया अविश्वसनीय रूप से अंतर्दृष्टिपूर्ण थी।\"",
        testimonialRole2: "उत्पाद प्रबंधक",
        testimonial3: "\"AI नौकरी मिलान के लिए धन्यवाद, मुझे एक ऐसी पोजीशन मिली जो मेरे कौशल और करियर लक्ष्यों के साथ पूरी तरह मेल खाती है।\"",
        testimonialRole3: "डेटा साइंटिस्ट",
        footerText: "हमारे AI-संचालित उपकरणों के साथ अपने करियर को बदलें",
        copyright: "© 2025 Padviram CareerGuidePro AI. सर्वाधिकार सुरक्षित।",
        brandName: "Padviram CareerGuidePro AI",
        toolResume: "रिज्यूमे बिल्डर",
        toolCover: "कवर लेटर निर्माता",
        toolInterview: "इंटरव्यू कोच",
        toolJob: "नौकरी मिलानकर्ता",
        toolSkill: "कौशल विकासक",
        toolAnalytics: "करियर एनालिटिक्स",
        toolSalary: "वेतन वार्ताकार",
        toolLinkedin: "लिंक्डइन ऑप्टिमाइज़र",
        inputLabel: "आपकी जानकारी:",
        outputLabel: "AI-जनित परिणाम:",
        generateBtn: "AI के साथ जनरेट करें"
      },
      kn: {
        heroTitle: "AI ಜೊತೆ ನಿಮ್ಮ ವೃತ್ತಿಜೀವನವನ್ನು ರೂಪಾಂತರಿಸಿ",
        heroSubtitle: "ನಮ್ಮ ಬುದ್ಧಿವಂತ AI ಸಾಧನಗಳು ಉತ್ತಮ ರೆಸ್ಯೂಮ್ ನಿರ್ಮಿಸಲು, ಸಂದರ್ಶನಗಳಿಗೆ ತಯಾರಾಗಲು, ಕನಸಿನ ಉದ್ಯೋಗವನ್ನು ಕಂಡುಹಿಡಿಯಲು ಮತ್ತು ಭವಿಷ್ಯಕ್ಕಾಗಿ ಕೌಶಲ್ಯಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
        heroButton: "ಇಂದೇ ಪ್ರಾರಂಭಿಸಿ",
        mainHeading: "ನಮ್ಮ AI-ಶಕ್ತಿಯ ವೃತ್ತಿ ಸಾಧನಗಳು",
        servicesHeading: "ಎಲ್ಲಾ AI ವೃತ್ತಿ ಸೇವೆಗಳು",
        resumeTitle: "ರೆಸ್ಯೂಮ್ ಬಿಲ್ಡರ್",
        resumeDesc: "AI-ಶಕ್ತಿಯ ರೆಸ್ಯೂಮ್ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಅನುಕೂಲತೆ",
        resumeBtn: "ಇದೀಗ ಪ್ರಯತ್ನಿಸಿ",
        coverTitle: "ಕವರ್ ಲೆಟರ್ ಕ್ರಿಯೇಟರ್",
        coverDesc: "ಉದ್ಯೋಗ ಅರ್ಜಿಗಳಿಗಾಗಿ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಕವರ್ ಪತ್ರಗಳು",
        coverBtn: "ಇದೀಗ ಪ್ರಯತ್ನಿಸಿ",
        interviewTitle: "ಸಂದರ್ಶನ ತರಬೇತುದಾರ",
        interviewDesc: "AI ಜೊತೆ ಅಭ್ಯಾಸ ಮಾಡಿ ಮತ್ತು ರಿಯಲ್-ಟೈಮ್ ಪ್ರತಿಕ್ರಿಯೆ ಪಡೆಯಿರಿ",
        interviewBtn: "ಇದೀಗ ಪ್ರಯತ್ನಿಸಿ",
        jobTitle: "ಉದ್ಯೋಗ ಹೊಂದಾಣಿಕೆದಾರ",
        jobDesc: "ಸ್ಮಾರ್ಟ್ AI ಅಲ್ಗಾರಿದಮ್ಗಳು ನಿಮಗೆ ಸರಿಯಾದ ಉದ್ಯೋಗಗಳನ್ನು ಹುಡುಕಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ",
        jobBtn: "ಇದೀಗ ಪ್ರಯತ್ನಿಸಿ",
        skillTitle: "ಕೌಶಲ್ಯ ಅಭಿವೃದ್ಧಿಕಾರ",
        skillDesc: "ವೃತ್ತಿ ಗುರಿಗಳ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕಗೊಳಿಸಲಾದ ಕಲಿಕೆ ಮಾರ್ಗಗಳು",
        skillBtn: "ಇದೀಗ ಪ್ರಯತ್ನಿಸಿ",
        analyticsTitle: "ವೃತ್ತಿ ವಿಶ್ಲೇಷಣೆ",
        analyticsDesc: "ನಿಮ್ಮ ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ವೈಯಕ್ತಿಕ ಅಂತರ್ದೃಷ್ಟಿಗಳನ್ನು ಪಡೆಯಿರಿ",
        analyticsBtn: "ಇದೀಗ ಪ್ರಯತ್ನಿಸಿ",
        salaryTitle: "ಸಂಬಳ ಸಂಧಾನಕಾರ",
        salaryDesc: "ಸಂಬಳ ಸಂಧಾನ ತಂತ್ರಗಳಿಗೆ AI ಮಾರ್ಗದರ್ಶನ",
        salaryBtn: "ಇದೀಗ ಪ್ರಯತ್ನಿಸಿ",
        networkTitle: "ಲಿಂಕ್‌ಡ್ಇನ್ ಆಪ್ಟಿಮೈಸರ್",
        networkDesc: "ನೇಮಕಾತಿ ಮಾಡುವವರಿಗಾಗಿ ನಿಮ್ಮ ಲಿಂಕ್‌ಡ್‌ಇನ್ ಪ್ರೊಫೈಲ್ ಅನ್ನು ಆಪ್ಟಿಮೈಸ್ ಮಾಡಿ",
        networkBtn: "ಇದೀಗ ಪ್ರಯತ್ನಿಸಿ",
        testimonialTitle: "ಯಶಸ್ಸಿನ ಕಥೆಗಳು",
        testimonial1: "\"AI ರೆಸ್ಯೂಮ್ ಬಿಲ್ಡರ್ ನನಗೆ ಕೇವಲ ಒಂದು ವಾರದಲ್ಲಿ 3 ಸಂದರ್ಶನಗಳನ್ನು ಪಡೆಯಲು ಸಹಾಯ ಮಾಡಿತು. ಅಂತಿಮವಾಗಿ ನನಗೆ ನನ್ನ ಕನಸಿನ ಉದ್ಯೋಗ ಸಿಕ್ಕಿತು!\"",
        testimonialRole1: "ಸಾಫ್ಟ್ವೇರ್ ಡೆವಲಪರ್",
        testimonial2: "\"ಸಂದರ್ಶನ ತರಬೇತಿಯು ಯಾವುದೇ ಮಾನವ ತರಬೇತುದಾರರಿಗಿಂತ ಉತ್ತಮವಾಗಿ ಸಿದ್ಧಪಡಿಸಿತು. AI ಪ್ರತಿಕ್ರಿಯೆ ಅತ್ಯಂತ ಅಂತರ್ದೃಷ್ಟಿಪೂರ್ಣವಾಗಿತ್ತು.\"",
        testimonialRole2: "ಉತ್ಪನ್ನ ನಿರ್ವಹಕ",
        testimonial3: "\"AI ಉದ್ಯೋಗ ಹೊಂದಾಣಿಕೆಗೆ ಧನ್ಯವಾದಗಳು, ನನ್ನ ಕೌಶಲ್ಯಗಳು ಮತ್ತು ವೃತ್ತಿ ಗುರಿಗಳೊಂದಿಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಹೊಂದಿಕೆಯಾಗುವ ಸ್ಥಾನ ನನಗೆ ಸಿಕ್ಕಿತು.\"",
        testimonialRole3: "ಡೇಟಾ ಸೈಂಟಿಸ್ಟ್",
        footerText: "ನಮ್ಮ AI-ಶಕ್ತಿಯ ಸಾಧನಗಳೊಂದಿಗೆ ನಿಮ್ಮ ವೃತ್ತಿಜೀವನವನ್ನು ರೂಪಾಂತರಿಸಿ",
        copyright: "© 2025 Padviram CareerGuidePro AI. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಪಾಡಲಾಗಿದೆ.",
        brandName: "Padviram CareerGuidePro AI",
        toolResume: "ರೆಸ್ಯೂಮ್ ಬಿಲ್ಡರ್",
        toolCover: "ಕವರ್ ಲೆಟರ್ ಕ್ರಿಯೇಟರ್",
        toolInterview: "ಸಂದರ್ಶನ ತರಬೇತುದಾರ",
        toolJob: "ಉದ್ಯೋಗ ಹೊಂದಾಣಿಕೆದಾರ",
        toolSkill: "ಕೌಶಲ್ಯ ಅಭಿವೃದ್ಧಿಕಾರ",
        toolAnalytics: "ವೃತ್ತಿ ವಿಶ್ಲೇಷಣೆ",
        toolSalary: "ಸಂಬಳ ಸಂಧಾನಕಾರ",
        toolLinkedin: "ಲಿಂಕ್‌ಡ್ಇನ್ ಆಪ್ಟಿಮೈಸರ್",
        inputLabel: "ನಿಮ್ಮ ಮಾಹಿತಿ:",
        outputLabel: "AI-ರಚಿಸಿದ ಫಲಿತಾಂಶ:",
        generateBtn: "AI ಜೊತೆ ಉತ್ಪಾದಿಸಿ"
      }
    };

    // Tool data
    const tools = [
      { id: 'resume', name: 'toolResume', icon: 'fa-file-alt', 
        description: 'Get AI-powered resume analysis and optimization tailored to your career goals' },
      { id: 'cover', name: 'toolCover', icon: 'fa-envelope', 
        description: 'Create personalized cover letters that stand out to hiring managers' },
      { id: 'interview', name: 'toolInterview', icon: 'fa-comments', 
        description: 'Practice interviews with AI and get real-time feedback on your answers' },
      { id: 'job', name: 'toolJob', icon: 'fa-briefcase', 
        description: 'Find the perfect jobs that match your skills and career aspirations' },
      { id: 'skill', name: 'toolSkill', icon: 'fa-graduation-cap', 
        description: 'Discover personalized learning paths to develop in-demand skills' },
      { id: 'analytics', name: 'toolAnalytics', icon: 'fa-chart-line', 
        description: 'Track your career progress and get actionable insights from AI' },
      { id: 'salary', name: 'toolSalary', icon: 'fa-hand-holding-usd', 
        description: 'Learn effective salary negotiation strategies with AI guidance' },
      { id: 'linkedin', name: 'toolLinkedin', icon: 'fab fa-linkedin', 
        description: 'Optimize your LinkedIn profile to attract recruiters and opportunities' }
    ];

    // Set default language
    let currentLanguage = 'en';
    let currentTool = 'resume';

    // Function to change language
    function changeLanguage() {
      currentLanguage = document.getElementById('languageSelect').value;
      updateTexts();
      renderTool(currentTool);
    }

    // Function to update all texts based on current language
    function updateTexts() {
      const lang = translations[currentLanguage];
      for (const key in lang) {
        const element = document.getElementById(key);
        if (element) {
          element.textContent = lang[key];
        }
      }
      
      // Update brand name
      document.querySelector('.brand-name').textContent = lang.brandName;
    }

    // Function to select a tool
    function selectTool(toolId) {
      currentTool = toolId;
      renderTool(toolId);
      
      // Update active tab
      const tabs = document.querySelectorAll('.tool-tab');
      tabs.forEach(tab => {
        if (tab.dataset.tool === toolId) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    }

    // Function to render tool content
    function renderTool(toolId) {
      const toolContainer = document.getElementById('toolContainer');
      const lang = translations[currentLanguage];
      const tool = tools.find(t => t.id === toolId);
      
      if (!tool) return;
      
      toolContainer.innerHTML = `
        <div class="tool-header">
          <h2>${lang[tool.name]}</h2>
          <i class="fas ${tool.icon} fa-2x" style="color: var(--secondary-color);"></i>
        </div>
        <p>${tool.description}</p>
        
        <div class="tool-content">
          <div class="tool-input">
            <label for="toolInput">${lang.inputLabel}</label>
            <textarea id="toolInput" placeholder="${tool.id === 'resume' ? 'Enter your work experience, skills and education...' : tool.id === 'cover' ? 'Enter job description and your qualifications...' : tool.id === 'interview' ? 'Enter job description and your background...' : 'Enter your information...'}"></textarea>
          </div>
          <div class="tool-output">
            <label>${lang.outputLabel}</label>
            <div class="tool-output-content" id="toolOutput">
              <p style="color: #888; text-align: center; padding: 2rem;">${tool.id === 'resume' ? 'AI-optimized resume will appear here' : tool.id === 'cover' ? 'Personalized cover letter will appear here' : tool.id === 'interview' ? 'Interview questions and feedback will appear here' : 'AI-generated content will appear here'}</p>
            </div>
          </div>
        </div>
        <button class="tool-btn" onclick="generateContent('${tool.id}')">${lang.generateBtn}</button>
      `;
    }

    // Function to generate content
    function generateContent(toolId) {
      const input = document.getElementById('toolInput').value;
      const output = document.getElementById('toolOutput');
      
      if (!input.trim()) {
        output.innerHTML = '<p style="color: var(--accent-color);">Please enter some information first!</p>';
        return;
      }
      
      // Show loading state
      output.innerHTML = '<div style="text-align: center; padding: 2rem;"><i class="fas fa-spinner fa-spin fa-2x"></i><p>AI is generating content...</p></div>';
      
      // Simulate AI processing
      setTimeout(() => {
        let result = '';
        
        switch(toolId) {
          case 'resume':
            result = `<h3>AI-Optimized Resume Summary</h3>
            <p>Results-driven software developer with 5+ years of experience specializing in web applications. Proven expertise in JavaScript frameworks and cloud technologies. Enhanced application performance by 40% at previous role.</p>
            <h4>Key Skills:</h4>
            <ul>
              <li>JavaScript, React, Node.js</li>
              <li>Cloud Architecture (AWS, Azure)</li>
              <li>Agile Development & CI/CD</li>
              <li>Database Design & Optimization</li>
            </ul>`;
            break;
          case 'cover':
            result = `<h3>Custom Cover Letter</h3>
            <p>Dear Hiring Manager,</p>
            <p>I am writing to express my interest in the Senior Developer position. With my extensive experience in JavaScript frameworks and cloud technologies, I am confident I can significantly contribute to your team.</p>
            <p>At my previous role, I led a team that improved application performance by 40% through architectural optimizations. I also implemented CI/CD pipelines that reduced deployment times by 60%.</p>
            <p>I am excited about the opportunity to bring my technical expertise and leadership skills to your organization.</p>
            <p>Sincerely,<br>Your Name</p>`;
            break;
          case 'interview':
            result = `<h3>Interview Questions & Feedback</h3>
            <h4>Technical Questions:</h4>
            <ul>
              <li>Describe your experience with cloud architecture</li>
              <li>How do you optimize application performance?</li>
              <li>Explain your approach to debugging complex issues</li>
            </ul>
            <h4>Feedback on Answers:</h4>
            <p>Your answers demonstrate strong technical knowledge. Consider adding specific metrics to quantify your achievements. Also, prepare examples that show leadership and collaboration skills.</p>`;
            break;
          default:
            result = `<h3>AI-Generated Content</h3>
            <p>Based on your input, here is the optimized content for your needs. The AI has analyzed your information and created personalized recommendations to help you achieve your career goals.</p>
            <ul>
              <li>Recommendation 1: Focus on developing cloud certification</li>
              <li>Recommendation 2: Highlight leadership experience</li>
              <li>Recommendation 3: Quantify achievements with metrics</li>
            </ul>`;
        }
        
        output.innerHTML = result;
      }, 1500);
    }

    // Initialize page
    document.addEventListener('DOMContentLoaded', function() {
      updateTexts();
      
      // Create tool tabs
      const toolTabs = document.getElementById('toolTabs');
      tools.forEach(tool => {
        const tab = document.createElement('div');
        tab.className = 'tool-tab';
        if (tool.id === currentTool) tab.classList.add('active');
        tab.dataset.tool = tool.id;
        tab.innerHTML = `<i class="fas ${tool.icon}"></i> ${translations[currentLanguage][tool.name]}`;
        tab.onclick = () => selectTool(tool.id);
        toolTabs.appendChild(tab);
      });
      
      // Render initial tool
      renderTool(currentTool);
    });
  </script>
</body>
</html>
