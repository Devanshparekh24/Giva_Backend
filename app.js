import express from "express";
import cors from "cors";
import userRouter from "./src/routes/user.routes.js";


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// API routes
app.use("/api/users", userRouter);

export default app;
