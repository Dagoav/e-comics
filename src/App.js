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
// import DashboardRoutes from './pages/dashboard/DashboardRoutes';
// import Admin from './pagxes/dashboard/admin/Admin'
import DashboardNav from './pages/dashboard/dashboardNav/DashboardNav';
import Admin from './pages/dashboard/admin/Admin';
import Users from './pages/dashboard/users/Users'
import Settings from './pages/dashboard/settings/Settings';
import UploadComic from './pages/dashboard/uploadComic/UploadComic'




function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path={"/cardDetail/:id"} element={<CardDetail />} />
        <Route path='/fav' element={<Favorites />} />
        <Route path='/login' element={<LoginApp />} />
        <Route path='/checkout' element={<Checkout />} />

        {/* Dashboard */}
        <Route path='dashboard' element={<DashboardNav />} >
          <Route path='admin' element={<Admin />} />
          <Route path='users' element={<Users />} />
          <Route path='settings' element={<Settings />} />
          <Route path='upload' element={<UploadComic />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
