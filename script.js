import products from './data.js';

let cart = [];

function updateCartIcon() {
  const cartIcon = document.querySelector('.cart-icon');
  cartIcon.textContent = cart.length;
}

function addToCart(product) {
  cart.push(product);
  updateCartIcon();
  // Store the cart in local storage so it can be accessed later
  localStorage.setItem('cart', JSON.stringify(cart));
  // Get the cartItems div
  const cartItems = document.getElementById('cartItems');

  // Create a new div for the cart item
  const cartItem = document.createElement('div');
  cartItem.textContent = `${product.title} - ${product.price}`;
  cartItems.appendChild(cartItem);
      // Adds a product to the cart list
      it('should add a product to the cart list when addToCart is called', () => {
        const product = { title: Product.title, price: product.price };
        addToCart(product);
        expect(cart).toContain(product);
      });
}

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

      // Add the product to the cart
      addToCart(product);
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

const checkoutButton = document.createElement('button');
checkoutButton.textContent = 'Checkout';
checkoutButton.addEventListener('click', () => {
  window.location.href = 'cart.html'; // Replace with your payment page URL
});
productContainer.appendChild(checkoutButton);

});
