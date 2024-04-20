import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  Cell,
} from "recharts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Patientdata = ({ formData }) => {
    const navigate=useNavigate()
    const [data, setData] = useState([
        { name: "Haemoglobin", value: 0 },
        { name: "Sugar", value:0 },
        { name: "Pulse rate", value:  0 },
        { name: "Heart rate", value: 0 },
        { name: "Oxygen level", value: 0 },
      ]);
    
      useEffect(() => {
        setData([
          { name: "Haemoglobin", value: parseInt(formData.haemoglobin) ? formData.haemoglobin : 0 },
          { name: "Sugar", value: parseInt(formData.sugar) ? parseInt(formData.sugar) : 0 },
          { name: "Pulse rate", value:parseInt(formData.pulseRate) ? parseInt(formData.pulseRate) : 0 },
          { name: "Heart rate", value: parseInt(formData.heartRate) ? parseInt(formData.heartRate) : 0 },
          { name: "Oxygen level", value: parseInt(formData.oxygenLevel) ? parseInt(formData.oxygenLevel) : 0 },
        ]);
      }, [formData]);
    
  const getColor = (name, value) => {
    switch (name) {
      case "Haemoglobin":
        return value > 18 ? "#FF0000" : (value > 12 ? "green" : "blue");
      case "Sugar":
        return value > 100 ? "#FF0000" : (value > 70 ? "green" : "blue");
      case "Pulse rate":
        return value > 100 ? "#FF0000" : (value > 60 ? "green" : "blue");
      case "Heart rate":
        return value > 100 ? "#FF0000" : (value > 60 ? "green" : "blue");
      case "Oxygen level":
        return value > 100 ? "#FF0000" : (value > 95 ? "green" : "blue");
      default:
        return "#000000"; // Black for other cases
    }
  };

  return (
      <div>
          {
              (formData.sugar!=0) && (
                  <>
                      <h2 className="absolute patient_data_sugardata">{formData ? formData.sugar : ""}</h2>
                      <h2 className="absolute patient_data_heartdata">{formData ? formData.heartRate : ""}</h2>
                      <h2 className="absolute patient_data_haemoglobindata">{formData ? formData.haemoglobin : ""}</h2>
                      <h2 className="absolute patient_data_pulsedata">{formData ? formData.pulseRate : ""}</h2>
                      <h2 className="absolute patient_data_oxygendata">{formData ? formData.oxygenLevel : ""}</h2>
                      <div className="patientData_content">
                          <div className="patientData_top">
                              <img className="patient_data_top_img" src="fram.svg"/>
                          </div>
                          <div className="patient_data_mid">
                              <h1>Health Data</h1>
      <PieChart className="pie" width={800} height={230} >
        <Pie
                                      data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.name, entry.value)} />
          ))}
        </Pie>
        <Tooltip />
                              </PieChart>
                              <h1>Activity Growth</h1>
                              <BarChart
                                  className="pie"
        width={800}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
                              </BarChart>
                              <div className="patient_data_btns" >
                                  
          <button className="patient_btn"><a style={{textDecoration:"none"}} href="https://drive.google.com/file/d/1AiRRj9CaW5SwOpql92krgjAN0ADXXFzb/view">Download Report</a></button>      
          
          <button className="patient_btn" onClick={()=>navigate("/video")}>Procurement Video</button>
                              </div>
                          </div>
                      </div>
                  </>
              )
                  
          }
          <img className="footer patient_footer" src="Footer.png"/>
    </div>
  );
};

export default Patientdata;
