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

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path={"/cardDetail/:id"} element={<CardDetail />} />
        <Route path="/create" element={<CreateComic />} />
      </Routes>
    </div>
  );
}

export default App;
