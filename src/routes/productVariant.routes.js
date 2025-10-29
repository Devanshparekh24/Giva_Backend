import express from 'express';
import {
  getAllProductVariants,
  getProductVariantById,
  createProductVariant,
  updateProductVariant,
  deleteProductVariant
} from '../controller/productVariant.controller.js';

const router = express.Router();

// GET /api/product-variants - Get all product variants
router.get('/', getAllProductVariants);

// GET /api/product-variants/:id - Get product variant by ID
router.get('/:id', getProductVariantById);

// POST /api/product-variants - Create new product variant
router.post('/', createProductVariant);

// PUT /api/product-variants/:id - Update product variant
router.put('/:id', updateProductVariant);

// DELETE /api/product-variants/:id - Delete product variant
router.delete('/:id', deleteProductVariant);

export default router;
