import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Centralized from './Centralized/Centralized.jsx'
import Cultural from './Cultural/Cultural.jsx'
import App from './App.jsx'
import EventDetails from './EventDetails/EventDetails.jsx'
import Register from './Register/Register.jsx'
import Branch from './Branch/Branch.jsx'
import BranchEvents from './Bevents/BranchEvents.jsx'
import Confirmation from './Confirmation/Confirmation.jsx'
import { Router, RouterProvider,createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'

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
