// ProductVariant model for MongoDB
// Since using only Prisma as ORM, this is a plain schema definition for MongoDB collections

const productVariantSchema = {
  _id: { type: 'ObjectId', required: true },
  productId: { type: 'ObjectId', required: true }, // Reference to product in PostgreSQL or MongoDB
  name: { type: 'string', required: true },
  value: { type: 'string', required: true },
  priceModifier: { type: 'number', default: 0 },
  stock: { type: 'number', default: 0 },
  createdAt: { type: 'date', default: Date.now },
  updatedAt: { type: 'date', default: Date.now }
};

export default productVariantSchema;
