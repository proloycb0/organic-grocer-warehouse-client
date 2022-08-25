import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Shared/Footer";
import Header from "./pages/Shared/Header";
import Home from "./pages/Home/Home";


function App() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
