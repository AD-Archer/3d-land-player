import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App; 