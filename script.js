import products from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
    cartIcon.textContent = `🛒 ${itemCount}`;
  }

  function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.image;
    image.addEventListener('click', () => {
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
      alert(`Added ${product.title} to cart.`);
      cart.push({
        id: product.id,
        title: product.title,
        price: product.description[0].price,
        quantity: 1
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCart();
      updateCartIcon();
    });
    card.appendChild(addToCartButton);

    const decrementButton = document.createElement('button');
    decrementButton.textContent = '-';
    decrementButton.addEventListener('click', () => {
      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity--;
        updateCart();
        updateCartIcon();
      }
    });
    

    return card;
  }

  function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
  
    let total = 0;
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      
  
      const name = document.createElement('span');
      name.textContent = item.title;
      
      cartItem.appendChild(name); 
      const price = document.createElement('span');
      price.textContent = ('$'+item.price.toFixed(2));
      cartItem.appendChild(price);
      
  
      const quantity = document.createElement('span');
      quantity.textContent = `Qty: ${item.quantity}`; 
      cartItem.appendChild(quantity);

      const decrementButton = document.createElement('button');
      decrementButton.textContent = '-';
      decrementButton.addEventListener('click', () => {
        if (item.quantity > 0) {
          item.quantity--;
          updateCart();
          updateCartIcon();
        }
      });
      cartItem.appendChild(decrementButton);
  
      
  
      const incrementButton = document.createElement('button');
      incrementButton.textContent = '+';
      incrementButton.addEventListener('click', () => {
        item.quantity++;
        updateCartIcon();
        updateCart();
       
      });
      cartItem.appendChild(incrementButton);
  
      
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
          cart.splice(existingItemIndex, 1);
          updateCart();
          updateCartIcon();
        }
        if(cart.length === 0) {
          localStorage.removeItem('cart');
          updateCart(); 
        }
      
        updateCartIcon();
      });
      cartItem.appendChild(deleteButton);
  
      cartContainer.appendChild(cartItem);

      total += item.price * item.quantity;
    });
  
    const totalPrice = document.createElement('div');
    totalPrice.textContent = `Total Price:  $${total.toFixed(2)}`;
    cartContainer.appendChild(totalPrice);

    // Checkout button
    const checkoutButton = document.createElement('button');
    checkoutButton.textContent = 'Checkout';
    cartContainer.appendChild(checkoutButton);
  }
  

  const productContainer = document.getElementById('product-container');
  if (productContainer) {
    products.forEach((product) => {
      const productCard = createProductCard(product);
      productContainer.appendChild(productCard);
    });
  }

  updateCart();
  updateCartIcon();
});



