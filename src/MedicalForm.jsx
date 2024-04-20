import React, { useState } from "react";

const MedicalForm = ({ onFormDataChange }) => {
  const [formData, setFormData] = useState({
    haemoglobin: "",
    sugar: "",
    pulseRate: "",
    heartRate: "",
    oxygenLevel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormDataChange(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Haemoglobin:
        <input
          type="text"
          name="haemoglobin"
          value={formData.haemoglobin}
          onChange={handleChange}
        />
      </label>
      <label>
        Sugar:
        <input
          type="text"
          name="sugar"
          value={formData.sugar}
          onChange={handleChange}
        />
      </label>
      <label>
        Pulse Rate:
        <input
          type="text"
          name="pulseRate"
          value={formData.pulseRate}
          onChange={handleChange}
        />
      </label>
      <label>
        Heart Rate:
        <input
          type="text"
          name="heartRate"
          value={formData.heartRate}
          onChange={handleChange}
        />
      </label>
      <label>
        Oxygen Level:
        <input
          type="text"
          name="oxygenLevel"
          value={formData.oxygenLevel}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MedicalForm;
