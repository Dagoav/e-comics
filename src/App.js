import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import CardDetail from './components/card-detail/CardDetail';
import LandingPage from './pages/LandingPage/LandingPage.jsx';

import LoginApp from './components/login/login';
import Favorites from './pages/favorites/Favorites';
import Checkout from './components/pagos/Checkout'
import DashboardNav from './pages/dashboard/dashboardNav/DashboardNav';
import Admin from './pages/dashboard/admin/Admin';
import Users from './pages/dashboard/users/Users'
import Settings from './pages/dashboard/settings/Settings';
import UploadComic from './pages/dashboard/uploadComic/UploadComic'
import AdmDashboard from './pages/admin-dashboard/admDashboard'
import UserProfile from './pages/UserProfile/UserProfile';
import Register from './components/login/Register';
import {AuthContextProvider} from './context/authContext'
import {UserRoute} from './components/routes/UserRoute'
import {PublicRoute} from './components/routes/PublicRoute'
import {AdminRoute} from './components/routes/AdminRoute'
import Logout from './components/login/Logout';
import ModalLogin from './components/account/ModalLogin';

function App() {
  return (
    <div className="App">
     
         
          <Routes>
                <Route path='/' element ={<PublicRoute/>}>
                    <Route path= "/cardDetail/:id" element={<CardDetail />} />
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path='/login' element={<ModalLogin />} />
                    <Route path='/singup' element={<Register />} />
                </Route>

                <Route path = '/user' element={<UserRoute/>}>
                    <Route path ='/user' element={<UserProfile />} />
                    <Route path="/user/home" element={<Home />} />
                    <Route path='/user/cardDetail/:id' element={<CardDetail />} />
                    <Route path='/user/fav' element={<Favorites />} />
                    <Route path='/user/users' element={<Users />} />
                    <Route path="/user/shop" element={<Shop />} />
                    <Route path='/user/checkout' element={<Checkout />} />
                    <Route path='/user/logout' element={<Logout />} />
                </Route>

                <Route path = '/admin' element={<AdminRoute/>}>
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/admin/dashboard' element={<DashboardNav />}/>
                    <Route path="/admin/home" element={<Home />} />
                    <Route path='/admin/settings' element={<Settings />} />
                    <Route path='/admin/profileupload' element={<UploadComic />} />
                    <Route path='/admin/logout' element={<Logout />} />
                    <Route path='/admin/cardDetail/:id' element={<CardDetail />} />
                </Route>
          </Routes>
       
   
    </div>
  );
}

export default App;
