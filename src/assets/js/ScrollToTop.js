import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 }); // Smooth scrolling effect
  }, [pathname]);

  return null;
};

export default ScrollToTop;
