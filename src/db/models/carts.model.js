import mongoose from 'mongoose';

const cartsSchema = new mongoose.Schema({});

export const cartModel = mongoose.model('Carts', cartsSchema);
