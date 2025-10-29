import express from "express";
import cors from "cors";
import userRouter from "./src/routes/user.routes.js";
import navbarRouter from './src/routes/navbarData.route.js';
import productVariantRouter from './src/routes/productVariant.routes.js';

const app = express();


app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// API routes
app.use("/api/users", userRouter);
app.use("/api/navbar", navbarRouter);
app.use("/api/product-variants", productVariantRouter);

export default app;
