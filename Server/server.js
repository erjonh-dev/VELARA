const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();


const corsOptions = {
  origin: "https://velara-drab.vercel.app",
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', require('./routes/authRoutes'));
app.use('/api/requests', require('./routes/requestRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`VELARA server running on port ${PORT}`));
