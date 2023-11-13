import products from './data.js';

const productContainer = document.getElementById('product-container');

function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  const image = document.createElement('img');
  image.src = product.image;
  // Add a click event listener to the image
  image.addEventListener('click', () => {
    // Toggle a class to make the image bigger
    image.classList.toggle('enlarged');
  });
  card.appendChild(image);

  const title = document.createElement('h3');
  title.textContent = product.title;
  card.appendChild(title);

  const stockStatus = document.createElement('p');
  stockStatus.textContent = product.numberOfItems > 0 ? 'In Stock' : 'Out of Stock';
  stockStatus.classList.add(product.numberOfItems > 0 ? 'in-stock' : 'out-of-stock');
  card.appendChild(stockStatus);

  const description = document.createElement('p');
  const weight = product.description[0].weight;

  const price = product.description[0].price;
  description.textContent = `Weight: ${weight}, Price: ${price}`;
  card.appendChild(description);

  const addToCartButton = document.createElement('button');
  addToCartButton.textContent = 'Add to Cart';
  addToCartButton.addEventListener('click', () => {
    if (product.numberOfItems > 0) {
      alert(`Added ${product.title} to cart.`);
      product.numberOfItems--;
      stockStatus.textContent = product.numberOfItems > 0 ? 'In Stock' : 'Out of Stock';
      stockStatus.classList.remove('in-stock', 'out-of-stock');
      stockStatus.classList.add(product.numberOfItems > 0 ? 'in-stock' : 'out-of-stock');
    } else {
      alert(`${product.title} is out of stock.`);
    }
  });
  card.appendChild(addToCartButton);

  return card;
}

products.forEach((product) => {
  const productCard = createProductCard(product);
  productContainer.appendChild(productCard);
});



