import './style.css';
import {productsList, shopCart} from './modules/variables';
import addProduct from './modules/addProduct.js';
import {removeProduct} from './modules/readProductData.js';

// add product to the cart
productsList.addEventListener('click', addProduct);

// remove product from the cart
shopCart.addEventListener('click', removeProduct);

