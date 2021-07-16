import React from 'react';
import ProductCard from '../components/ProductCard'
import axios from 'axios'
import Info from '../components/Info'

const Orders = () => {
  const [orders, setOrders] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://60d4a0e761160900173cbc17.mockapi.io/orders')
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setIsLoading(false)
      } catch (error) {
        alert('Something went wrong :(')
        console.error(error);
      }
    })()
  }, [])

  return (
    <main>
      <div className="container">
        <div className="flex items-center justify-between mt-70 mb-60">
          <h1>
            Orders List
          </h1>
        </div>
        {orders.length > 0 ? (
          <div className="grid grid-cols-4 gap-32">
            {(isLoading ? [...Array(4)] : orders).map((item, index) => (
              <ProductCard 
                key={index}
                loading={isLoading}
                {...item}
              />
            ))}
          </div>
        ) : (
          <Info title="You have no orders yet" image="./img/orders.png" />
        )}
      </div>
    </main> 
  );
}

export default Orders;
