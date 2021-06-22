import './App.scss';

import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Drawer from './components/Drawer'

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
        
            <ProductCard />
            
          </div>
        </div>
      </main> 
    </div>
  );
}

export default App;
