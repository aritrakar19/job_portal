import React from 'react';

const Categories = () => {
  const categories = [
    { name: 'Design & Creative', count: 653 },
    { name: 'Design & Development', count: 658 },
    { name: 'Sales & Marketing', count: 658 },
    { name: 'Mobile Application', count: 658 },
    { name: 'Construction', count: 658 },
    { name: 'Information Technology', count: 658 },
    { name: 'Real Estate', count: 658 },
    { name: 'Content Writer', count: 658 }
  ];

  return (
    <section className="categories-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Browse Top Categories</h2>
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">{category.name}</h5>
                  <p className="card-text">({category.count})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-primary">Browse All Sectors</button>
        </div>
      </div>
    </section>
  );
};

export default Categories; 