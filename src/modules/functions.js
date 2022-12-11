import { clearShopCart, shopContainer } from './variables.js';

let products = [];

const syncStorage = () => {
  localStorage.setItem('products', JSON.stringify(products));
};

const createShopCart = () => {
  // clean HTML shopContainer.innerHTML = ""; or
  while (shopContainer.firstChild) {
    shopContainer.removeChild(shopContainer.firstChild);
  }

  products.forEach((product) => {
    const {
      id, image, title, price, quantity,
    } = product;
    const row = document.createElement('tr');
    shopContainer.appendChild(row);

    const imgContainer = document.createElement('td');
    row.appendChild(imgContainer);

    const img = document.createElement('img');
    img.src = image;
    img.classList.add('cart-img');
    imgContainer.appendChild(img);

    const name = document.createElement('td');
    name.textContent = title;
    name.classList.add('cart-description');
    row.appendChild(name);

    const priceProduct = document.createElement('td');
    priceProduct.textContent = price;
    priceProduct.classList.add('cart-modal-price');
    row.appendChild(priceProduct);

    const qty = document.createElement('td');
    qty.textContent = quantity;
    qty.classList.add('cart-modal-qty');
    row.appendChild(qty);

    const deleteBtn = document.createElement('td');
    deleteBtn.innerHTML = `<a class="cart-modal-delete" id="${id}" href="#">X</a>`;
    row.appendChild(deleteBtn);
  });

  syncStorage();
};

// show local storage products in the DOM when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
  products = JSON.parse(localStorage.getItem('products')) || [];

  createShopCart();
});

const readProductData = (product) => { //
  const productInfo = {
    image: product.querySelector('.product-img').src,
    title: product.querySelector('.product-name').textContent,
    price: product.querySelector('.product-price').textContent,
    id: product.querySelector('button').getAttribute('id'),
    quantity: 1,
  };//

  // check if product already exists in the cart
  const inCart = products.some((product) => product.id === productInfo.id);
  if (inCart) {
    // update quantity
    const productsUpdated = products.map((product) => {
      // if product already exists in the cart, increase quantity
      if (product.id === productInfo.id) {
        product.quantity += 1;
        return product; // return the object with updated quantity
      }
      return product; // return objects that did not match
    });
    products = [...productsUpdated];
  } else {
    // add product to the cart
    products = [...products, productInfo];
  }

  createShopCart();
};

export const removeProduct = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('cart-modal-delete')) {
    // get the id of the clicked product
    const productId = e.target.getAttribute('id');
    // filter out the product that was deleted
    products = products.filter((product) => (product.id !== productId));
    createShopCart(); // update the cart
  }
};

// clear shop cart
clearShopCart.addEventListener('click', () => {
  products = []; // empty the array
  // clean HTML
  while (shopContainer.firstChild) {
    shopContainer.removeChild(shopContainer.firstChild);
  }
  syncStorage();
});

export default readProductData;