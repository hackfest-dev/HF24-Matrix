import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected!! DB host: ${connectionInstance.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.error("MongoDB Connection Failed:".bgRed.white, error);
        process.exit(1);
    }
};

export default connectDB;
