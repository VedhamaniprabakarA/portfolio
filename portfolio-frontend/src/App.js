import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Ensure this path is correct

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/projects/')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const resumeDetails = {
    name: "Vedhamani Prabakar A",
    role: "Software Test Engineer & Python AI Developer",
    contact: {
      phone: "9445779001 / 9344669128",
      email: "vedhamaniprabakar@gmail.com",
      linkedin: "https://www.linkedin.com/in/vedhamani-prabakar-a-60ab7b216/"
    },
    skills: ["Python", "React.js", "Django", "AI Development", "Software Testing", "TestNG Testing Framework"],
    education: [
      {
        degree: "Bachelor’s in Computer Applications (BCA)",
        institution: "University of Madras IDE",
        grade: "7.11"
      },
      {
        degree: "Diploma in Electrical and Electronics Engineering (EEE)",
        institution: "P.S.B Polytechnic College, Chennai"
      }
    ],
    certifications: [
      "Cognizant Agile Methodology Job Simulation (Forage, 2023)",
      "Accenture North America Project Management Job Simulation (Forage, 2023)"
    ],
    workExperience: [
      {
        jobTitle: "Software Testing Engineer",
        company: "Nerdshub E Pvt Ltd",
        duration: "Jan 2024 - Present",
        responsibilities: [
          "Executed functional and regression testing for software solutions.",
          "Developed and tested AI models for cash forecasting.",
          "Integrated AI models with React.js frontend.",
          "Assisted in building an AI ChatBot."
        ]
      },
      {
        jobTitle: "Lab Instructor",
        company: "KCG College of Technology",
        duration: "2018 - Jan 2024",
        responsibilities: [
          "Taught and facilitated lab experiments.",
          "Coordinated group discussions."
        ]
      }
    ]
  };

  const summary = `Since completing my Bachelor of Computer Applications at the University of Madras, my journey as a Software Engineer in Test at Nerds Hub has been marked by a dedication to product excellence. The team's success in implementing TestNG frameworks is a testament to our collective expertise in Java and Selenium, complemented by a strong grasp of Agile methodologies.

As a proponent of continuous improvement, my focus lies on enhancing automated testing strategies to ensure reliability and efficiency. Our collaborative efforts have significantly improved the quality of deliverables, underscoring my commitment to leverage my technical skills for optimal product development and quality assurance.

Recently, I have expanded my skill set to include Python and Django for backend development and React for frontend applications. This has enabled me to contribute to the creation of AI-driven chatbots, enhancing user interaction and support within our applications. My involvement in these projects reflects my adaptability and passion for integrating cutting-edge technologies to deliver innovative solutions.`;

  return (
    <div>
      <h1>RESUME</h1>
      <section>
        <h2>{resumeDetails.name}</h2>
        <p><strong>Role:</strong> {resumeDetails.role}</p>
        <p><strong>Phone:</strong> {resumeDetails.contact.phone}</p>
        <p><strong>Email:</strong> <a href={`mailto:${resumeDetails.contact.email}`}>{resumeDetails.contact.email}</a></p>
        <p><strong>LinkedIn:</strong> <a href={resumeDetails.contact.linkedin} target="_blank" rel="noopener noreferrer">{resumeDetails.contact.linkedin}</a></p>

        <h3>Summary</h3>
        <p>{summary}</p>

        <h3>Education</h3>
        <ul>
          {resumeDetails.education.map((edu, index) => (
            <li key={index}>
              <strong>{edu.degree}</strong> - {edu.institution} {edu.grade ? `(Grade: ${edu.grade})` : ""}
            </li>
          ))}
        </ul>

        <h3>Skills</h3>
        <ul>
          {resumeDetails.skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>

        <h3>Certifications</h3>
        <ul>
          {resumeDetails.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>

        <h3>Work Experience</h3>
        <ul>
          {resumeDetails.workExperience.map((job, index) => (
            <li key={index}>
              <strong>{job.jobTitle}</strong> at {job.company} <em>({job.duration})</em>
              <ul>
                {job.responsibilities.map((responsibility, rIndex) => (
                  <li key={rIndex}>{responsibility}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
