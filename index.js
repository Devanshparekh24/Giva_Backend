import dotenv from 'dotenv';
import { connectDB } from "./src/db/index.js";
import { connectMongoDB } from "./src/db/mongo.js";
import app from "./app.js";

dotenv.config();

const startServer = async () => {
  try {
    await connectDB(); // PostgreSQL with Prisma
    await connectMongoDB(); // MongoDB
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
      console.log('Database connection error:', error);
      process.exit(1);
  }

};

startServer();
