import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './Styles/Nescare.css'
import './Styles/CarbonCalculator.scss'
import './Styles/Responsive.css'


import Reachcarbon from "./Pages/Nescare/Reachcarbon";
import Services from "./Pages/Nescare/Services";

import ExcessInventory from "./Pages/Nescare/ExcessInventory";

import Index from "./Pages/CarbonCalculator/index";
import ScrollToTop from "./Partials/ScrollToTop";
import Inventory from "./Pages/Nescare/Inventory";
import Nescare from "./Pages/Nescare/Nescare";
import ContactUs from "./Pages/Nescare/ContactUs";

function App() {
  return (
    
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Nescare/>}/>
        
        <Route path="/reach-carbon" element={<Reachcarbon/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/excess-inventory" element={<ExcessInventory/>}/>

        <Route path="/carboncalculator" element={<Index/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        
      </Routes>
    </Router>
    
  );
}

export default App;
