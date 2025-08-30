import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import NavigationBar from "../includes/merch/NavigationBar"; 
import Footer from "../includes/merch/Footer"; 

function MerchLayout() {
  useEffect(() => {
    document.body.classList.add('merchant-page');
    return () => {
      document.body.classList.remove('merchant-page');
    };
  }, []);
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

export default MerchLayout