const mongoose = require("mongoose");

const dbUri = "mongodb://127.0.0.1:27017/driving-partner"; // Add a database name

const connectDB = async () => {
  try {
    await mongoose.connect(dbUri, {});
    console.log(`Connected to MongoDB on ${dbUri}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
