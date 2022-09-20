import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
// Pages
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import CardDetail from './components/card-detail/CardDetail';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import DashboardNav from './pages/dashboard/dashboardNav/DashboardNav';

import Favorites from './pages/favorites/Favorites';
import Checkout from './components/pagos/Checkout'
import Admin from './pages/dashboard/admin/Admin';
import Users from './pages/dashboard/users/Users'
import Orders from './pages/dashboard/orders/Orders';
import UploadComic from './pages/dashboard/uploadComic/UploadComic'
import UserProfile from './pages/UserProfile/UserProfile';
import Reviews from './pages/dashboard/reviews/Reviews';
import Register from './components/login/Register';
import { UserRoute } from './components/routes/UserRoute'
import { PublicRoute } from './components/routes/PublicRoute'
import { AdminRoute } from './components/routes/AdminRoute'
import Logout from './components/login/Logout';
//import Tabslogin from './components/account/Tabslogin';
import { Notfound } from './components/NotFound/Nofound';
import ModalLogin from './components/account/ModalLogin';
import ModalRegister from './components/account/ModalRegister';

function App() {
  return (
    <div className="App">
      {/*----------------------------------rutas publicas-----------------------------------------  */}
      <Routes>
        <Route path='/' element={<PublicRoute />}>
          <Route path="/" element={<LandingPage />} />
          <Route path='/login' element={<ModalLogin />} />
          <Route path='/singup' element={<ModalRegister />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cardDetail/:id" element={<CardDetail />} />
        </Route>
        {/* --------------------------------rutas usuario ----------------------------------------- */}

        <Route path='/user' element={<UserRoute />}>
          <Route path='/user' element={<UserProfile />} />
          <Route path="/user/landing" element={<LandingPage />} />
          <Route path="/user/home" element={<Home />} />
          <Route path='/user/cardDetail/:id' element={<CardDetail />} />
          <Route path='/user/fav' element={<Favorites />} />
          <Route path='/user/users' element={<Users />} />
          <Route path="/user/shop" element={<Shop />} />
          <Route path='/user/shop/checkout' element={<Checkout />} />
          <Route path='/user/logout' element={<Logout />} />
        </Route>
        {/*-------------------------------- rutas de administador ----------------------------------*/}
        <Route path='/dashboard' element={<AdminRoute />} >
          
          {/* <Route path='/admin/dashboard' element={<DashboardNav />} /> */}
          <Route path='/dashboard' element={<DashboardNav />} >
            <Route path='admin' element={<Admin />} />
            <Route path='users' element={<Users />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='orders' element={<Orders />} />
            <Route path='upload' element={<UploadComic />} />
            <Route path='logout' element={<Logout />} />
          </Route>
        </Route>

        <Route path='/*' element={<Notfound />} />
      </Routes>
    </div >
  );
}

export default App;


// export const AppRouter = () => {

//   const { usuario } = useContext(AuthContext);
//   return (
//     <BrowserRouter>
//       <div  >
//         <Routes>
//           <Route path="/login" element={usuario.logged ? (<Navigate to="/" />) : (<LoginScreen />)} />
//           <Route path="/*" element={usuario.logged ? (<DashboardRoutes />) : (<Navigate to="/login" />)} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   )
// }