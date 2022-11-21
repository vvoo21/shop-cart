import './style.css';
import {
  productsList, shopCart, openShopCart, shopCartModal, menuModal, menuIcon, menuClose,
} from './modules/variables.js';
import addProduct from './modules/addProduct.js';
import { removeProduct } from './modules/functions.js';

// add product to the cart
productsList.addEventListener('click', addProduct);

// remove product from the cart
shopCart.addEventListener('click', removeProduct);

// open shop cart
openShopCart.addEventListener('click', () => {
  shopCartModal.classList.toggle('show');
});

// open menu
menuIcon.addEventListener('click', () => {
  menuModal.classList.toggle('show');
});

// close menu
menuClose.addEventListener('click', () => {
  menuModal.classList.remove('show');
});
