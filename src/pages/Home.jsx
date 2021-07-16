import React from 'react';
import ProductCard from '../components/ProductCard'


const Home = ({
    items, 
    searchValue, 
    setSearchValue, 
    onChangeSearchInput, 
    onAddToCart, 
    onAddToFavorite,
    isLoading
  }) => {



  const renderItems = () => {
    return (isLoading ? [...Array(4)] : items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())))
      .map((item, index) => (
      <ProductCard 
        key={index} 
        onAdd={(obj) => onAddToCart(obj)}
        onFavorite={(obj) => onAddToFavorite(obj)}
        loading={isLoading}
        {...item}
      />
    ))
  } 


  return (
    <main>
      <div className="container">
        <div className="flex items-center justify-between mt-70 mb-60">
          <h1>
            {searchValue ? `Search by request: "${searchValue}"` : 'New Releases'}
          </h1>
          <input onChange={onChangeSearchInput} value={searchValue} className="search" placeholder="Search..." />
        </div>
        <div className="grid grid-cols-4 gap-32">
          {renderItems()}
        </div>
      </div>
    </main> 
  );
}

export default Home;
