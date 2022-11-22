import './style.css';
import {
  productsList, shopCart, openShopCart, shopCartModal, menuModal, menuIcon, menuClose, home, products, about, contact, homeLink, productsLink, aboutLink, contactLink, menuHome, menuProducts, menuAbout, menuContact, links} from './modules/variables.js';
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

links.forEach((link) => { 
  link.addEventListener('click', () => {
    menuModal.classList.remove('show');
  });
});

//navigate to the different sections
homeLink.addEventListener('click', () => {
  home.style.display = 'block';
  products.style.display = 'block';
  about.style.display = 'block';
  contact.style.display = 'none';
});
productsLink.addEventListener('click', () => {
  home.style.display = 'none';
  products.style.display = 'block';
  about.style.display = 'none';
  contact.style.display = 'none';
});
aboutLink.addEventListener('click', () => {
  home.style.display = 'none';
  products.style.display = 'none';
  about.style.display = 'block';
  contact.style.display = 'none';
});
contactLink.addEventListener('click', () => {
  home.style.display = 'none';
  products.style.display = 'none';
  about.style.display = 'none';
  contact.style.display = 'block';
});

menuHome.addEventListener('click', () => {
  home.style.display = 'block';
  products.style.display = 'block';
  about.style.display = 'block';
  contact.style.display = 'none';
});
menuProducts.addEventListener('click', () => {
  home.style.display = 'none';
  products.style.display = 'block';
  about.style.display = 'none';
  contact.style.display = 'none';
});
menuAbout.addEventListener('click', () => {
  home.style.display = 'none';
  products.style.display = 'none';
  about.style.display = 'block';
  contact.style.display = 'none';
});
menuContact.addEventListener('click', () => {
  home.style.display = 'none';
  products.style.display = 'none';
  about.style.display = 'none';
  contact.style.display = 'block';
});