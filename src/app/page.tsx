'use client';  // Ensure this is a client component

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mt-5">
        <img src="/images.png" alt="Your Logo" width={200} />
      </div>

      <h1 className="text-primary text-center mt-3">Welcome to My Portfolio</h1>
      <p className="lead text-center">
        Hello! I'm a passionate developer. Check out my projects and get to know me better.
      </p>

      {/* Portfolio Section */}
      <div className="text-center">
        <h2>Portfolio</h2>
        <p>Explore my recent projects below:</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/51cHrm5iRZL._SY466_.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">A brief description of the project.</p>
                <a href="/portfolio" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://i.pinimg.com/474x/13/96/31/139631d19f44c54839269a42d2d2ea69.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">A brief description of the project.</p>
                <a href="/portfolio" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://ecdn.teacherspayteachers.com/thumbitem/Kindergarten-Portfolio-and-Memory-Book-1596500764/original-135787-1.jpg" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">A brief description of the project.</p>
                <a href="/portfolio" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
