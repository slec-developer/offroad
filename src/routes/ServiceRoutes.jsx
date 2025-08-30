import React from "react";
import { Route } from "react-router-dom";
import ServiceHome from "../components/pages/service-center/landing-page/Index";
import AboutUs from "../components/pages/service-center/about-us-page/AboutUs";
import AfterCare from "../components/pages/service-center/services-page/AfterCare";
import ContactPage from "../components/pages/service-center/contact-page/ContactPage";
import ShopPage from "../components/pages/service-center/shop-page/ShopPage";

const serviceRoutes = [
  <Route key="/" index element={<ServiceHome />} />,
  <Route key="about-us" path="about-us" element={<AboutUs />} />,
  <Route key="after-care" path="after-care" element={<AfterCare />} />,
  <Route key="contact-us" path="contact-us" element={<ContactPage />} />,
  <Route key="shop" path="shop" element={<ShopPage />} />,
];

export default serviceRoutes; 