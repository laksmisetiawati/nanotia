import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/header';
import Footer from './components/footer';

// PAGES
import HomePage from './pages/home/home';
import PostDetailPage from './pages/posts/postDetail';

const App = () => (
    <Router>
        <div>
            <Header />

            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/:slug" element={<PostDetailPage/>}/>
            </Routes>

            <Footer />
        </div>
    </Router>
)

export default App;