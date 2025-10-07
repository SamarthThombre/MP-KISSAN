
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await connect(process.env.MONGO_URI)    
        console.log('[dbConfig] MongoDB connected successfully');
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
}

export default connectDB;