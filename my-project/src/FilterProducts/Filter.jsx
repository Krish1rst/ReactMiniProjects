import React, { useState } from 'react';

const ProductSection = () => {
  const [products, setProducts] = useState(generateRandomProducts(20));
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [price, setPrice] = useState(0);
  const [randomSearch, setRandomSearch] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  function generateRandomProducts(count) {
    const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen'];
    const products = [];
    for (let i = 0; i < count; i++) {
      const product = {
        id: i + 1,
        name: `Product ${i + 1}`,
        category: categories[Math.floor(Math.random() * categories.length)],
        price: Math.floor(Math.random() * 1000) + 1, // Random price between 1 and 1000
      };
      products.push(product);
    }
    return products;
  }

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleSortChange = (selectedSort) => {
    setSort(selectedSort);
  };

  const handlePriceChange = (selectedPrice) => {
    setPrice(selectedPrice);
  };

  const handleRandomSearch = () => {
    setRandomSearch(true);
  };

  const handleSearch = () => {
    let filtered = products;
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    if (sort) {
      filtered = filtered.sort((a, b) => a[sort] - b[sort]);
    }
    if (price) {
      filtered = filtered.filter(product => product.price <= price);
    }
    if (randomSearch) {
      filtered = filtered.slice(0, Math.min(5, filtered.length)); // Limit to 5 random products
    }
    setFilteredProducts(filtered);
  };

  const handleReset = () => {
    setCategory('');
    setSort('');
    setPrice(0);
    setRandomSearch(false);
    setFilteredProducts(products);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center gap-4">
        <button className="btn bg-blue-400 px-3 py-2 rounded-lg" onClick={() => handleCategoryChange('Electronics')}>Select Electronics</button>
        <button className="btn bg-blue-400 px-3 py-2 rounded-lg" onClick={() => handleSortChange('price')}>Sort by Price</button>
        <input className="range" type="range" min="0" max="1000" step="10" onChange={(e) => handlePriceChange(parseInt(e.target.value))} />
        <button className="btn bg-blue-400 px-3 py-2 rounded-lg" onClick={handleRandomSearch}>Random Search</button>
        <button className="btn bg-blue-400 px-3 py-2 rounded-lg" onClick={handleSearch}>Search</button>
        <button className="btn bg-blue-400 px-3 py-2 rounded-lg" onClick={handleReset}>Reset</button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredProducts.map(product => (
          <li key={product.id} className="p-4 border rounded shadow">
            <p className="font-bold">{product.name}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSection;
