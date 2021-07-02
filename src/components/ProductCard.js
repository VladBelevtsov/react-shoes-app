import React from 'react';
import ContentLoader from "react-content-loader"
// import productImg from '../images/image.png'
import AppContext from '../context'

const ProductCard = ({
    id,
    image, 
    categories, 
    title, 
    price, 
    onAdd, 
    onFavorite, 
    favorited = false,
    loading = false
  }) => {

  const {isItemAdded} = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = React.useState(favorited)

  const onClickAdd = () => {
    onAdd({id, image, categories, title, price})
  }

  const onClickWish = () => {
    onFavorite({id, image, categories, title, price})
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="productCard" >
      {
        loading ?  (<ContentLoader 
          speed={2}
          width={257}
          height={384}
          viewBox="0 0 257 384"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="6" ry="6" width="257" height="227" /> 
          <rect x="0" y="242" rx="6" ry="6" width="40" height="19" /> 
          <rect x="0" y="276" rx="6" ry="6" width="210" height="19" /> 
          <rect x="0" y="310" rx="6" ry="6" width="90" height="19" /> 
          <rect x="0" y="344" rx="6" ry="6" width="257" height="40" />
        </ContentLoader>) : (<>
          <div className="productCard__img">
            <img src={image} alt="title" />
          </div>
          <div className="productCard__details">
            <span>{categories}</span>
            <h3>{title}</h3>
            <span>${price}</span>
            <button className={isItemAdded(id) ? 'checked' : ''} onClick={onClickAdd}>{isItemAdded(id) ? "Added" : "Add to cart"}</button>
          </div>
          <div className="productCard__addToWishlist" >
            <button className={isFavorite ? 'active' : ''} onClick={onClickWish}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </>)
      }
    </div>
  );
}

export default ProductCard;
