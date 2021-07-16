import React from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import AppContext from './context'
import './App.scss';

import Header from './components/Header'
import Drawer from './components/Drawer'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() {
      try {
        const cartResponse = await axios.get('https://60d4a0e761160900173cbc17.mockapi.io/cart')
        const favoritesResponse = await axios.get('https://60d4a0e761160900173cbc17.mockapi.io/favorites')
        const itemsResponse = await axios.get('https://60d4a0e761160900173cbc17.mockapi.io/items') 
        
        setIsLoading(false)

        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)
      } catch (error) {
        alert('Something went wrong :(')
        console.error(error);
      }
    }

    fetchData()
  }, [])

  const onAddToCart = async (obj) => {
    try {
      const finfItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (finfItem) {
        setCartItems(prev => prev.filter((item) => Number(item.parentId) !== Number(obj.id)))
        await axios.delete(`https://60d4a0e761160900173cbc17.mockapi.io/cart/${finfItem.id}`)
      } else {
        setCartItems((prev) => [...prev, obj])
        const {data} = await axios.post('https://60d4a0e761160900173cbc17.mockapi.io/cart', obj)
        setCartItems((prev) => prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            }
          }
          return item
        }))
      }
    } catch (error) {
      alert('Something went wrong :(')
      console.error(error);
    }
  }

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://60d4a0e761160900173cbc17.mockapi.io/cart/${id}`)
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))
    } catch (error) {
      alert('Something went wrong :(')
      console.error(error);
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://60d4a0e761160900173cbc17.mockapi.io/favorites/${obj.id}`)
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://60d4a0e761160900173cbc17.mockapi.io/favorites', obj)
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Failed to add to favorites')
      console.arror(error);
    }
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider value={{cartItems, favorites, items, isItemAdded, onAddToCart, onAddToFavorite, setCartItems}}>
      <div className="App">
        <Drawer items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)} opened={cartOpened}/>
        
        <Header onClickCart={() => setCartOpened(true)}/>

        <Route path='/' exact>
          <Home 
            items={items}
            cartItems={cartItems} 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            onChangeSearchInput={onChangeSearchInput} 
            onAddToCart={onAddToCart} 
            onAddToFavorite={onAddToFavorite}
            isLoading={isLoading}
          />
        </Route>
        
        <Route path="/favorites">
          <Favorites/>
        </Route>

        <Route path="/orders">
          <Orders/>
        </Route>
        
      </div>
    </AppContext.Provider>
  );
}

export default App;
