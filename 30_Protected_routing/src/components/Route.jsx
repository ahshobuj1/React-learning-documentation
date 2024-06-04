import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Navbar from '../layout/Navbar';

import SignUp from '../pages/SighUp';

import Protected from './Protect';

const Routing = () => {
    const [isLogged, setIsLogged] = useState(false);

    let loginButton = isLogged ? (
        <button onClick={() => setIsLogged(!isLogged)}>Log Out</button>
    ) : (
        <button onClick={() => setIsLogged(!isLogged)}>Log In</button>
    );

    return (
        <BrowserRouter>
            <Navbar />
            {loginButton}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/blog"
                    element={
                        <Protected isLogged={isLogged}>
                            <Blog />
                        </Protected>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
