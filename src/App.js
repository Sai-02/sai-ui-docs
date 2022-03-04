import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Installation from "./components/Installation/Installation";
import SkeletonPage from "./components/SkeletonPage/SkeletonPage";
import ModalPage from "./components/Modal/ModalPage";
import { useState } from "react";
function App() {
  const [shouldOpenNavbar, setShouldOpenNavbar] = useState(false);
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header setShouldOpenNavbar={setShouldOpenNavbar} />
        <div className="grid lg:grid-cols-12 grow">
          <div
            className={`absolute z-10  bg-white w-[40%] lg:w-full lg:static lg:col-span-2 border h-full ${
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
              <Route path="/modal" element={<ModalPage />} />
              <Route path="/" exact element={<Navigate to="/installation" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
