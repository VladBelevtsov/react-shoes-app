import React from 'react';
import axios from 'axios'
import './App.scss';

import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Drawer from './components/Drawer'


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios.get('https://60d4a0e761160900173cbc17.mockapi.io/items').then((res) => {
      setItems(res.data)
    })
    axios.get('https://60d4a0e761160900173cbc17.mockapi.io/cart').then((res) => {
      setCartItems(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://60d4a0e761160900173cbc17.mockapi.io/cart', obj)
    setCartItems((prev) => [...cartItems, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://60d4a0e761160900173cbc17.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="App">
      {cartOpened ? <Drawer items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)}/>
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
                title={item.title} 
                price={item.price} 
                categories={item.categories} 
                image={item.image} 
                onAdd={onAddToCart}
              />
            ))}
          </div>
        </div>
      </main> 
    </div>
  );
}

export default App;
