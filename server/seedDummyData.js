const mongoose = require('mongoose');
const Job = require('./models/Job');

const dummyJobs = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp",
    location: "New York",
    type: "Full Time",
    description: "We are looking for a Senior Software Engineer to join our team. The ideal candidate will have experience in full-stack development and a passion for creating high-quality software solutions.",
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
    description: "Join our frontend team to build amazing user experiences. We're looking for someone who is passionate about creating beautiful and functional web applications.",
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
    description: "Looking for a Backend Developer to work on our cloud infrastructure. The role involves designing and implementing scalable backend services.",
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
    description: "We need a creative UI/UX Designer for our new project. The role involves creating user-centered designs and prototypes.",
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
  }
];

const seedDummyData = async () => {
  try {
    await mongoose.connect("mongodb+srv://Aritrakar19:RNWjg.YAgCDwCy2@cluster0.4byyy.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing data
    await Job.deleteMany({});
    console.log('Cleared existing jobs');

    // Insert dummy data
    await Job.insertMany(dummyJobs);
    console.log('Added dummy jobs successfully');

    process.exit();
  } catch (error) {
    console.error('Error seeding dummy data:', error);
    process.exit(1);
  }
};

seedDummyData(); 