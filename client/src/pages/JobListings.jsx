import React, { useState } from "react";

const JobListings = () => {
  const [jobs] = useState([
    {
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "New York",
      type: "Full Time",
      description: "We are looking for a Senior Software Engineer to join our team...",
      requirements: [
        "5+ years of experience in software development",
        "Strong knowledge of JavaScript and React",
        "Experience with Node.js and MongoDB",
        "Excellent problem-solving skills"
      ],
      salary: { min: 120000, max: 150000, currency: "USD" },
      deadline: new Date("2024-12-31")
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions",
      location: "San Francisco",
      type: "Full Time",
      description: "Join our frontend team to build amazing user experiences...",
      requirements: [
        "3+ years of frontend development experience",
        "Proficiency in React and TypeScript",
        "Experience with CSS frameworks",
        "Strong UI/UX skills"
      ],
      salary: { min: 100000, max: 130000, currency: "USD" },
      deadline: new Date("2024-12-31")
    },
    {
      title: "Backend Developer",
      company: "DataSystems",
      location: "London",
      type: "Contract",
      description: "Looking for a Backend Developer to work on our cloud infrastructure...",
      requirements: [
        "4+ years of backend development",
        "Experience with Node.js and Express",
        "Knowledge of cloud services (AWS/GCP)",
        "Strong database skills"
      ],
      salary: { min: 80000, max: 100000, currency: "GBP" },
      deadline: new Date("2024-12-31")
    },
    {
      title: "UI/UX Designer",
      company: "DesignHub",
      location: "Remote",
      type: "Freelance",
      description: "We need a creative UI/UX Designer for our new project...",
      requirements: [
        "Portfolio of previous work",
        "Experience with Figma/Sketch",
        "Understanding of user-centered design",
        "Strong communication skills"
      ],
      salary: { min: 50, max: 80, currency: "USD" },
      deadline: new Date("2024-12-31")
    },
    {
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Bangalore",
      type: "Full Time",
      description: "Join our DevOps team to streamline our deployment process...",
      requirements: [
        "Experience with CI/CD pipelines",
        "Knowledge of Docker and Kubernetes",
        "Scripting skills (Bash/Python)",
        "Cloud platform experience"
      ],
      salary: { min: 1500000, max: 2000000, currency: "INR" },
      deadline: new Date("2024-12-31")
    },
    {
      title: "Machine Learning Engineer",
      company: "AI Labs",
      location: "Berlin",
      type: "Full Time",
      description: "We're seeking a Machine Learning Engineer to enhance our AI capabilities...",
      requirements: [
        "Experience with ML frameworks (TensorFlow, PyTorch)",
        "Strong Python programming skills",
        "Background in statistics and data modeling",
        "Knowledge of cloud platforms"
      ],
      salary: { min: 90000, max: 120000, currency: "EUR" },
      deadline: new Date("2024-12-31")
    },
    {
      title: "Project Manager",
      company: "GlobalSoft",
      location: "Toronto",
      type: "Contract",
      description: "Coordinate software development teams and manage project delivery timelines...",
      requirements: [
        "Experience managing agile teams",
        "Excellent communication and leadership",
        "Knowledge of project management tools",
        "PMP or Scrum Master certification"
      ],
      salary: { min: 70000, max: 95000, currency: "CAD" },
      deadline: new Date("2024-12-31")
    },
    {
      title: "Mobile App Developer",
      company: "AppFusion",
      location: "Dubai",
      type: "Full Time",
      description: "Develop and maintain cross-platform mobile applications...",
      requirements: [
        "Experience with Flutter or React Native",
        "Knowledge of mobile UI/UX patterns",
        "Understanding of REST APIs",
        "Publishing apps to Play Store/App Store"
      ],
      salary: { min: 6000, max: 10000, currency: "AED" },
      deadline: new Date("2024-12-31")
    },
    {
      title: "Cybersecurity Analyst",
      company: "SecureNet",
      location: "Singapore",
      type: "Full Time",
      description: "Monitor and secure IT systems from threats and vulnerabilities...",
      requirements: [
        "Knowledge of security protocols",
        "Experience with SIEM tools",
        "Incident response experience",
        "Cybersecurity certification is a plus"
      ],
      salary: { min: 75000, max: 100000, currency: "SGD" },
      deadline: new Date("2024-12-31")
    },
    {
      title: "Technical Writer",
      company: "DocuWise",
      location: "Remote",
      type: "Part Time",
      description: "Document APIs, software features, and technical specifications...",
      requirements: [
        "Strong writing and editing skills",
        "Understanding of software development lifecycle",
        "Experience with documentation tools (Markdown, Docsify)",
        "Attention to detail"
      ],
      salary: { min: 30, max: 50, currency: "USD" },
      deadline: new Date("2024-12-31")
    }
  ]);

  return (
    <div style={{ padding: "40px", backgroundColor: "#f6f7fb", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Job Listings</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px"
        }}
      >
        {jobs.map((job, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p>{job.description}</p>
              <p><strong>Requirements:</strong></p>
              <ul>
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <p><strong>Salary:</strong> {job.salary.currency} {job.salary.min} - {job.salary.max}</p>
              <p><strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>
            </div>
            <button
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                background: "#ff2b7b",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;