import React, {useState} from 'react'
import './App.css';
import Footer from './Components/Footer';
import Incentive from './Components/Incentive';
// import IncentiveCopy from './Components/Incentive-copy';
import Navigation from './Components/Navigation';
import Package from './Components/Package';
import Slider from './Components/Slider';

function App() {

  const [cartItems, setCartItems] = useState([])
  
  //onAdd is a function that adds items to the cartItems in the state. It also looks for item quantity and adds up 1 for every click on purchase button.

  const onAdd = (product) => {
      const exist = cartItems.find((x) => x.title === product.title);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.title === product.title ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1}]);
      }
    };

//handleClearCart clears the cart and is set to the checkout-button
    const handleClearCart = () => {setCartItems([])}

  return (
    <div>
        <Navigation cartItems={cartItems} />
        <Slider onAdd={onAdd}  />
        {console.log(cartItems)}
        <Incentive />
        <Package cartItems = {setCartItems} handleClearCart={handleClearCart}/>
        <Footer />
    </div>
  );
}

export default App;
