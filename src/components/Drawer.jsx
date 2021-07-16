import React from 'react';
import Info from './Info'
import axios from 'axios'
import AppContext from '../context'

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000))


const Drawer = ({onClose, onRemove, items = [], opened}) => {
  const {cartItems, setCartItems} = React.useContext(AppContext)
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  
  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      await axios.post('https://60d4a0e761160900173cbc17.mockapi.io/orders', {
        items: cartItems,
      })

      setIsOrderCompleted(true)
      setCartItems([])
      
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        console.log(item);
        await axios.delete(`https://60d4a0e761160900173cbc17.mockapi.io/cart/${item.id}`)
        await delay()
      }

    } catch (error) {
      alert('Something went wrong :(')
    }
    setIsLoading(false)
  }

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

  return (
    
    <div className={`overlay ${opened ? 'overlayVisible' : ''}`}>
      <div className="closeSide" onClick={onClose}/>
      <div className="drawer flex flex-col">
        <h3>
          Cart:
        </h3>

        {
          items.length > 0 ? ( 
            <div className="items" >

              {items.map((obj) => (
                <div key={obj.id} className="cartItem flex items-center">
                  <img width={70} src={obj.image} alt="title" />
                  <div>
                    <span>{obj.categories}</span>
                    <p>{obj.title}</p>
                    <span>${obj.price}</span>
                  </div>
                  <div  className="remove">
                    <button onClick={() => onRemove(obj.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>) : ( 
              <Info 
                title={isOrderCompleted ? "Order completed" : "Cart is Empty"} 
                image={isOrderCompleted ? "./img/complete-order.png" : "./img/emptyCart.png"} 
              />
        )}

        
        

        <div className="cartTotalBlock">
          <div className="cartTotal flex items-center justify-between">
            <span>Total:</span>
            <p>${totalPrice}</p>
          </div>

          <button disabled={isLoading} className="checkout" onClick={onClickOrder}>Checkout</button>
        </div>
      </div>
    </div>

  );
}

export default Drawer;
