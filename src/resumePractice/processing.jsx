
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './resume.css';

function Processing() {
  const location = useLocation();
  const data = location.state || {};
  const navigate = useNavigate();

  return (
    <div className="resume-preview">
      <h1>Resume Preview</h1>

      <h2>👤 Personal Info</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
      <p><strong>Location:</strong> {data.location}</p>
      <p><strong>LinkedIn:</strong> {data.linkedin}</p>

      <div className="divider" />

      <h2>💼 Experience</h2>
      <p><strong>Company:</strong> {data.company}</p>
      <p><strong>Title:</strong> {data.title}</p>
      <p><strong>Start Date:</strong> {data.startDate}</p>
      <p><strong>End Date:</strong> {data.endDate}</p>
      <p><strong>Responsibilities:</strong></p>
      <ul className="resume-list">
        {data.responsibilities?.split('\n').map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className="divider" />

      <h2>🎓 Education</h2>
      <p><strong>{data.school1}</strong> – {data.degree1} ({data.start1} to {data.end1})</p>
      {data.school2 && (
        <p><strong>{data.school2}</strong> – {data.degree2} ({data.start2} to {data.end2})</p>
      )}

      <div className="divider" />

      <h2>📄 Job Description</h2>
      <p><strong>Text:</strong> {data.jobDescription || 'Not provided'}</p>
      <p><strong>Uploaded File:</strong> {data.jobFile || 'No file uploaded'}</p>

      <div style={{ marginTop: '30px' }}>
        {/* <button onClick={() => alert('Resume processing started!')} className="get-started-btn">Generate Resume</button> */}
        <button onClick={() => navigate('/second')} className="started">Go back and edit</button>
        <button onClick={() => window.print()} className="get-started-btn" style={{ marginLeft: '20px' }}>Print/Save as PDF</button>
      </div>
    </div>
  );
}

export default Processing;
