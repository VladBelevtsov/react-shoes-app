import React from 'react';
import ProductCard from '../components/ProductCard'
import AppContext from '../context'
import Info from '../components/Info'

const Favorites = () => {
  const {favorites, onAddToFavorite} = React.useContext(AppContext)

  return (
    <main>
      <div className="container">
        <div className="flex items-center justify-between mt-70 mb-60">
          <h1>
            Favorites List
          </h1>
        </div>
        {favorites.length > 0 ? (
          <div className="grid grid-cols-4 gap-32">
            {favorites.map((item, index) => (
              <ProductCard 
                key={index} 
                favorited={true}
                onFavorite={onAddToFavorite}
                {...item}
              />
            ))}
          </div>
        ) : (
          <Info title="Your Favorites List is Empty" image="./img/heart.png" />
        )}
        
      </div>
    </main> 
  );
}

export default Favorites;
