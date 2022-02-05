import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Installation from "./components/Installation/Installation";
import SkeletonPage from "./components/SkeletonPage/SkeletonPage";
function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <div className="grid grid-cols-12">
          <div className="col-span-2 border h-screen">
            <Navbar />
          </div>
          <div className="col-span-10 flex p-4">
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
