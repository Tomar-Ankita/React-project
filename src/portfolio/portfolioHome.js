import React from "react";
import "./portfolio.css";
import profileImage from "../assets/ankita.jpg";


export default function PortfolioHome() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="logo">Ankita Tomar</h1>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <header id="home" className="header">
        <div className="header-left">
          <img src={profileImage} alt="Ankita Tomar" className="profile-pic" />
        </div>
        <div className="header-right">
          <h1 className="hero-title">
            Hello, I'm <span>Ankita Tomar</span>
          </h1>
          <p className="subtitle">MERN Stack Developer • Fresher Seeking Opportunities</p>
          <p className="bio">
            Dedicated BCA graduate with MERN stack experience, eager to work in a dynamic IT
            environment where I can apply my skills and grow professionally.
          </p>
          
          <div className="contact-icons">
  <a href="mailto:ankitatomar81299@gmail.com">
    <img
      src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
      alt="Email"
      style={{ width: "18px", verticalAlign: "middle" }}
    />
  </a>

  <a href="https://www.linkedin.com/in/ankita-tomar03" target="_blank" rel="noreferrer">
    <img
      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
      alt="LinkedIn"
      style={{ width: "24px" }}
    />
  </a>

  <a href="https://github.com/Tomar-Ankita" target="_blank" rel="noreferrer">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      alt="GitHub"
      style={{ width: "24px" }}
    />
  </a>

  <a href="tel:+917528855890">
    <img
      src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
      alt="Phone"
      style={{ width: "18px", verticalAlign: "middle" }}
    />
  </a>

  <a href="/Ankita.Tomar.pdf" download>
    <img
      src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
      alt="Download Resume"
      style={{ width: "20px", verticalAlign: "middle", marginRight: "6px" }}
    />
    <span style={{ fontSize: "15px" }}>Download Resume</span>
  </a>
</div>

        </div>  
      </header>

      {/* About Me Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          A dedicated fresher with a strong foundation in computer applications and recent
          MERN Stack certification. Combining 7 years of teaching with technical skills,
          I’m ready to transition into the tech industry.
        </p>
      </section>

      {/* Details Section (Education + Certifications + Strengths) */}
      <section id="details" className="details-section">
        <div className="details-cards">
          {/* Education */}
          
          <div className="education-section section-card">
  <h2>🎓 Education</h2>
  <div className="education-list">
    <div className="edu-card">
      <b>Bachelor in Computer Applications (BCA)</b>
      <p className="subtext">Bhag Singh Khalsa College</p>
      <p className="date">2018 - 2021</p>
    </div>
    <div className="edu-card">
      <b>Higher Secondary Education</b>
      <p className="subtext">Singh Sabha Kanya Pathshala</p>
      <p className="date">2017 - 2018</p>
    </div>
    <div className="edu-card">
      <b>Secondary Education</b>
      <p className="subtext">Asian High School</p>
      <p className="date">2014 - 2015</p>
    </div>
  </div>
</div>


          {/* Certifications */}
         <div className="certifications-section section-card">
  <h2> <img 
    src="https://cdn-icons-png.flaticon.com/512/633/633611.png" 
    alt="Certifications Icon" 
    style={{ width: "24px", marginRight: "8px", verticalAlign: "middle" }} 
  /> Certifications</h2>
  <div className="certification-list">
    <div className="cert-card">
      <span className="dot" /> MERN Stack Development – Codemind Technology
    </div>
    <div className="cert-card">
      <span className="dot" /> Communication Skills – TCSiON
    </div>
    <div className="cert-card">
      <span className="dot" /> Front End Development – Great Learning Academy
    </div>
    <div className="cert-card">
      <span className="dot" /> Deloitte Technology Job Simulation – Forage
    </div>
    <div className="cert-card">
      <span className="dot" /> Technology Presentations & Seminars
    </div>
  </div>
</div>


          <div className="strengths-section section-card">
  <h2>  <img 
    src="https://cdn-icons-png.flaticon.com/512/484/484167.png" 
    alt="Target Icon" 
    style={{ width: "24px", marginRight: "8px", verticalAlign: "middle" }} 
  /> Key Strengths</h2>
  <div className="strengths-grid">
    <div className="strength-box">
      <b>Dedicated</b>
      <p>High-quality work</p>
    </div>
    <div className="strength-box">
      <b>Reliable</b>
      <p>Dependable results</p>
    </div>
    <div className="strength-box">
      <b>Hardworking</b>
      <p>Strong work ethic</p>
    </div>
    <div className="strength-box">
      <b>Time Management</b>
      <p>Efficient planning</p>
    </div>
    <div className="strength-box">
      <b>Positive Attitude</b>
      <p>Proactive mindset</p>
    </div>
    <div className="strength-box">
      <b>Quick Learner</b>
      <p>Fast adaptation</p>
    </div>
  </div>
</div>

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <h2 className="experience-title">
          <strong>Work </strong><span className="highlight">Experience</span>
        </h2>
        <p className="experience-summary">
         7 years of teaching and educational experience, with recent MERN Stack certification. Ready to transition into technology roles and apply my problem-solving and communication skills in software development.
        </p>

        <div className="experience-card">
          <div className="experience-icon">💼</div>
          <div>
            <h3>IT Coordinator & Teacher</h3>
            <p className="subtext">Maharishi Dayanand Saraswati School</p>
            <p className="date-location">📅 Mar 2023 - Dec 2024 | 📍 Abohar, Punjab</p>
            <ul>
              <li>Coordinated IT infrastructure and digital learning tools</li>
              <li>Taught computer science and trained faculty in tech</li>
              <li>Developed IT policies and maintained educational platforms</li>
            </ul>
          </div>
        </div>

        <div className="experience-card">
          <div className="experience-icon">👩‍🏫</div>
          <div>
            <h3>Computer Science Tutor</h3>
            <p className="subtext">Private Tutor</p>
            <p className="date-location">📅 2019 - 2024</p>
            <ul>
              <li>Taught CS concepts and helped with projects/exams</li>
              <li>One-on-one mentorship</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills-section">
  <h2 className="section-title">
    Technical <span className="highlight">Skills</span>
  </h2>
  <p className="section-subtitle">
    A comprehensive skill set covering modern web development technologies, programming languages, and industry-standard tools and methodologies.
  </p>

  <div className="skills-grid">
    {/* Programming Languages */}
    <div className="skills-card">
      <h3>Programming Languages</h3>
      {[
        { name: 'C', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript (ES6+)', level: 88 },
      ].map(skill => (
        <div className="skill-bar" key={skill.name}>
          <div className="skill-label">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="bar-bg">
            <div className="bar-fill" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>

    {/* Frontend & Backend */}
    <div className="skills-card">
      <h3>Frontend & Backend</h3>
      {[
        { name: 'React.js', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 75 },
        { name: 'MongoDB', level: 70 },
      ].map(skill => (
        <div className="skill-bar" key={skill.name}>
          <div className="skill-label">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="bar-bg orange">
            <div className="bar-fill orange-fill" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Tools and Technologies */}
<section className="skills-section">
  <h2 className="section-title">Tools & <span className="highlight">Technologies</span></h2>
  <div className="tools-grid">
    {[
      'Git & GitHub',
      'VS Code',
      'JIRA',
      'BootStrap',
      
      'Vercel',
      
    ].map(tool => (
      <div className="tool-card" key={tool}>{tool}</div>
    ))}
  </div>
</section>

{/* Concepts and Methodologies */}
<section className="skills-section">
  <h2 className="section-title">Concepts & <span className="highlight">Methodologies</span></h2>
  <div className="tools-grid">
    {[
      'Responsive Web Design',
      'REST APIs',
      'CRUD Operations',
      
      'Debugging',
      'Agile & Scrum Basics'
    ].map(concept => (
      <div className="tool-card" key={concept}>{concept}</div>
    ))}
  </div>
</section>


      {/* Projects */}
      <section id="projects" className="projects">
  <h2 className="section-title">
    Featured <span className="highlight">Projects</span>
  </h2>
  <p className="section-subtitle">
    A showcase of my development projects and technical presentations, demonstrating practical application of modern web technologies.
  </p>

  <div className="project-grid">
    {/* Resume Builder Application */}
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">Resume Builder Application</h3>
        <span className="project-badge featured">⭐ Featured</span>
      </div>
      <p>
        A modern React.js application that allows users to create professional resumes with  real-time preview functionality. Built as part of MERN Stack learning journey.
      </p>
      <div className="tech-tags">
        <span>React.js</span>
        <span>JavaScript</span>
        <span>CSS3</span>
        <span>HTML5</span>
      </div>
      <ul className="features-list">
       
        <li>Real-time preview functionality</li>
        <li>PDF export capability</li>
        <li>Responsive design</li>
        <li>User-friendly interface</li>
      </ul>
  
       
        <a href="https://resumebuild-mszx2iegx-ankitas-projects-7c8eb943.vercel.app" target="_blank" rel="noopener noreferrer"><p className="status"><span className="status-live">● Live</span> • Vercel</p>
      </a>

            
  
    </div>

    {/* Incredible India Website */}
    <div className="project-card">
      <h3 className="project-title">Incredible India Website</h3>
      <p>
        College final year project showcasing India's tourism destinations with interactive features. Helped me understand web development fundamentals before pursuing MERN Stack.
      </p>
      <div className="tech-tags">
        <span>HTML5</span>
        <span>CSS3</span>
        <span>JavaScript</span>
        <span>Responsive Design</span>
      </div>
      <ul className="features-list">
        <li>Interactive destination showcase</li>
        <li>Comprehensive location information</li>
        <li>Image galleries and virtual tours</li>
        <li>Mobile-responsive design</li>
        <li>Tourist guide functionality</li>
      </ul>
      <p className="status"><span className="status-completed">● Completed</span> • Academic Project</p>
     
    </div>
  </div>
 

{/* Task Management Web App */}
<div className="project-card">
  <h3 className="project-title">Task Management Web App</h3>
  <p>
    Developed a task management application to organize daily activities with real-time status tracking and user-friendly design.
  </p>
  
  <div className="tech-tags">
    <span>React</span>
    <span>JavaScript</span>
    <span>CSS</span>
   
  </div>

  <ul className="features-list">
    <li>Add, edit, and delete tasks</li>
    <li>Track task completion status</li>
    <li>Filter tasks by priority and name</li>
    
   
  </ul>

  <p className="status">
    <span className="status-completed">● Completed</span> • Personal Project
  </p>
 <div className="project-links">
    
    <a href="https://task-managementpr-project-dkw7a4ipp-ankitas-projects-7c8eb943.vercel.app" target="_blank" rel="noreferrer"><p className="status"><span className="status-live">● Live</span> • Vercel</p>
      
     </a>
  </div>
 
</div>


</section>

{/* Technical Presentation - AI Technology Advancements */}
<section id="presentations" className="presentations-section">
  <h2 className="section-title center-heading">
    <span className="black-text">Technical</span> <span className="blue-text">Presentations</span>
  </h2>

  <div className="project-grid">
    {/* Card 1: AI Technology Advancements */}
    <div className="project-card small-card">
      <div className="icon-header">🖥️</div>
      <h3 className="project-title">AI Technology Advancements</h3>
      <p>Comprehensive presentation on latest AI trends and their impact on various industries</p>
      <span className="badge">Academic Community</span>
    </div>

    {/* Card 2: 5G Technology and Future */}
    <div className="project-card small-card">
      <div className="icon-header">📡</div>
      <h3 className="project-title">5G Technology and Future</h3>
      <p>Technical seminar on 5G implementation and its transformative potential</p>
      <span className="badge">Technology Enthusiasts</span>
    </div>
  </div>
    <p style={{ textAlign: "center" }}>
  Interested in seeing more of my work or discussing a project?
</p>

  {/* GitHub Button */}
  <div className="github-btn">
    <a href="https://github.com/Tomar-Ankita" target="_blank" className="gradient-btn">
      🚀 View All Projects on GitHub
    </a>
  </div>
</section>

<h1 style={{ textAlign: "center",marginTop:'100px' }}> <span className="black-text">Get In </span> <span className="blue-text">Touch</span></h1>
<p style={{ textAlign: "center",fontSize:"20px"  }}>Ready to start my tech career? I'm actively seeking entry-level opportunities in </p>
<p style={{ textAlign: "center", fontSize:"20px"}}>MERN Stack development. Let's discuss how I can contribute to your team </p>
<p style={{ textAlign: "center",fontSize:"20px" }}>while growing my technical expertise.</p>
  

  {/* Let's Connect Section */}
<section id="contact" style={{ padding: "50px 20px", textAlign: "left", maxWidth: "900px", margin: "0 auto" }}>

  <h2 style={{ fontWeight: "bold", fontSize: "28px", marginBottom: "15px" }}>
    Let's <span style={{ color: "#5e3bee" }}>Connect</span>
  </h2>
  <p style={{ fontSize: "18px", color: "#555", marginBottom: "30px" }}>
    I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply connect with fellow developers and professionals in the tech industry.
  </p>

  <h3 style={{ fontWeight: "600", fontSize: "20px", marginBottom: "20px" }}>Contact Information</h3>

  <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "20px"
  }}>
    {/* Email Card */}
    <div style={{
      flex: "1 1 250px",
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 0 12px rgba(0,0,0,0.05)"
    }}>
      <h4 style={{ marginBottom: "8px", fontWeight: "600" }}> <img
      src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
      alt="Email"
      style={{ width: "18px", marginRight: "8px", verticalAlign: "middle" }}
    /> Email</h4>
      <p style={{ color: "#555" }}>ankitatomar81299@gmail.com</p>
    </div>

    {/* Phone Card */}
    <div style={{
      flex: "1 1 250px",
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 0 12px rgba(0,0,0,0.05)"
    }}>
      <h4 style={{ marginBottom: "8px", fontWeight: "600" }}><img
      src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
      alt="Phone"
      style={{ width: "18px", marginRight: "8px", verticalAlign: "middle" }}
    /> Phone</h4>
      <p style={{ color: "#555" }}>+91 7528855890</p>
    </div>

    {/* Location Card */}
    <div style={{
      flex: "1 1 250px",
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 0 12px rgba(0,0,0,0.05)"
    }}>
      <h4 style={{ marginBottom: "8px", fontWeight: "600" }}>📍 Location</h4>
      <p style={{ color: "#555" }}>Abohar, Punjab, India</p>
    </div>
  </div>
</section>
 
{/* Professional Profiles */}
<h3 style={{ fontWeight: "600", fontSize: "30px", marginTop: "40px", marginBottom: "20px",marginLeft:"320px" }}>
 <span className="black-text">Professional</span> <span className="blue-text">Profiles</span> 
</h3>
<div>

<div style={{
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center", 
  gap: "20px"
}}>
  {/* GitHub Card */}
  <div style={{
    width: "180px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 0 12px rgba(0,0,0,0.05)",
    textAlign: "center",
     marginBottom:"20px"
  }}>
    <h4 style={{ marginBottom: "8px", fontWeight: "600" }}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      alt="GitHub"
      style={{ width: "24px", marginRight: "10px" }} />  GitHub</h4>
    <a 
      href="https://github.com/Tomar-Ankita" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ color: "#5e3bee", textDecoration: "none", fontWeight: "500" }}
    >
      Tomar-Ankita
    </a>
  </div>

  {/* LinkedIn Card */}
  <div style={{
    width: "180px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 0 12px rgba(0,0,0,0.05)",
    textAlign: "center",
    marginBottom:"20px"
  }}>
    <h4 style={{ marginBottom: "8px", fontWeight: "600" }}><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"alt="LinkedIn"
       style={{ width: "24px" }}
    /> LinkedIn</h4>
    <a 
      href="https://www.linkedin.com/in/ankita-tomar03" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ color: "#5e3bee", textDecoration: "none", fontWeight: "500"  }}
    >
      ankita-tomar03
    </a>
  </div>
</div>

</div>

  
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="footer-title">Ankita Tomar</h2>
            <p>
              Aspiring IT Professional specializing in MERN Stack Development.
              Passionate about creating innovative solutions and contributing to meaningful projects.
            </p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <div className="footer-links">
  <ul className="footer-column">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Experience</a></li>
  </ul>
  <ul className="footer-column">
    <li><a href="#">Skills</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>

          </div>

          <div className="footer-section contact">
            <h3>Connect With Me</h3>
            <p>ankitatomar81299@gmail.com</p>
            <p>Abohar, Punjab, India</p>
            <div className="social-icons">
            
      <a href="https://github.com/Tomar-Ankita" target="_blank">   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      alt="GitHub"
      style={{ width: "24px", marginRight: "10px" }} /> </a>
                
             
             <a href="https://www.linkedin.com/in/ankita-tomar03" target="_blank">
             <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"alt="LinkedIn"
       style={{ width: "24px" }}
    /></a>
               
              
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Ankita Tomar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
