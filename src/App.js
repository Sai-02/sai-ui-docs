import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Installation from "./components/Installation/Installation";
import SkeletonPage from "./components/SkeletonPage/SkeletonPage";
import { useState } from "react";
function App() {
  const [shouldOpenNavbar, setShouldOpenNavbar] = useState(false);
  return (
    <Router>
      <div className="">
        <Header setShouldOpenNavbar={setShouldOpenNavbar} />
        <div className="grid lg:grid-cols-12">
          <div
            className={`absolute z-10  bg-white w-[40%] lg:w-full lg:static lg:col-span-2 border h-screen ${
              shouldOpenNavbar ? "" : "hidden"
            } lg:block`}
          >
            <Navbar setShouldOpenNavbar={setShouldOpenNavbar} />
          </div>
          <div
            className="flex lg:col-span-10 max-w-full  p-4"
            style={{
              maxWidth: "100vw",
            }}
          >
            <Routes>
              <Route path="/installation" element={<Installation />} />
              <Route path="/skeleton" element={<SkeletonPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
