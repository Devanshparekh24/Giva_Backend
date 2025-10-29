import { getDB } from '../db/mongo.js';
import { ObjectId } from 'mongodb';

// Get all product variants
export const getAllProductVariants = async (req, res) => {
  try {
    const db = getDB();
    const variants = await db.collection('productVariants').find({}).toArray();
    res.status(200).json({
      success: true,
      data: variants,
      message: 'Product variants retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving product variants',
      error: error.message
    });
  }
};

// Get product variant by ID
export const getProductVariantById = async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDB();
    const variant = await db.collection('productVariants').findOne({ _id: new ObjectId(id) });

    if (!variant) {
      return res.status(404).json({
        success: false,
        message: 'Product variant not found'
      });
    }

    res.status(200).json({
      success: true,
      data: variant,
      message: 'Product variant retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving product variant',
      error: error.message
    });
  }
};

// Create new product variant
export const createProductVariant = async (req, res) => {
  try {
    const { productId, name, value, priceModifier, stock } = req.body;
    const db = getDB();

    const newVariant = {
      productId: new ObjectId(productId),
      name,
      value,
      priceModifier: priceModifier || 0,
      stock: stock || 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection('productVariants').insertOne(newVariant);

    res.status(201).json({
      success: true,
      data: { _id: result.insertedId, ...newVariant },
      message: 'Product variant created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating product variant',
      error: error.message
    });
  }
};

// Update product variant
export const updateProductVariant = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const db = getDB();

    updateData.updatedAt = new Date();

    const result = await db.collection('productVariants').updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Product variant not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product variant updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating product variant',
      error: error.message
    });
  }
};

// Delete product variant
export const deleteProductVariant = async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDB();

    const result = await db.collection('productVariants').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Product variant not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product variant deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting product variant',
      error: error.message
    });
  }
};
