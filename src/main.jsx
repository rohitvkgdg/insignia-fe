import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import Home from './components/Home'
import Centralized from './components/Centralized'
import Cultural from './components/Cultural.jsx'
import EventDetails from './components/EventDetails'
import Register from './components/Register'
import Branch from './components/Branch'
import BranchEvents from './components/BranchEvents.jsx'
import Confirmation from './components/Confirmation.jsx'
import { RouterProvider,createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const Rout=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='Centralized' element={<Centralized/>}/>
      <Route path='Branch' element={<Branch/>}/>
      <Route path='Cultural' element={<Cultural/>}/>
      <Route path="/branches/:branchId" element={<BranchEvents />} />
      <Route path="/event/:eventId" element={<EventDetails />} />
      <Route path="/register/:eventId" element={<Register />} />
      <Route path="/confirmation/:eventId" element={<Confirmation />} />

      {/* <Route path='Contact' element={<Contact/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Ghub/>}/> */}
    </Route>

  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Rout}/>
  </StrictMode>,
)
