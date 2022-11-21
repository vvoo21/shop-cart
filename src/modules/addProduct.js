import readProductData from './readProductData.js';

const addProduct = (e) => {
  e.preventDefault();

  if(e.target.classList.contains('product-add-btn')){
    const selectProduct = e.target.parentElement.parentElement;
    readProductData(selectProduct);
  }
}

export default addProduct;