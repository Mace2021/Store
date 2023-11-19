export function searchProducts(query) {
    // Search logic
    const results = products.filter(p => p.title.includes(query));
    
    return results;
  }
  
  document.getElementById('searchIcon').addEventListener('click', () => {
    const searchBox = document.getElementById('searchBox');
    if (searchBox.style.display === 'none') {
      searchBox.style.display = 'block';
    } else {
      searchBox.style.display = 'none';
    }
  });
  
  document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const query = document.getElementById('searchBox').value;
  
    const results = searchProducts(query);
  
    displaySearchResults(results);
  });
  
  function displaySearchResults(results) {
    document.getElementById('product-container').innerHTML = '';
  
    results.forEach(result => {
      const card = createProductCard(result);
      document.getElementById('product-container').appendChild(card);
    });
  }