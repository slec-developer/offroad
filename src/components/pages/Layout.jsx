import React from 'react'
import { Outlet } from "react-router-dom";
import NavigationBar from "./../includes/NavigationBar"; 
import Footer from "./../includes/Footer"; 

function Layout() {
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

export default Layout