require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const firebaseAdmin = require('firebase-admin');
const { OpenAI } = require('openai');
const path = require('path');
const fs = require('fs');

// Initialize Firebase
const serviceAccount = require('./serviceAccountKey.json');
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET
});

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// File upload configuration
const upload = multer({ 
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  })
});

// Routes

// Resume Analysis Endpoint
app.post('/api/analyze-resume', upload.single('resume'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // In production, you would:
    // 1. Upload to Firebase Storage
    // 2. Extract text from the resume (using a PDF/text extraction library)
    // 3. Send text to AI for analysis

    // For demo, we'll simulate this process
    const resumeText = "Simulated resume text with skills and experience...";

    const prompt = `Analyze this resume and provide detailed feedback:
    
    Resume Content:
    ${resumeText}
    
    Please provide:
    1. Overall score (0-100)
    2. 3 key strengths
    3. 3 areas for improvement
    4. Specific suggestions for enhancement`;

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 500
    });

    const analysis = aiResponse.choices[0].message.content;

    // Clean up uploaded file
    fs.unlinkSync(req.file.path);

    res.json({ analysis });

  } catch (error) {
    console.error('Resume analysis error:', error);
    res.status(500).json({ error: 'Failed to analyze resume' });
  }
});

// Career Chat Endpoint
app.post('/api/career-chat', async (req, res) => {
  try {
    const { message } = req.body;

    const prompt = `You are a professional career coach. Provide helpful, concise advice in response to this question about career development, job search, or professional growth:
    
    Question: ${message}
    
    Answer:`;

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 200
    });

    res.json({ reply: aiResponse.choices[0].message.content });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to process chat message' });
  }
});

// Interview Analysis Endpoint
app.post('/api/analyze-interview', upload.single('video'), async (req, res) => {
  try {
    if (!req.file || !req.body.question) {
      return res.status(400).json({ error: 'Missing video or question data' });
    }

    // In production, you would:
    // 1. Upload video to storage
    // 2. Process video (speech-to-text, emotion analysis, etc.)
    // 3. Generate feedback

    // For demo, we'll simulate this with text analysis only
    const question = JSON.parse(req.body.question);
    const prompt = `Provide detailed feedback on this interview response:
    
    Question: "${question.text}"
    Tips: "${question.tips}"
    
    Analyze the following aspects:
    1. Content relevance and completeness
    2. Communication skills
    3. Professional presentation
    4. Specific suggestions for improvement`;

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 500
    });

    // Clean up uploaded file
    fs.unlinkSync(req.file.path);

    res.json({ feedback: aiResponse.choices[0].message.content });

  } catch (error) {
    console.error('Interview analysis error:', error);
    res.status(500).json({ error: 'Failed to analyze interview' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // Create uploads directory if it doesn't exist
  if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
  }
});