import './App.css';
import {
  Routes,
  Route,
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
import Orders from './pages/dashboard/orders/Orders';
import UploadComic from './pages/dashboard/uploadComic/UploadComic'

import UserProfile from './pages/UserProfile/UserProfile';
import Register from './components/login/Register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path={"/cardDetail/:id"} element={<CardDetail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/fav' element={<Favorites />} />
        <Route path='/checkout' element={<Checkout />} />

        {/* login */}
        <Route path='/login' element={<LoginApp />} />
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/singup' element={<Register />} />

        {/* Dashboard */}
        <Route path='/dashboard/*' element={<DashboardNav />} >
          <Route path='admin' element={<Admin />} />
          <Route path='users' element={<Users />} />
          <Route path='orders' element={<Orders />} />
          <Route path='upload' element={<UploadComic />} />
        </Route>

      </Routes>
    </div>
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