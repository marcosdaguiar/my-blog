const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const mongoUri = process.env.MONGO_URI;
const mongoDb = process.env.MONGO_DB;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri + mongoDb);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error('MongoDB connection error:', error);
  }
}

module.exports = {
    connectDB
}