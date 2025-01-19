
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";

import Petcare_deatails from './pages/Petcare_deatails';
import HomePg from './pages/HomePg';
import AboutPg from './pages/AboutPg';
import PortfolioPg from './pages/PortfolioPg';
import JassicaFlat from './pages/JassicaFlat';
import UrbanStudio from './pages/UrbanStudio';
import UrbanStudio2 from './pages/UrbanStudio2';
export default function Widget() {
  return (
    <Router>
      <Header />
      <Routes>
     
      <Route path="/" element={<HomePg  />} />
      <Route path="/about" element={<AboutPg/>} />
      <Route path="/portfolio" element={<PortfolioPg/>} />
      <Route path="/petcare_det" element={<Petcare_deatails/>} />
      <Route path="/jassica_det" element={<JassicaFlat/>} />
      <Route path="/urban_det" element={<UrbanStudio/>} />
      <Route path="/urban2_det" element={<UrbanStudio2/>} />
      
        </Routes>
    </Router>
  );
}
