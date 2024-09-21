import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar, Hero, About, Footer, Feedback, Selected_Image } from "./Components/Components";
import { spinner } from "./Components/Images";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#003049]">
          <img src={spinner} alt="Loading..." className="h-52 w-52 animate-spin" />
        </div>
      ) : (
        <Router>
          <div className="flex flex-col justify-between min-h-screen bg-[#003049] bg-center gap-5">
            <Navbar />
            <main className="flex h-auto justify-center mt-[68px] mb-5">
              <Routes>
                <Route path="ImageHaven_React/" element={<Hero />} />
                <Route path="ImageHaven_React/about" element={<About />} />
                <Route path="ImageHaven_React/feedback" element={<Feedback />} />
                <Route path="ImageHaven_React/image-viewer" element={<Selected_Image />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
