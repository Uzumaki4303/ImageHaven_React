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
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/image-viewer" element={<Selected_Image />} />{" "}
            {/* Add this route if you have ImageViewer */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

    // <Feedback/>
  );
}

export default App;

// use for pagination
// useEffect(() => {
//    Retrieve previous page number from location state
//   const previousPage = location.state?.currentPage;

//   if (typeof previousPage === "number" && previousPage > 0) {
//     setActive(previousPage);
//   } else {
//     setActive(1);
//   }
// }, [location.state]);

// fetch images using api

// console.log(response.data);
