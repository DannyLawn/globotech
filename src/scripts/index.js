import "../pages/index.css";
import { initialProducts } from "../scripts/products.js";

const productsContainer = document.querySelector('.products__container');

function createProduct(object) {
  const productTemplate = productsContainer.querySelector('.product-template').content;
  const productItem = productTemplate.querySelector('.products__item').cloneNode(true);
  productItem.querySelector('.products__image').src = object.image;
  productItem.querySelector('.products__image').alt = object.name;
  productItem.querySelector('.products__title').textContent = object.name;
  productItem.querySelector('.products__text').textContent = object.description;
  return productItem;
}

function addProduct (newProduct) {
  productsContainer.append(newProduct);
}


initialProducts.forEach(product => {
  addProduct(createProduct(product));
});
