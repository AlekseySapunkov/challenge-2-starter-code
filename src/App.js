import Header from "./components/Layout/Header";
import React, {useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const cartVisibilityHandler = () => {
    setIsCartVisible(true);
  }
  return (
    <React.Fragment>
     { isCartVisible && < Cart />} 
      <Header onSowCart = {cartVisibilityHandler}/>
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
