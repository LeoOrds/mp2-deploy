import { Route, Routes, } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Wellness from "./pages/Wellness";
import FamiliMeds from "./pages/FamiliMeds";
import FamilyPlan from "./pages/FamilyPlan";
import Faqs from "./pages/Faqs";
import About from "./pages/About";
import Reqapp from "./pages/Reqapp";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Patientos from "./pages/Patientos";
import Footer from "./Footer";


function App() {
  return( 
    <>
      <Navbar />
      <Home/>
      <Footer />
        {/* <Routes>
          <Route path="/*" element={<Home/>}/>
          <Route path="/Wellness" element={<Wellness/>}/>
          <Route path="/FamiliMeds" element={<FamiliMeds/>}/>
          <Route path="/FamilyPlan" element={<FamilyPlan/>}/>
          <Route path="/Faqs" element={<Faqs/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Reqapp" element={<Reqapp/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Patientos" element={<Patientos/>}/>
        </Routes>
        <Footer /> */}
    </>
  );
}


export default App;