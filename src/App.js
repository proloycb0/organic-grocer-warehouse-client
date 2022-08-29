import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Shared/Footer";
import Header from "./pages/Shared/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import RequireAuth from "./pages/Login/RequireAuth";
import InventoryDetail from "./pages/Home/InventoryDetail";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from "./pages/Home/Blogs";
import ManageInventories from "./pages/ManageInventories/ManageInventories";
import AddNewItem from "./pages/AddNewItem/AddNewItem";
import MyItems from "./pages/MyItems/MyItems";
import Notfound from "./pages/Shared/NotFound";


function App() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/inventory/:id" element={
            <RequireAuth>
              <InventoryDetail />
            </RequireAuth>} />
          <Route path="/manage" element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>} />
          <Route path="/addNewItem" element={
            <RequireAuth>
              <AddNewItem />
            </RequireAuth>} />
          <Route path="/myItems" element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
