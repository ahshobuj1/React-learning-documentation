import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/Error';
import Blog from './pages/Blog';
import LearnBlog from './pages/learnBlog';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:title" element={<LearnBlog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
