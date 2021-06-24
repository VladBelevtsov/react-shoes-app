import React from 'react';
import logo from '../images/logo.png'

const Header = (props) => {
  return (
    <header className="header" >
      <div className="container flex items-center justify-between">
        <div className="flex items-center logo">
          <img width={20} height={20} src={logo} alt="Logo" />
          <h3>Shoes App.</h3>
        </div>
        <ul className="flex">
          <li>
            <button className="cursor-pointer" onClick={props.onClickCart}>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </li>
          <li>
            <button className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </header> 
  );
}

export default Header;
