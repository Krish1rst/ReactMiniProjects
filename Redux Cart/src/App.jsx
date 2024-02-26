import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch,useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const dispatch=useDispatch();
  const {cartItems}=useSelector((state)=>state.cart);
  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])
  return (
    <main>
      <Navbar/>
      <CartContainer/>
    </main>
  );
}
export default App;
