import './App.scss';

import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Drawer from './components/Drawer'

const arr = [
  {id: 1, title: 'Shoes NIKE Quest 3', price: 130, categories: 'Nike', image: './img/image1.png'},
  {id: 2, title: 'Shoes NIKE Revolution 5', price: 120, categories: 'Nike', image: './img/image2.png'},
  {id: 3, title: 'Shoes NIKE PG 5', price: 150, categories: 'Nike', image: './img/image3.png'},
];

function App() {
  return (
    <div className="App">
      <Drawer />
      <Header />
      <main>
        <div className="container">
          <div className="flex items-center justify-between mt-70">
            <h1>
              New Releases
            </h1>
            <input className="search" placeholder="Search..." />
          </div>
          <div className="grid grid-cols-4 gap-32 mt-60">
            {arr.map((obj) => (
              <ProductCard key={obj.id} title={obj.title} price={obj.price} categories={obj.categories} image={obj.image} />
            ))}
          </div>
        </div>
      </main> 
    </div>
  );
}

export default App;
