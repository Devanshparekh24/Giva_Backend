import express from "express";
import { getUsers, createUser,getOneUser } from "../controller/user.controller.js";

const router = express.Router();

// GET all users
router.get("/", getUsers);

// POST create user
router.post("/", createUser);   

router.get("/:id",getOneUser);



export default router;
