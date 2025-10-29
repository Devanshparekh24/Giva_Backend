import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error('MONGO_URI is not defined in environment variables');
}

const client = new MongoClient(mongoURI);

let db;

const connectMongoDB = async () => {
  try {
    await client.connect();
    db = client.db('giva'); // or extract from URI
    console.log('✅ MongoDB connected!');
    return db;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

const getDB = () => {
  if (!db) {
    throw new Error('MongoDB not connected. Call connectMongoDB first.');
  }
  return db;
};

export { connectMongoDB, getDB, client };
