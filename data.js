
const products = [
  { image: '/images/Garri.JPG', title: 'Garri', numberOfItems: 10, description: [{ weight: 'lbs', price: '$50' }] },
  { image: '/images/Oil.JPG', title: 'Oil', numberOfItems: 0, description: [{ weight: '5gals', price: '$50'  }] },
  { image: '/images/Cat Fish.jpg', title: 'Cat Fish', numberOfItems: 5, description: [{ weight: '5lbs', price: '$50' }] },
  { image: '/images/cowskinpic.png', title: 'Cow Skin', numberOfItems: 10, description: [{ weight: '5lbs', price: '$50' }] },
  { image: '/images/Sardinefish.png', title: ' Sardine fish (Shawa)', numberOfItems: 2, description: [{ weight: '5lbs', price: '$50' }] },
  { image: './images/IMG_4372.jpg', title: 'Product 6', numberOfItems: 8, description: [{ weight: '5lbs', price: '$50' }] },
  { image: '/images/Oil.jpg', title: 'Oil', numberOfItems: 0, description: [{ weight: '2gals', price: '$50'  }] },
  { image: '/images/Garri.JPG', title: 'Garri', numberOfItems: 10, description: [{ weight: 'lbs', price: '$50' }] },
  { image: '/images/Oil.JPG', title: 'Oil', numberOfItems: 0, description: [{ weight: '5gals', price: '$50'  }] },
  { image: '/images/Cat Fish.jpg', title: 'Cat Fish', numberOfItems: 5, description: [{ weight: '5lbs', price: '$50' }] },
  { image: '/images/cowskinpic.png', title: 'Cow Skin', numberOfItems: 10, description: [{ weight: '5lbs', price: '$50' }] },
  { image: '/images/Sardinefish.png', title: ' Sardine fish (Shawa)', numberOfItems: 2, description: [{ weight: '5lbs', price: '$50' }] },
  { image: './images/IMG_4372.jpg', title: 'Product 6', numberOfItems: 8, description: [{ weight: '5lbs', price: '$50' }] },
  { image: '/images/Oil.jpg', title: 'Oil', numberOfItems: 0, description: [{ weight: '2gals', price: '$50'  }] },

];
document.addEventListener('DOMContentLoaded', () => {
  const addToCartBtn = document.getElementById('addToCart');

  addToCartBtn.addEventListener('click', () => {
    // Get product data
    const item = {
      name: document.getElementById('productName').innerText,
      price: document.getElementById('productPrice').innerText
    };

    // Add to cart
    addToCart(item);
  });
});

export default products;

