import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connection Success.");
  } catch (error) {
    console.log("Connecting DB Error :", error);
  }
};

export default connectDB;
