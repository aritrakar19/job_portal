const mongoose = require('mongoose');
const Job = require('./models/Job');

const sampleJobs = [
  {
    title: "Full Stack Developer",
    company: "Tech Solutions Inc",
    location: "New York",
    type: "Full-time",
    description: "We are looking for an experienced Full Stack Developer to join our team. The ideal candidate will have experience with React, Node.js, and MongoDB.",
    requirements: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
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
    description: "Join our frontend team to build beautiful and responsive web applications using modern technologies.",
    requirements: ["JavaScript", "React", "HTML", "CSS", "TypeScript"],
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
    description: "Looking for a Backend Developer to help us build scalable and efficient server-side applications.",
    requirements: ["Node.js", "Python", "SQL", "REST APIs", "Docker"],
    salary: {
      min: 70000,
      max: 100000,
      currency: "GBP"
    },
    applyLink: "https://example.com/apply/3"
  },
  {
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Berlin",
    type: "Full-time",
    description: "We need a creative UI/UX Designer to help us create beautiful and intuitive user interfaces.",
    requirements: ["Figma", "Adobe XD", "UI Design", "UX Research", "Prototyping"],
    salary: {
      min: 60000,
      max: 90000,
      currency: "EUR"
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
    // Insert sample jobs
    return Job.insertMany(sampleJobs);
  })
  .then(() => {
    console.log('Sample jobs added successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  }); 