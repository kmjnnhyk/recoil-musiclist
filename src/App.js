import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RecomendationPage from './pages/RecomendationPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='recommendation' element={<RecomendationPage />} />
    </Routes>
  );
}

export default App;
