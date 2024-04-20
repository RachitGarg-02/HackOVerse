import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = ({ onFormDataChange }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    haemoglobin: "",
    sugar: "",
    pulseRate: "",
    heartRate: "",
    oxygenLevel: "",
    firstName: "",
    lastName: "",
    emailId: "",
    mobileNo: "",
    age:"",
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
    navigate("/patientData")
  };
    return (
      <div className="form_section" id="form">
        <div className="form_section_left">

            <h1 className="form_head">
                Book A Free Consultation
            </h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form_fields">

        <div className="form_left">

<label>
  <input className="form_input"
    type="text"
                  name="firstName"
                  placeholder="First Name"
    value={formData.firstName}
    onChange={handleChange}
  />
</label>
<label>
  <input className="form_input"
    type="text"
                  name="emailId"
                  placeholder="Email ID"
    value={formData.emailId}
    onChange={handleChange}
  />
</label>
<label>
  <input className="form_input"
    type="text"
                  name="age"
                  placeholder="Age"
    value={formData.age}
    onChange={handleChange}
  />
</label>
<label>
  <input className="form_input"
    type="text"
                  name="sugar"
                  placeholder="Sugar level"
    value={formData.sugar}
    onChange={handleChange}
  />
</label>
<label>
  <input className="form_input"
    type="text"
                  name="oxygenLevel"
                  placeholder="Oxygen level"
    value={formData.oxygenLevel}
    onChange={handleChange}
  />
</label>
    </div>
          <div className="form_right">

      <label>
        <input className="form_input"
          type="text"
                  name="lastName"
                  placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        <input className="form_input"
          type="text"
                  name="mobileNo"
                  placeholder="Mobile Number"
          value={formData.mobileNo}
          onChange={handleChange}
        />
      </label>
      <label>
        <input className="form_input"
          type="text"
                  name="haemoglobin"
                  placeholder="Haemoglobin"
          value={formData.haemoglobin}
          onChange={handleChange}
        />
      </label>
      <label>
        <input className="form_input"
          type="text"
                  name="heartRate"
                  placeholder="Heart rate"
          value={formData.heartRate}
          onChange={handleChange}
        />
      </label>
      <label>
        
        <input className="form_input"
          type="text"
                  name="pulseRate"
                  placeholder="Pulse rate"
          value={formData.pulseRate}
          onChange={handleChange}
        />
      </label>
          </div>
          </div>
      <button className="form_submit_btn" type="submit">Submit</button>
    </form>
        </div>
        <div className="form_section_right">
          <img className="form_right_img" src="form.png" alt="img"/>
        </div>
        </div>
  );
};

export default Form;
