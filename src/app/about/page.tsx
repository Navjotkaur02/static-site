'use client';  // Ensure this is a client component

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <div>
      <h1 className="text-primary text-center mt-5">About Me</h1>
      <p className="lead text-center">
        I am a passionate web developer with a focus on building user-friendly and visually appealing websites. I love learning new technologies and tackling challenging problems.
      </p>

      <h2 className="text-center">Skills</h2>
      <ul className="list-group">
        <li className="list-group-item">JavaScript (React, Next.js, Node.js)</li>
        <li className="list-group-item">HTML, CSS, Bootstrap</li>
        <li className="list-group-item">API Development</li>
        <li className="list-group-item">Version Control (Git)</li>
      </ul>

      <div className="text-center mt-4">
        <a href="/contact" className="btn btn-primary">Get in Touch</a>
      </div>
    </div>
  );
}
