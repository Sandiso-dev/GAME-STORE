import {Route, Routes} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {CartContainer} from './components/cart/CartContainer'
import ProductContainer from './components/home/ProductContainer'
import { BrowserRouter } from 'react-router-dom'
import {ToastContainer} from  'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ShopContextProvider } from './context/ShopContext'


function App() {


  return (
    <main>
          <div className='container'>  
    <ShopContextProvider>  
    <BrowserRouter>
    <ToastContainer style={{backgroundColor:'darkslategray',
    fontWeight:'bolder'}}/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ProductContainer/>} />
      <Route path='/cartcontainer' element={<CartContainer/>} />
    </Routes>
    </BrowserRouter>
    </ShopContextProvider>  
          </div>
    </main>
   
  )
}

export default App
