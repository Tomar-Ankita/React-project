
import React from "react";
import { useNavigate } from "react-router-dom";
import './resume.css';
import FeedbackButton from './feedback.jsx';  

function Resume() {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="resume-container">
        <h2>AI Resume Builder</h2>
        <p>
          Create AI-optimized resumes tailored for specific job descriptions<br />
          Upload your resume, provide a job description, and let our AI optimize your resume to increase your chances of landing that interview.
        </p>
        <button className="get-started-btn" onClick={() => navigate('/resume-second')}>Get Started</button>
      </div>

      <div className="info-box-row">
        <div className="info-box">
          <h3>AI-Powered</h3>
          <p>Our advanced AI analyzes your resume and the job description to highlight your most relevant skills and experiences.</p>
        </div>

        <div className="info-box">
          <h3>Easy to use</h3>
          <p>Simple step-by-step process takes you from resume upload to optimized result in minutes.</p>
        </div>

        <div className="info-box">
          <h3>Customizable</h3>
          <p>Tailor your resume for different job applications with just a few clicks.</p>
        </div>
      </div>

      <h1>What Our Users Say</h1>
      <div className="testimonial-row">
        <div className="testimonial">
          <p>★★★★★</p>
          <p>"The AI Resume Builder helped me land my dream job! The optimization suggestions were spot-on."</p>
          <p><strong>Sarah C.</strong></p>
          <p>Software Engineer at Google</p>
        </div>

        <div className="testimonial">
          <p>★★★★★</p>
          <p>"This tool saved me hours of resume tailoring. The AI recommendations were incredibly accurate."</p>
          <p><strong>Michael R.</strong></p>
          <p>Product Manager at Microsoft</p>
        </div>

        <div className="testimonial">
          <p>★★★★★</p>
          <p>"This tool saved me hours of resume tailoring. The AI recommendations were incredibly accurate."</p>
          <p><strong>Michael R.</strong></p>
          <p>Product Manager at Microsoft</p>
        </div>

        <div className="testimonial">
          <p>★★★★★</p>
          <p>"The best resume builder I've used. The AI really understands how to highlight relevant skills."</p>
          <p><strong>Ankita Tomar</strong></p>
          <p>Data Scientist at Amazon</p>
        </div>

        <div className="testimonial">
          <p>★★★★★</p>
          <p>"Incredible tool that helped me highlight my technical skills effectively."</p>
          <p><strong>Avinash M.</strong></p>
          <p>DevOps Engineer at DigitalOcean</p>
        </div>

        <div className="testimonial">
          <p>★★★★★</p>
          <p>"This tool helped me create a resume that stood out in a competitive field."</p>
          <p><strong>Aditya S.</strong></p>
          <p>Financial Analyst at Stripe</p>
        </div>
      </div>

     
      <FeedbackButton /> 
    </div>
  );
}

export default Resume;