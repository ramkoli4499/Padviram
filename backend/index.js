const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const exampleRoutes = require('./routes/example');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/example', exampleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
