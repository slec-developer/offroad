import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/pages/Layout'
import ScrollToTop  from './assets/js/ScrollToTop'

// Main Page Routes
import Home from "./components/pages/landing-page/index";
import About from './components/pages/about-us/index'
import Services from './components/pages/services-page/index'
import FeaturedProject from './components/pages/featured-project-page/index'
// End of Main Page Routes

// Services Page Routes
// End of Services Page Routes

// Merch Page Routes
// End of Merch Page Routes


function App() {
  return (
    <Router>
      <ScrollToTop/>
      
      <Routes>
        // Main Page
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/featured-project" element={<FeaturedProject/>}></Route>
        </Route>
        // Services Page

        // Merch Page
        
        
      </Routes>
    </Router>
  )
}

export default App