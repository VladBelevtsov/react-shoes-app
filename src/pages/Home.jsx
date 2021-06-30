import React from 'react';
import ProductCard from '../components/ProductCard'

const Home = ({items, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorite}) => {
  return (
    <main>
      <div className="container">
        <div className="flex items-center justify-between mt-70">
          <h1>
            {searchValue ? `Search by request: "${searchValue}"` : 'New Releases'}
          </h1>
          <input onChange={onChangeSearchInput} value={searchValue} className="search" placeholder="Search..." />
        </div>
        <div className="grid grid-cols-4 gap-32 mt-60">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
            <ProductCard 
              key={index} 
              onAdd={(obj) => onAddToCart(obj)}
              onFavorite={(obj) => onAddToFavorite(obj)}
              {...item}
            />
          ))}
        </div>
      </div>
    </main> 
  );
}

export default Home;
