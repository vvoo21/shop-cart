import { shopContainer } from './variables.js';
import { products } from './readProductData.js';

const createShopCart = () => {
    // clean HTML shopContainer.innerHTML = ""; or:

    while (shopContainer.firstChild){
        shopContainer.removeChild(shopContainer.firstChild);
    }
  
    products.forEach(product => {
      const {id, image, title, price, quantity} = product;
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
      deleteBtn.innerHTML = `<img class="cart-modal-delete" id="${id}" src="../images/icon-delete.svg" alt="delete icon">`
      row.appendChild(deleteBtn);
    }); 
  }

  export default createShopCart;