const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('resume'), async (req, res) => {
  const { name, email } = req.body;
  const resumeFile = req.file;

  if (!name || !email || !resumeFile) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  // Email Setup
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: `New Resume from ${name}`,
    text: `Name: ${name}\nEmail: ${email}`,
    attachments: [
      {
        filename: resumeFile.originalname,
        path: resumeFile.path
      }
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Resume uploaded and email sent successfully!' });

    // Optional: Delete file after sending
    fs.unlink(resumeFile.path, () => {});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error sending email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
