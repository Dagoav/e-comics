import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar2 from './components/navBar/Navbar2';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import CreateComic from './pages/create-comic/CreateComic';
import CardDetail from './components/card-detail/CardDetail';
import LandingPage from './components/LandingPage/LandingPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path={"/cardDetail/:id"} element={<CardDetail />} />
        <Route path="/create" element={<CreateComic />} />
      </Routes>
    </div>
  );
}

export default App;
