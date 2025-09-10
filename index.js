
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Simple health check
app.get('/health', (req, res) => {
  res.json({status: 'ok', ts: Date.now()});
});

// POST /api/attendance/checkin - sample endpoint
app.post('/api/attendance/checkin', (req, res) => {
  const { employeeId, lat, lng, timestamp } = req.body || {};
  if (!employeeId) return res.status(400).json({ error: 'employeeId required' });
  // In a real app we'd store to DB. Here we simulate a saved record.
  const record = {
    id: 'att_' + Date.now(),
    employeeId,
    lat: lat || null,
    lng: lng || null,
    timestamp: timestamp || Date.now()
  };
  console.log('Saved attendance:', record);
  res.json({ success: true, record });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Padviram backend running on port', PORT));
