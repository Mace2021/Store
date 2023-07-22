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
