import createShopCart from './createShopCart.js'
import {clearShopCart, shopContainer} from './variables.js';

export let products = [];

const readProductData = (product) => {
  const productInfo = {
    image: product.querySelector('.product-img').src,
    title: product.querySelector('.product-name').textContent,
    price: product.querySelector('.product-price').textContent,
    id: product.querySelector('button').getAttribute('id'),
    quantity: 1
  }

  // check if product already exists in the cart
  const inCart = products.some(product => product.id === productInfo.id);
  if(inCart){
    // update quantity
    const productsUpdated = products.map(product => {
      // if product already exists in the cart, increase quantity
      if(product.id === productInfo.id){
        product.quantity++;
        return product; // return the object with updated quantity
      } else {
        return product; // return objects that did not match
      }
    });
    products = [...productsUpdated];
  } else {
    // add product to the cart
    products = [...products, productInfo];
  }

  createShopCart();
}

export const removeProduct = (e) => {
  if(e.target.classList.contains('cart-modal-delete')){
    // get the id of the clicked product
    const productId = e.target.getAttribute('id');
    // filter out the product that was deleted
    products = products.filter(product => (product.id !== productId));
    createShopCart(); // update the cart
    
  }
}

// clear shop cart
clearShopCart.addEventListener('click', () => {
  products = []; // empty the array
  // clean HTML
  while (shopContainer.firstChild){
    shopContainer.removeChild(shopContainer.firstChild);
  };
});

export default readProductData;