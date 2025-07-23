
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Description() {
  const navigate = useNavigate();
  const location = useLocation();

  
  const previousData = location.state || {};

 
  const [jobText, setJobText] = useState('');
  const [fileName, setFileName] = useState('');

  
  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); 
    }
  };

 
  const handleTextInput = (event) => {
    setJobText(event.target.value);
  };

  
  const handleNext = () => {
    navigate('/Processing', { state: { ...previousData, jobDescription: jobText,jobFile: fileName }});
  };

  return (
    <div className='job'>
      <h2>AI Resume Builder</h2>
      <h3>Job Description (optional)</h3>
      <p><strong>How would you like to provide the job description?</strong></p>
      <p>This step is optional but recommended for best results</p>

     
      <label>📄 Upload File</label>
      <input type='file' onChange={handleFile} />
      {fileName && <p>Uploaded File: {fileName}</p>}

    
      <div>
        <label>🖊️ Text input</label>
        <textarea
          placeholder='Paste the job description text directly'
          value={jobText}
          onChange={handleTextInput}
          rows={4}
        />
      </div>

      <button className='descBtn' onClick={handleNext}>Continue</button>
    </div>
  );
}

export default Description;