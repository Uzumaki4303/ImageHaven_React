import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Navbar,
  Hero,
  About,
  Footer,
  Feedback,
  Selected_Image
} from "./Components/Components" ;

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between min-h-screen bg-[#003049] bg-center gap-5">
        <Navbar />
        <main className="flex h-auto justify-center mt-[68px] mb-5">
          <Routes>
            <Route path="ImageHaven_React/" element={<Hero />} />
            <Route path="ImageHaven_React/about" element={<About />} />
            <Route path="ImageHaven_React/feedback" element={<Feedback />} />
            <Route path="ImageHaven_React/image-viewer" element={<Selected_Image />} />{" "}
            {/* Add this route if you have ImageViewer */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
