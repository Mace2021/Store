import products from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  let cart = [];

  function updateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
      cartIcon.textContent = "🛒" + cart.length;
    }
  }

  function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += parseFloat(cart[i].description[0].price);
    }
    return total.toFixed(2);
  }

  function addToCart(product) {
    cart.push(product);
    updateCartIcon();
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartPage();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartIcon();
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartPage();
  }

  function updateCartPage() {
    const cartItems = document.getElementById('cartItems');
    if (cartItems) {
      cartItems.innerHTML = '';
      cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${product.title} - $${product.description[0].price}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => removeFromCart(index));
        cartItem.appendChild(deleteButton);
        cartItems.appendChild(cartItem);
      });

      const total = calculateTotal();
      const totalDiv = document.getElementById('total');
      if (totalDiv) {
        totalDiv.textContent = `Total: $${total}`;
      }
    }
  }








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

const productContainer = document.getElementById('product-container');
if (productContainer) {
  products.forEach((product) => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });
}

const checkoutButton = document.createElement('button');
checkoutButton.textContent = 'Checkout';
checkoutButton.addEventListener('click', () => {
  window.location.href = 'cart.html'; // Replace with your payment page URL
});

function displayCartItems() {
  if (productContainer) {
    productContainer.appendChild(checkoutButton);
  }
}

// Update cart page on load
const storedCart = localStorage.getItem('cart');
if (storedCart) {
  cart = JSON.parse(storedCart);
  updateCartIcon();
  updateCartPage();
}

document.querySelector('.fa-bars').addEventListener('click', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.style.display === 'block') {
      link.style.display = 'none';
    } else {
      link.style.display = 'block';
    }
  });
});

document.getElementById('searchIcon').addEventListener('click', () => {
  const searchBox = document.getElementById('searchBox');
  if (searchBox.style.display === 'none') {
    searchBox.style.display = 'block';
  } else {
    searchBox.style.display = 'none';
  }
});

// Search form submission event listener
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchBox = document.getElementById('searchBox');
  const searchTerm = searchBox.value.toLowerCase();
  const searchResults = searchProducts(searchTerm);
  displaySearchResults(searchResults);
});

// Function to search products based on the search term
function searchProducts(searchTerm) {
  return products.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );
}

// Function to display search results in the search-container
function displaySearchResults(results) {
  const searchContainer = document.getElementById('search-container');
  if (searchContainer) {
    searchContainer.innerHTML = ''; // Clear previous search results

    if (results.length === 0) {
      searchContainer.textContent = 'No results found.';
    } else {
      results.forEach(result => {
        const resultCard = createProductCard(result);
        searchContainer.appendChild(resultCard);
      });
    }
  }
}
});