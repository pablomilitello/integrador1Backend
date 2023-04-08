import { cartModel } from '../db/models/carts.model.js';

class CartManager {
  getCartById = async (id) => {
    try {
      const cart = await cartModel.find({ _id: id });
      return cart;
    } catch (error) {
      console.log(error);
    }
  };

  addCarts = async () => {
    try {
      const newCarts = await cartModel.create({ products: [] });
      return newCarts;
    } catch (error) {
      console.log(error);
    }
  };

  addProductsToCart = async (cid, pid) => {};
}

export default CartManager;
