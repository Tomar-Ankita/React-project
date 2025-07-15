import React, { useState } from "react";
import './resume.css';
import { useNavigate, useLocation } from "react-router-dom";

function PersonalDetailsForm() {
 
  const [showSecondEducation, setShowSecondEducation] = useState(false);

  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',

   
    company: '',
    title: '',
    startDate: '',
    endDate: '',
    responsibilities: '',

    
    school1: '',
    degree1: '',
    start1: '',
    end1: '',

   
    school2: '',
    degree2: '',
    start2: '',
    end2: '',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const previousData = location.state || {};

 
  const handleChange = (event) => {
    const { name, value } = event.target;

    
    setFormData(prev => ({ ...prev,[name]: value }));
  };

  
  const handleContinue = () => {
    navigate('/continue', { state: { ...previousData, ...formData } });
  };

  return (
    <div className="form-container">
      <h2>Personal Details</h2>
      <form>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        <input type="url" name="linkedin" placeholder="LinkedIn Profile" value={formData.linkedin} onChange={handleChange} />
      </form>

      <h2>Professional Experience</h2>
      <form>
        <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required />
        <input type="text" name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} required />
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
        <textarea name="responsibilities" placeholder="Responsibilities" value={formData.responsibilities} onChange={handleChange} />
      </form>

      <h2>Education</h2>
      <form>
        <input type="text" name="school1" placeholder="School Name" value={formData.school1} onChange={handleChange} required />
        <input type="text" name="degree1" placeholder="Degree" value={formData.degree1} onChange={handleChange} required />
        <input type="date" name="start1" value={formData.start1} onChange={handleChange} required />
        <input type="date" name="end1" value={formData.end1} onChange={handleChange} required />
      </form>

      
      {!showSecondEducation && (
        <button type="button" onClick={() => setShowSecondEducation(true)}>+ Add Education</button>
      )}

      {showSecondEducation && (
        <form>
          <h3>Education 2</h3>
          <input type="text" name="school2" placeholder="School Name" value={formData.school2} onChange={handleChange} />
          <input type="text" name="degree2" placeholder="Degree" value={formData.degree2} onChange={handleChange} />
          <input type="date" name="start2" value={formData.start2} onChange={handleChange} />
          <input type="date" name="end2" value={formData.end2} onChange={handleChange} />
        </form>
      )}

      <br />
      
      <button className="continueBtn" onClick={handleContinue}>Continue</button>
      <button className="started" onClick={() => navigate('/second')}>Back</button>
    </div>
  );
}

export default PersonalDetailsForm;
