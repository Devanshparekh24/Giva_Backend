// src/db/index.js
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

console.log("Connecting to PostgreSQL...");

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log(`✅ PostgreSQL connected! Database URL: ${process.env.DATABASE_URL}`);
  } catch (error) {
    console.error("❌ PostgreSQL connection error:", error);
    process.exit(1);
  }
};

export { prisma, connectDB };
