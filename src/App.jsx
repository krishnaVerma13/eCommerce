
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import HomePg from './pages/HomePg';
import TopOfferBanner from './components/HomePage/TopOfferBanner';
import NavBar from './components/Header/NavBar';
import AboutPg from './pages/AboutPg';
import ContactPg from './pages/ContactPg';
import SignUpPg from './pages/SignUpPg';
import Footer from './components/Header/Footer';
import LoginPg from './pages/LoginPg';
import AddToCard from './pages/AddToCard';

export default function Widget() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <TopOfferBanner/>
     <NavBar/>
      <Routes>
     
      <Route path="/" element={<HomePg  />} />
      <Route path="/Home" element={<HomePg  />} />
      <Route path="/About" element={<AboutPg  />} />
      <Route path="/Contact" element={<ContactPg  />} />
      <Route path="/SignUp" element={<SignUpPg  />} />
      <Route path="/Login" element={<LoginPg  />} />
      <Route path="/Cart" element={<AddToCard  />} />
      
      
        </Routes>
        <Footer/>
    </Router>
  );
}
