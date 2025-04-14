const mongoose = require('mongoose');
const Job = require('../models/Job');

const jobs = [
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
    salary: {
      min: 120000,
      max: 150000,
      currency: "USD"
    },
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
    salary: {
      min: 100000,
      max: 130000,
      currency: "USD"
    },
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
    salary: {
      min: 80000,
      max: 100000,
      currency: "GBP"
    },
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
    salary: {
      min: 50,
      max: 80,
      currency: "USD"
    },
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
    salary: {
      min: 1500000,
      max: 2000000,
      currency: "INR"
    },
    deadline: new Date("2024-12-31")
  }
];

const seedJobs = async () => {
  try {
    await mongoose.connect("mongodb+srv://Aritrakar19:RNWjg.YAgCDwCy2@cluster0.4byyy.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Job.deleteMany({});
    await Job.insertMany(jobs);

    console.log('Database seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedJobs(); 