import products from "./data";
document.addEventListener('DOMContentLoaded', () => {
// Array to store cart items  
let cart = [];

// Function to render cart items
function renderCart(){

  // Clear cart div
  document.getElementById('cartContent').innerHTML = '';
  
  // Loop through cart 
  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    
    // Display quantity
    itemDiv.innerText = `${item.name} (${item.quantity})`;
    
    document.getElementById('cartContent').appendChild(itemDiv);
  });
  // Create increment and decrement buttons 
const incrementBtn = document.createElement('button');
incrementBtn.innerText = '+';

const decrementBtn = document.createElement('button'); 
decrementBtn.innerText = '-';

// Append buttons and add click listeners
itemDiv.appendChild(incrementBtn);
itemDiv.appendChild(decrementBtn);

incrementBtn.addEventListener('click', () => {
  item.quantity++;
  renderCart(); 
});

decrementBtn.addEventListener('click', () => {
  item.quantity--;
  renderCart();
});
}

// Function to add item to cart
function addToCart(item){
  cart.push(item);
  renderCart();
}

// Initial render
renderCart();

// Create checkout button
const checkoutBtn = document.createElement('button');
checkoutBtn.innerText = 'Checkout';

// Append to cart
const cartContent = document.getElementById('cartContent');
  if (cartContent) {
document.getElementById('cartContent').appendChild(checkoutBtn);
  }
});