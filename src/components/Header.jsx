import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import AppContext from '../context'

const Header = (props) => {
  const { cartItems } = React.useContext(AppContext)
  return (
    <header className="header" >
      <div className="container flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center logo">
            <img width={20} height={20} src={logo} alt="Logo" />
            <h3>Shoes App.</h3>
          </div>
        </Link>
        <ul className="flex">
          <li>
            <button className={cartItems.length > 0 ? 'cursor-pointer active' : 'cursor-pointer'} onClick={props.onClickCart}>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </li>
          <li>
            <Link to="/favorites">
              <button className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <button className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header> 
  );
}

export default Header;
