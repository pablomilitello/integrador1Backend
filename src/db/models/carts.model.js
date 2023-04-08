import mongoose from 'mongoose';

const cartsSchema = new mongoose.Schema({
  products: {
    type: Array,
  },
});

export const cartModel = mongoose.model('Carts', cartsSchema);
