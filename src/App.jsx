import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/pages/Layout'
import ServiceLayout from './components/pages/ServiceLayout'
import MerchLayout from './components/pages/MerchLayout'
import ScrollToTop  from './assets/js/ScrollToTop'

import NotFound from './components/pages/main/error-page/NotFound'

// Main Page Routes
import mainRoutes from './routes/MainRoutes'
// End of Main Page Routes

// Services Page Routes
import serviceRoutes from './routes/ServiceRoutes'
// End of Services Page Routes

// Merch Page Routes
import merchRoutes from './routes/MerchRoutes';
// End of Merch Page Routes



function App() {

  // Chatbot using tawk.io
  useEffect(() => {
    var s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/67d4d8df1d25d1190be36412/1imbmuafd"; 
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);


  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="*" element={<NotFound />} />
        {/* Main Page */}
        <Route path="/" element={<Layout/>}>
          {mainRoutes}
        </Route>
        {/* Service Center Page */}
        <Route path="/service-center" element={<ServiceLayout/>}>
          {/* <Route index element={<ServiceHome />} /> */}
          {serviceRoutes}
        </Route>
        {/* Merch Page */}
        <Route path="/merch" element={<MerchLayout/>}>
          {/* <Route index element={<MerchLayout />} /> */}
          {merchRoutes}
        </Route>
       
      </Routes>
    </Router>
  )
}

export default App