const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

app.post('/submit', upload.single('resume'), async (req, res) => {
  const { fullName, email, phone, qualification } = req.body;
  const resume = req.file;

  if (!fullName || !email || !resume) {
    return res.status(400).send("Missing required fields.");
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'New Resume Submission',
    text: \`Name: \${fullName}\nEmail: \${email}\nPhone: \${phone}\nQualification: \${qualification}\`,
    attachments: resume ? [{ path: resume.path }] : []
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Resume submitted successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email.");
  }
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
