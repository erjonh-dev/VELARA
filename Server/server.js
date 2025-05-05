const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// Origini consentite
const allowedOrigins = [
  "http://localhost:5176", // sviluppo locale
  "https://velara-drab.vercel.app" // produzione su Vercel
];

// Opzioni CORS
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Rotte
app.use('/api', require('./routes/authRoutes'));
app.use('/api/requests', require('./routes/requestRoutes'));

// Avvio del server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`VELARA server running on port ${PORT}`));
