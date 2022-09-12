import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import CreateComic from './pages/create-comic/CreateComic';
import CardDetail from './components/card-detail/CardDetail';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import Favorites from './pages/favorites/Favorites';
import{useEffect}from "react";
import {useDispatch} from "react-redux"
import {getAllVolumes} from "./redux/actions";

function App() {
const dispatch =useDispatch()


  useEffect(() => {
    dispatch(getAllVolumes());
    }, [dispatch]);
  
  return (
    

    
    <div className="App">
    
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path={"/cardDetail/:id"} element={<CardDetail />} />
        <Route path="/create" element={<CreateComic />} />
        <Route path='/fav' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
