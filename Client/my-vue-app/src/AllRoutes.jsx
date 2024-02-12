import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Product from './pages/Product'

import SingleProduct from './pages/SingleProduct'
import DeliverAddress from './pages/DeliverAddress'

const AllRoutes = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<SignUp/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/order/address' element={<DeliverAddress/>} />
      
        <Route path='/singleproduct' element={<SingleProduct/>} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        
    </Routes>
  )
}

export default AllRoutes