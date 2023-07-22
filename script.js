import products from './data.js';

const productContainer = document.getElementById('product-container');

function createProductCard(product) {
  // Function implementation remains unchanged
}

// Function to add item to cart
function addToCart(product) {
  // Add the product to the cartContent element
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.textContent = product.title;
  cartContent.appendChild(cartItem);
}

// Event listener for cart icon click
document.getElementById('menuIcon').addEventListener('click', function () {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
});

// Event listener for checkout button click
document.getElementById('checkoutBtn').addEventListener('click', () => {
  // Implement your checkout logic here
  alert('Checkout functionality to be implemented.');
});

// Create product cards and add event listener for Add to Cart button
products.forEach((product) => {
  const productCard = createProductCard(product);
  productContainer.appendChild(productCard);

  const addToCartBtn = productCard.querySelector('button'); // Updated selector to target the button within the product card
  addToCartBtn.addEventListener('click', () => addToCart(product));
});
