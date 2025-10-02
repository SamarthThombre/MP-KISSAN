import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashBoard from './pages/dashboard/Dashboard'
import Login from './pages/register/Login'
import Register from './pages/register/Register'
import Admin from './pages/admin/Admin'
import Profile from './pages/profile/Profile'
import Crops from './pages/crops/Crops'
import MarketPlace from './pages/market_place/MarketPlace'
import Notifications from './pages/notifications/Notifications'
import Error404 from './pages/404';
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

  return(
     
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<DashBoard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='crops' element={<Crops/>} />
        <Route path='/market-place' element={<MarketPlace/>} />
        <Route path='/notifications' element={<Notifications/>} />
        <Route path='/404' element={<Error404/>} />
      </Routes>

      {/* <Footer/> */}
    </>
  )
}

export default App
