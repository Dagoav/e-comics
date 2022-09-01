import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
