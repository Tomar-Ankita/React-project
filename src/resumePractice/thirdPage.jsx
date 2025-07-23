import React, { useState } from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';

function UploadResume() {
  const [fileName, setFileName] = useState(""); 
 const navigate = useNavigate();
 const location = useLocation();
  const previousState = location.state || {};

  const handleFileChange = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      setFileName(file.name); 
    }
  }; 
  const handleNext = () => {
    navigate('/exp', {
      state: {
        ...previousState,
        resumeFile: fileName,
      }
    });
  };

  return (
    <div className='thirdPage'>
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>Provide your experience</h1>
      <h2>How would you like to provide your experience?</h2>
      <p>Choose one of the following methods:</p>
<div className='rowwise' >
  <div className='box'>
      <h3>📄 Upload Resume</h3>
      <p>Upload your existing resume (PDF, DOCX, or TXT)</p>
      <input type="file" accept=".pdf,.doc,.docx,.txt" onChange={handleFileChange} />
      {fileName && <p>Selected File: {fileName}</p>}  
</div>
       <div className='box'>
      <h3>🖊️ Text Description</h3>
      <p>Describe your experience, skills and education</p>
      <button onClick={()=>navigate('/exp')}>Add</button>
      </div>
      </div>

      <button onClick={() => navigate('/exp')}>Next</button> 
    </div><br></br>
    <button className='started'onClick={()=>navigate('/second',{ state: previousState})}>Back</button>
    </div>
  );
}

export default UploadResume;
