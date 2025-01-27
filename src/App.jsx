import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import Feedback from './pages/Feedback/Feedback';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { VideoProvider } from './contexts/VideoContext';

function App() {
    return (
        <ThemeProvider>
            <VideoProvider>
                <Routes basename="/3d-land-player">
                    <Route path="/" element={<Home />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/feedback" element={<Feedback />} />
                </Routes>
            </VideoProvider>
        </ThemeProvider>
    );
}

export default App; 