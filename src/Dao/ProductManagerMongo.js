import { productModel } from '../db/models/products.model.js';

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  getProducts = async () => {
    try {
      const products = await productModel.find();
      return products;
    } catch (error) {
      console.log(error);
    }
  };

  //getProductById = async (id) => {};

  addProducts = async (product) => {
    try {
      const newProduct = await productModel.create(product);
      return newProduct;
    } catch (error) {
      console.log(error);
    }
  };

  //updateProduct = async (id, obj) => {};

  //deleteProducts = async () => {};

  //deleteProductsById = async (id) => {};
}

export default ProductManager;
