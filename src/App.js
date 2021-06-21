import './App.scss';
import logo from './images/logo.png'
import productImg from './images/image.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container flex items-center justify-between">
          <div className="flex items-center logo">
            <img width={20} height={20} src={logo} alt="Logo" />
            <h3>Shoes App.</h3>
          </div>
          <ul className="flex">
            <li>
              <button className="cursor-pointer">
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
      <main>
        <div className="container">
          <div className="flex items-center justify-between mt-70">
            <h1>
              New Releases
            </h1>
            <input className="search" placeholder="Search..." />
          </div>
          <div className="grid grid-cols-4 gap-32 mt-60">


            {/* ==================================================== */}


            <div className="productCard">
              <div className="productCard__img">
                <img src={productImg} alt="title" />
              </div>
              <div className="productCard__details">
                <span>Nike</span>
                <h3>Shoes NIKE Quest 3</h3>
                <span>$150</span>
                <button>Add to cart</button>
              </div>
              <div className="productCard__addToWishlist">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>


            {/* ==================================================== */}

            
            <div className="productCard">
              <div className="productCard__img">
                <img src={productImg} alt="title" />
              </div>
              <div className="productCard__details">
                <span>Nike</span>
                <h3>Shoes NIKE Quest 3</h3>
                <span>$150</span>
                <button>Add to cart</button>
              </div>
              <div className="productCard__addToWishlist">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>


            {/* ==================================================== */}

            
            <div className="productCard">
              <div className="productCard__img">
                <img src={productImg} alt="title" />
              </div>
              <div className="productCard__details">
                <span>Nike</span>
                <h3>Shoes NIKE Quest 3</h3>
                <span>$150</span>
                <button>Add to cart</button>
              </div>
              <div className="productCard__addToWishlist">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>


            {/* ==================================================== */}

            
            <div className="productCard">
              <div className="productCard__img">
                <img src={productImg} alt="title" />
              </div>
              <div className="productCard__details">
                <span>Nike</span>
                <h3>Shoes NIKE Quest 3</h3>
                <span>$150</span>
                <button>Add to cart</button>
              </div>
              <div className="productCard__addToWishlist">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
            

            {/* ==================================================== */}

            
          </div>
        </div>
      </main> 
    </div>
  );
}

export default App;
