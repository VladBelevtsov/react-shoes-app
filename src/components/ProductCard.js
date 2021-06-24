import React from 'react';
// import productImg from '../images/image.png'

const ProductCard = ({image, categories, title, price, onAdd}) => {
  const [isAdded, setIsAdded] = React.useState(false)

  const onClickAdd = () => {
    onAdd({image, categories, title, price})
    setIsAdded(true)
  }

  return (
    <div className="productCard" >
      <div className="productCard__img">
        <img src={image} alt="title" />
      </div>
      <div className="productCard__details">
        <span>{categories}</span>
        <h3>{title}</h3>
        <span>${price}</span>
        <button className={isAdded ? 'checked' : ''} onClick={onClickAdd}>{isAdded ? "Added" : "Add to cart"}</button>
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
