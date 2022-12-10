import {Routes, Route, Navigate} from 'react-router-dom'
import React from 'react'
import DashboardHome from '../pages/DashboardHome'
import DashboardStock from '../pages/DashboardStock'
import DashboardAddProduct from '../pages/DashboardAddProduct'
import DashboardOrders from '../pages/DashboardOrders'
import DashboardEditProduct from '../pages/DashboardEditProduct'

export default function AdminRoutes() {
  
  return (
    <Routes>
      <Route path='/dashboard/' element={<DashboardHome/>}/>
      <Route path='/dashboard/stock' element={<DashboardStock/>}/>
      <Route path='/dashboard/stock/:id' element={<DashboardEditProduct/>}/>
      <Route path='/dashboard/add-product' element={<DashboardAddProduct/>}/>
      <Route path='/dashboard/orders' element={<DashboardOrders/>}/>
      <Route path='*' element={<Navigate to='/dashboard/'/>}/>
    </Routes>
  )
}
