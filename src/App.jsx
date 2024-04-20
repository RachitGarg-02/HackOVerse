import React, { useState } from "react";
import MedicalForm from "./MedicalForm";
import Patientdata from "./Patientdata";
import ChooseUs from "./pages/ChooseUs";
import Form from "./pages/Form";
import Advisors from "./pages/Advisors";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import Video from "./pages/VideoPage";
import VideoPage from "./pages/VideoPage";

const App = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailId: "",
        mobileNo: "",
        age:"",
    haemoglobin:0,
    sugar: 0,
    pulseRate: 0,
    heartRate: 0,
    oxygenLevel: 0,
  });

    
  const handleFormDataChange = (newFormData) => {
      setFormData({
        haemoglobin:newFormData.haemoglobin ? newFormData.haemoglobin : 0,
        sugar: newFormData.sugar ? newFormData.sugar : 0,
        pulseRate:newFormData.pulseRate ?newFormData.pulseRate : 0,
        heartRate: newFormData.heartRate ? newFormData.heartRate : 0,
        oxygenLevel: newFormData.oxygenLevel ? newFormData.oxygenLevel : 0,
    });
  };

  return (
      <div className="App">
        <Router>
      <Routes>
        <Route path="/" element={<Landing handleFormDataChange={handleFormDataChange} />} /> 
                  <Route path="/patientData" element={<Patientdata formData={formData} />} />  
                  <Route path="/video" element={<VideoPage />} />
      </Routes>
              
         
    </Router>
         
          
    </div>
  );
};

export default App;
