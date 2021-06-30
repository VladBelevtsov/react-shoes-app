import React from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import './App.scss';

import Header from './components/Header'
import Drawer from './components/Drawer'

import Home from './pages/Home'
import Favorites from './pages/Favorites'


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios.get('https://60d4a0e761160900173cbc17.mockapi.io/items').then((res) => {
      setItems(res.data)
    })
    axios.get('https://60d4a0e761160900173cbc17.mockapi.io/cart').then((res) => {
      setCartItems(res.data)
    })
    axios.get('https://60d4a0e761160900173cbc17.mockapi.io/favorites').then((res) => {
      setFavorites(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://60d4a0e761160900173cbc17.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://60d4a0e761160900173cbc17.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://60d4a0e761160900173cbc17.mockapi.io/favorites/${obj.id}`)
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id))
      } else {
        const { data } = await axios.post('https://60d4a0e761160900173cbc17.mockapi.io/favorites', obj)
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Failed to add to favorites')
    }
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="App">
      {cartOpened && <Drawer items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)}/>

      <Route path='/' exact>
        <Home 
          items={items} 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          onChangeSearchInput={onChangeSearchInput} 
          onAddToCart={onAddToCart} 
          onAddToFavorite={onAddToFavorite}
        />
      </Route>
      <Route path="/favorites">
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>
      </Route>
      
    </div>
  );
}

export default App;
