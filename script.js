import products from './data.js';
document.addEventListener('DOMContentLoaded', () => {
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


  return card;
}

products.forEach((product) => {
  const productCard = createProductCard(product);
  productContainer.appendChild(productCard);

  // Add to cart button for each product
  const addToCartButton = document.createElement('button');
  addToCartButton.textContent = 'Add to Cart';
  addToCartButton.addEventListener('click', () => {
    // Here, use the product parameter and stockStatus related to the current product
    if (product.numberOfItems > 0) {
      alert(`Added ${product.title} to cart.`);
      product.numberOfItems--;
      stockStatus.textContent = product.numberOfItems > 0 ? 'In Stock' : 'Out of Stock';
      stockStatus.classList.remove('in-stock', 'out-of-stock');
      stockStatus.classList.add(product.numberOfItems > 0 ? 'in-stock' : 'out-of-stock');

      // Add the product to the cart
      addToCart(product);
    } else {
      alert(`${product.title} is out of stock.`);
    }
  });

  // Append the add to cart button to the product card
  productCard.appendChild(addToCartButton);
});



document.querySelector('.cart-link').addEventListener('click', function() {
  // Replace 'cart.html' with the actual URL of your shopping cart page
  window.location.href = 'cart.html';
});





let cart = [];

// Add product to cart
const addToCartButton = document.createElement('button');
addToCartButton.id = 'addToCart'; // Add this line to set the ID
addToCartButton.textContent = 'Add to Cart';
addToCartButton.addEventListener('click', () => {
  const product = products[0]; // You need to define the product to add to the cart
  if (product.numberOfItems > 0) {
    alert(`Added ${product.title} to cart.`);
    product.numberOfItems--;
    // Update the stock status and its class here
    renderCart(); // Update the cart UI
  } else {
    alert(`${product.title} is out of stock.`);
  }
});
card.appendChild(addToCartButton);



// Update cart UI
function renderCart() {

  let html = '';

  cart.forEach(item => {
    html += `
      <div>
        ${item.name} - $${item.price} x ${item.quantity}
      </div>
    `;
  });

  document.getElementById('cartItems').innerHTML = html;

}

// Initial render
renderCart();

// Checkout button click
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length > 0) {
    alert('Checkout Successful!');
    // Implement any additional logic here, such as sending an order to the server
    // Clear the cart after successful checkout
    cart = [];
    renderCart(); // Update the cart UI
  } else {
    alert('Your cart is empty. Add items before checking out.');
  }
});

// Add product
addToCart(products[0]);

});