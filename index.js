import express from "express";
import { connectDB, prisma } from "./src/db/index.js";

const app = express();

const startServer = async () => {
  await connectDB();

  app.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
  });

  app.listen(5000, () => {
    console.log("🚀 Server running on http://localhost:5000");
  });
};

startServer();
