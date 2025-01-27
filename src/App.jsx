import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './styles/globalStyles.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App; 