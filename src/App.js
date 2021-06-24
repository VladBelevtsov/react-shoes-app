import React from 'react';
import './App.scss';

import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Drawer from './components/Drawer'


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://60d4a0e761160900173cbc17.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...cartItems, obj])
  }

  return (
    <div className="App">
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)}/>
      <main>
        <div className="container">
          <div className="flex items-center justify-between mt-70">
            <h1>
              New Releases
            </h1>
            <input className="search" placeholder="Search..." />
          </div>
          <div className="grid grid-cols-4 gap-32 mt-60">
            {items.map((item) => (
              <ProductCard 
                key={item.id} 
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
