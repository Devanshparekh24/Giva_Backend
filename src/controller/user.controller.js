import { prisma } from "../db/index.js";
import {asyncHandler} from  '../utils/asyncHandler.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import {ApiError} from '../utils/ApiError.js'

// GET /api/users
export const getUsers =asyncHandler( async (req, res) => {
  try {
    const users = await prisma.user.findMany(); // user = model from schema.prisma

    res.status(200).json(
      new ApiResponse(200,users,'Get All The User'),
      
    
    );
  } catch (error) {
    return res.status(500).json(new ApiError(500, 'Internal Server Error',error));
  }
});

export const getOneUser = async (req, res) => {

  try {

    const { id } = req.params;

    if (!id) {

      return res.status(400).json({ success: false, message: "User ID is required" });

    }
    const oneUser = await prisma.user.findUnique({
      where: { id: parseInt(id) }
    });

    if (!oneUser) {

      return res.status(400).json({ success: false, message: "User Are Not Exist" });

    }

    res.status(200).json({ success: true, data: oneUser })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });

  }

}

// POST /api/users
export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = await prisma.user.create({
      data: { name, email },
    });

    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
