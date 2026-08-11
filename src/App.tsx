import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/navbar";
import Hero from "./sections/hero";
import AboutPage from "./sections/aboutPage";
import ProjectList from "./sections/project";
import ProjectDetail from "./sections/projectdetails";
import Contact from "./sections/contact";

function App() {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith("/project/");
  const isHome = location.pathname === "/";
  const [navVisible, setNavVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= 767
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, []);

  const showNav = isMobile || !isScrolling || navVisible;

  return (
    <div className="flex flex-col min-h-screen bg-brand-background text-brand-text">

      {!isProjectDetail && (
        <div
          className="fixed top-0 left-0 right-0 z-50"
          onMouseLeave={() => setNavVisible(false)}
        >
          <div
            className={`absolute top-0 left-0 right-0 h-8 ${
              showNav ? "pointer-events-none" : ""
            }`}
            onMouseEnter={() => setNavVisible(true)}
          />
          <div
            className={`transition-all duration-300 ease-out ${
              showNav
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0 pointer-events-none"
            }`}
          >
            <Navbar />
          </div>
        </div>
      )}

      <div className={`flex-1 ${isHome ? "" : "pt-16"}`}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectList />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
