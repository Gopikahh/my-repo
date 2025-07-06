


 import mongoose from 'mongoose';
 import dotenv from 'dotenv';
 dotenv.config();

export const connectDB = async () => {
  console.log("Mongo URI:", process.env.MONGODB_URI);  // Add this line to debug
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
