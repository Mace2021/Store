import products from './data.js';

const productContainer = document.getElementById('product-container');

function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  const image = document.createElement('img');
  image.src = product.image;
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



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
document.getElementById("menuIcon").addEventListener("click", function() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
});

// JavaScript code to handle cart functionality
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const cartContent = document.getElementById('cartContent');
const checkoutBtn = document.getElementById('checkoutBtn');

const products = [
  // Your products array here
];

// Function to add item to cart
function addToCart(product) {
  // Add the product to the cartContent element
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.textContent = product.title;
  cartContent.appendChild(cartItem);
}

// Function to display the cart modal
function displayCartModal() {
  cartModal.style.display = 'block';
}

// Function to close the cart modal
function closeCartModal() {
  cartModal.style.display = 'none';
}

// Event listener for cart icon click
cartIcon.addEventListener('click', displayCartModal);

// Event listener for checkout button click
checkoutBtn.addEventListener('click', () => {
  // Implement your checkout logic here
  alert('Checkout functionality to be implemented.');
});

// Create product cards and add event listener for Add to Cart button
products.forEach((product) => {
  const productCard = createProductCard(product);
  productContainer.appendChild(productCard);

  const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
  addToCartBtn.addEventListener('click', () => addToCart(product));
});
