import React from 'react';
import productImg from '../images/image.png'

const Drawer = () => {
  return (
    
    <div className="overlay" style={{display: 'none'}}>
      <div className="drawer flex flex-col">
        <h3>
          Cart:
        </h3>

        <div className="items" >

          <div className="cartItem flex items-center">
            <img width={70} src={productImg} alt="title" />
            <div>
              <span>Nike</span>
              <p>Shoes NIKE Quest 3</p>
              <span>$150</span>
            </div>
            <div  className="remove">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="cartItem flex items-center">
            <img width={70} src={productImg} alt="title" />
            <div>
              <span>Nike</span>
              <p>Shoes NIKE Quest 3</p>
              <span>$150</span>
            </div>
            <div  className="remove">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="cartTotalBlock">
          <div className="cartTotal flex items-center justify-between">
            <span>Total:</span>
            <p>$300.00</p>
          </div>

          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>

  );
}

export default Drawer;
