
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './resume.css'; 

function Second() {
  const array = ["Welcome", "Experience", "Details", "Job", "Process", "Result"];
  const [step, setStep] = useState(1);
  const navigate=useNavigate();

  return (
    <div>
      <h1>AI Resume Builder</h1>
      <div className="stepper">
        {array.map((item, index) => (
          <div className="step" key={index}>
            <div className={step === index + 1 ? "active" : "unactive"}>
              {index + 1}
            </div>
            <div className="label">{item}</div>
          </div>
        ))}
      </div>

      {/* <button onClick={() => setStep(prev => (prev < array.length ? prev + 1 : 1))}> 
        Next Step
      </button>*/}
      <div className='headings'>
        <h3>1.Provide your experience</h3>

         <p>via resume upload or text description</p>

        <h3>2.Upload or paste a job description (optional)</h3>

        <p>for the position you're interested in</p>

        <h3>3.Get an AI-optimized resume</h3>
        <p>tailored specifically for that job</p>
        </div>
       <button className="started"onClick={() => {navigate('/thirdPage',{ state: { step: 2 } }); }}>Get Started</button><br></br>
        <button className='started'onClick={()=>navigate('/firstPage')}>Back</button>

    </div>
  );
}

export default Second;