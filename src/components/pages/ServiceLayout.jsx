import React from 'react'
import { Outlet } from "react-router-dom";
import NavigationBar from "../includes/service-center/NavigationBar"; 
import Footer from "../includes/service-center/Footer"; 

function ServiceLayout() {
  return (
    <div id="content">
      <NavigationBar /> {/* Global Navigation Bar */}

        <main>
          <Outlet /> {/* Dynamic content based on the route */}
        </main>
      <Footer /> {/* Global Footer */}
    </div>
  )
}

export default ServiceLayout