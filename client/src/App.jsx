import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/HotelOwner/Layout';
import Dashboard from './pages/HotelOwner/Dashboard';
import AddRoom from './pages/HotelOwner/AddRoom';
import ListRoom from './pages/HotelOwner/ListRoom';
import { Toaster } from 'react-hot-toast';
const App = () => {

  const isOwnerPath=useLocation().pathname.includes("owner");



  return (
    <div>
      <Toaster/>
      {!isOwnerPath && <Navbar/>}
      {false && <HotelReg/>} 
      <div className='min-h-[70vh]'>
       <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/rooms' element={<AllRooms/>}/>
           <Route path='/rooms/:id' element={<RoomDetails/>}/>
           <Route path='/my-bookings' element={<MyBookings/>}/>

           {/* hotel Owner Routes */}
           <Route path='/owner' element={<Layout/>}>
           {/* we write like this bcz dashboard is parent and other is child*/}
           <Route index element={<Dashboard/>}/>
            <Route path="add-room" element={<AddRoom/>}/>
             <Route path="list-room" element={<ListRoom/>}/>

           </Route>
           
       </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App