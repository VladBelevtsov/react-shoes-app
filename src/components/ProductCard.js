import React from 'react';
// import productImg from '../images/image.png'

const ProductCard = (props) => {
  return (
    <div className="productCard" >
      <div className="productCard__img">
        <img src={props.image} alt="title" />
      </div>
      <div className="productCard__details">
        <span>{props.categories}</span>
        <h3>{props.title}</h3>
        <span>${props.price}</span>
        <button onClick={() => alert(props.title)}>Add to cart</button>
      </div>
      <div className="productCard__addToWishlist" >
        <button  >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
