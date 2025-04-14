import React, { useState } from 'react';
import axios from 'axios';

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    description: '',
    requirements: '',
    salaryMin: '',
    salaryMax: '',
    currency: 'USD',
    deadline: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/jobs/add', {
        ...formData,
        requirements: formData.requirements.split(',').map(req => req.trim())
      });
      alert('Job added successfully!');
      setFormData({
        title: '',
        company: '',
        location: '',
        type: '',
        description: '',
        requirements: '',
        salaryMin: '',
        salaryMax: '',
        currency: 'USD',
        deadline: ''
      });
    } catch (error) {
      console.error('Error adding job:', error);
      alert('Error adding job. Please try again.');
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Add New Job</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Job Type</label>
                  <select
                    className="form-select"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Job Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Internship">Internship</option>
                    <option value="Temporary">Temporary</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Requirements (comma separated)</label>
                  <textarea
                    className="form-control"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows="3"
                    required
                  />
                </div>

                <div className="row mb-3">
                  <div className="col-md-4">
                    <label className="form-label">Min Salary</label>
                    <input
                      type="number"
                      className="form-control"
                      name="salaryMin"
                      value={formData.salaryMin}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Max Salary</label>
                    <input
                      type="number"
                      className="form-control"
                      name="salaryMax"
                      value={formData.salaryMax}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Currency</label>
                    <select
                      className="form-select"
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      required
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="INR">INR</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Application Deadline</label>
                  <input
                    type="date"
                    className="form-control"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Add Job
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob; 