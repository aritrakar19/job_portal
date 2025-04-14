const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Get all jobs with optional filters
router.get('/', async (req, res) => {
  try {
    const { type, location } = req.query;
    let query = {};

    if (type) {
      query.type = { $regex: type, $options: 'i' };
    }
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }

    const jobs = await Job.find(query);
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Error fetching jobs' });
  }
});

// Get a single job by ID
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({ message: 'Error fetching job' });
  }
});

// Create a new job
router.post('/', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(400).json({ message: 'Error creating job' });
  }
});

// Update a job
router.put('/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(400).json({ message: 'Error updating job' });
  }
});

// Delete a job
router.delete('/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ message: 'Error deleting job' });
  }
});

// Test endpoint to check all jobs
router.get('/test', async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.json({
      message: 'Database connection successful',
      totalJobs: jobs.length,
      jobs: jobs
    });
  } catch (error) {
    console.error('Error testing database:', error);
    res.status(500).json({ message: 'Error testing database' });
  }
});

// Add a new job manually
router.post('/add', async (req, res) => {
  try {
    const newJob = new Job({
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      type: req.body.type,
      description: req.body.description,
      requirements: req.body.requirements,
      salary: {
        min: req.body.salaryMin,
        max: req.body.salaryMax,
        currency: req.body.currency
      },
      deadline: new Date(req.body.deadline)
    });

    const savedJob = await newJob.save();
    res.status(201).json({
      message: 'Job added successfully',
      job: savedJob
    });
  } catch (error) {
    console.error('Error adding job:', error);
    res.status(400).json({ message: 'Error adding job', error: error.message });
  }
});

module.exports = router; 