import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/pages/main/landing-page";
import About from "../components/pages/main/about-us";
import Services from "../components/pages/main/services-page";
import Collection from "../components/pages/main/collection-page/featured-project-page";
import FeaturedProject from "../components/pages/main/collection-page/featured-project-page/FeaturedProject";
import FeaturedUnit from "../components/pages/main/collection-page/featured-project-page/FeaturedUnit";
import ProjectUnit from "../components/pages/main/collection-page/featured-project-page/ProjectUnit";
import FeaturedBuild from "../components/pages/main/collection-page/featured-build-page";
import ProjectBuild from "../components/pages/main/collection-page/featured-build-page/ProjectBuild";
import Blog from "../components/pages/main/media-page/blog-page/Blog"
import ShowBlog from "../components/pages/main/media-page/blog-page/ShowBlog"
import Video from "../components/pages/main/media-page/video-page";
import AllVideo from "../components/pages/main/media-page/video-page/AllVideo";
import RegisterPage from "../components/pages/main/auth/RegisterPage";

const mainRoutes = [
  <Route key="/" index element={<Home />} />,
  <Route key="/about-us" path="about-us" element={<About />} />,
  <Route key="/services" path="services" element={<Services />} />,
  <Route key="/collection" path="collection" element={<Collection />} />,
  <Route key="/featured-project" path="featured-project" element={<FeaturedProject />} />,
  <Route key="/featured-unit/:categories" path="featured-unit/:categories" element={<FeaturedUnit />} />,
  <Route key="/project-unit/:categories/:project_unit" path="project-unit/:categories/:project_unit" element={<ProjectUnit />} />,
  <Route key="/featured-build" path="featured-build" element={<FeaturedBuild />} />,
  <Route key="/project-build/:unit_id" path="project-build/:unit_id" element={<ProjectBuild />} />,
  <Route key="Blog" path="blog/:categories" element={<Blog/>} />,
  <Route key="Blog" path="blog/:categories/:article" element={<ShowBlog/>} />,
  <Route key="video" path="video" element={<Video />} />,
   <Route key="all-video" path="all-video" element={<AllVideo />} />,
  <Route key="register" path="register" element={<RegisterPage />} />,
];

export default mainRoutes; 