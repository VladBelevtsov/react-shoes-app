import React from 'react';
import ProductCard from '../components/ProductCard'

const Favorites = ({ items, onAddToFavorite }) => {
  return (
    <main>
      <div className="container">
        <div className="flex items-center justify-between mt-70">
          <h1>
            Favorites List
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-32 mt-60">
          {items.map((item, index) => (
            <ProductCard 
              key={index} 
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item}
            />
          ))}
        </div>
      </div>
    </main> 
  );
}

export default Favorites;
