const mongoose = require('mongoose');
const Job = require('./models/Job');

// Multiple sample jobs
const jobs = [
  {
    title: "Full Stack Developer",
    company: "Tech Solutions Inc",
    location: "New York",
    type: "Full-time",
    description: "We are looking for a Full Stack Developer with experience in React and Node.js.",
    requirements: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    salary: {
      min: 80000,
      max: 120000,
      currency: "USD"
    },
    applyLink: "https://example.com/apply/1"
  },
  {
    title: "Frontend Developer",
    company: "Web Innovations",
    location: "San Francisco",
    type: "Full-time",
    description: "Join our frontend team to build beautiful web applications.",
    requirements: ["React", "JavaScript", "HTML", "CSS", "TypeScript"],
    salary: {
      min: 90000,
      max: 130000,
      currency: "USD"
    },
    applyLink: "https://example.com/apply/2"
  },
  {
    title: "Backend Developer",
    company: "Data Systems",
    location: "London",
    type: "Full-time",
    description: "Looking for a Backend Developer to build scalable applications.",
    requirements: ["Node.js", "Python", "SQL", "REST APIs"],
    salary: {
      min: 70000,
      max: 100000,
      currency: "GBP"
    },
    applyLink: "https://example.com/apply/3"
  },
  {
    title: "React Developer",
    company: "Digital Solutions",
    location: "Bangalore",
    type: "Full-time",
    description: "We need a React Developer to join our growing team.",
    requirements: ["React", "Redux", "JavaScript", "HTML", "CSS"],
    salary: {
      min: 1200000,
      max: 1800000,
      currency: "INR"
    },
    applyLink: "https://example.com/apply/4"
  }
];

// Connect to MongoDB
mongoose.connect("mongodb+srv://Aritrakar19:RNWjg.YAgCDwCy2@cluster0.4byyy.mongodb.net/jobportal?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Clear existing jobs
    return Job.deleteMany({});
  })
  .then(() => {
    console.log('Cleared existing jobs');
    // Insert new jobs
    return Job.insertMany(jobs);
  })
  .then((savedJobs) => {
    console.log(`${savedJobs.length} jobs added successfully`);
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  }); 