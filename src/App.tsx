import Header from './components/Header';
import Foot from './components/Foot';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import { useState } from 'react'

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart ? <Cart /> : <ProductList />

  const content = (
    <>
    <Header viewCart={viewCart} setViewCart={setViewCart} />
    {pageContent}
    <Footer viewCart={viewCart} />
    </>
  )


  return (
    <div className="App">

    </div>
  )
}

export default App
