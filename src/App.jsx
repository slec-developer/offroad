import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/pages/Layout'

import Home from "./components/pages/landing-page/index";
import About from './components/pages/about-us/index'
import FeaturedProject from './components/pages/featured-project-page/index'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About/>}></Route>
          <Route path="/featured-project" element={<FeaturedProject/>}></Route>
        </Route>
        
      </Routes>
    </Router>
  )
}

export default App