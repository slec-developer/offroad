import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/pages/Layout'
import ServiceLayout from './components/pages/ServiceLayout'
import ScrollToTop  from './assets/js/ScrollToTop'

import NotFound from './components/pages/main/error-page/NotFound'
// Main Page Routes
import Home from "./components/pages/main/landing-page/index";
import About from './components/pages/main/about-us/index'
import Services from './components/pages/main/services-page/index'
import Collection from './components/pages/main/collection-page/featured-project-page/index'
import FeaturedProject from './components/pages/main/collection-page/featured-project-page/FeaturedProject'
import FeaturedUnit from './components/pages/main/collection-page/featured-project-page/FeaturedUnit'
import ProjectUnit from './components/pages/main/collection-page/featured-project-page/ProjectUnit'
import FeaturedBuild from './components/pages/main/collection-page/featured-build-page/index'
import ProjectBuild from './components/pages/main/collection-page/featured-build-page/ProjectBuild'
import Blog from './components/pages/main/media-page/blog-page/index'
import Video from './components/pages/main/media-page/video-page/index'
// End of Main Page Routes

// Services Page Routes
import ServiceHome from "./components/pages/service-center/landing-page/Index";
// End of Services Page Routes

// Merch Page Routes
// End of Merch Page Routes


function App() {
  return (
    <Router>
      <ScrollToTop/>
      
      <Routes>
        <Route path="*" element={<NotFound />} />
        // Main Page
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/collection" element={<Collection/>}></Route>
          <Route path="/featured-project" element={<FeaturedProject/>}></Route>
          <Route path="/featured-unit/:categories" element={<FeaturedUnit/>}></Route>
          <Route path="/project-unit/:categories/:project_unit" element={<ProjectUnit/>}></Route>
          <Route path="/featured-build" element={<FeaturedBuild/>}></Route>
          <Route path="/project-build/:unit_id" element={<ProjectBuild/>}></Route>
          <Route path="/blog/:categories" element={<Blog/>}></Route>
          <Route path="/video" element={<Video/>}></Route>
        </Route>

        // Service Center Page
        <Route path="/service-center" element={<ServiceLayout/>}>
          <Route index element={<ServiceHome />} />
        </Route>
        // Merch Page
        
        
      </Routes>
    </Router>
  )
}

export default App