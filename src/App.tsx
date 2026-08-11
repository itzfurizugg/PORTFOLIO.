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

  return (
    <div className="flex flex-col min-h-screen bg-brand-background text-brand-text">

      {!isProjectDetail && (
        <div className="sticky top-0 z-10 shrink-0">
          <Navbar />
        </div>
      )}

      <div className="flex-1">
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
