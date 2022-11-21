import './style.css';
import { productsList, shopCart } from './modules/variables.js';
import addProduct from './modules/addProduct.js';
import { removeProduct } from './modules/functions.js';

// add product to the cart
productsList.addEventListener('click', addProduct);

// remove product from the cart
shopCart.addEventListener('click', removeProduct);
