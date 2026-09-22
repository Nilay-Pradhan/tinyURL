import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/tinyurl');
        console.log(`MongoDB Connected: ${conn.connection.host} DB: ${conn.connection.name}`);
        return conn
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        process.exit(1);
    }
}

export default connectDB
