import React from 'react'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Register from './Pages/Register'
import Login from './Pages/Login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './Pages/AdminDashboard/Dashboard'
import Main from './Components/Admin/Main'
import Profile from './Components/Admin/Profile'
import AllProducts from './Components/Admin/AllProducts'
import Checkout from './Pages/Checkout'
import OrderAlert from './Components/Admin/OrderAlert'
import Users from './Components/Admin/Users'
const App = () => {
   
  return <> 
    <Router>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/cart/:id' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='main' element={<Main/>} />
            <Route path='profile' element={<Profile/>} />
            <Route path='products' element={<AllProducts/>} />
            <Route path='orders' element={<OrderAlert />} />
            <Route path='users' element={<Users />} />

          </Route>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/*' element={<>404</>}/>


      </Routes>
    </Router>
    
  </>
}

export default App