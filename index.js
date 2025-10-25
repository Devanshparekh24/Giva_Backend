import dotenv from 'dotenv';
import { connectDB } from "./src/db/index.js";
import app from "./app.js";

dotenv.config({ path: './.envFile' });

const startServer = async () => {
  try {

    await connectDB();
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
      console.log('Postregre Conne');
      
  }

};

startServer();
