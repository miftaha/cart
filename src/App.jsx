import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals } from './features/cart/cartSlice'
import { useEffect } from 'react'
function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
