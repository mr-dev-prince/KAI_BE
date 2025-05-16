import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URI)
    const conn = await mongoose.connect(process.env.MONGO_URI,{dbName:'kisaanAI'});
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;
