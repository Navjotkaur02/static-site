'use client';  // Ensure this is a client component

import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" href="/">My Portfolio</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Add the <html> and <body> tags here */}
      <html lang="en">
        <body>
          <Navbar />
          <div className="container mt-4">
            {children}
          </div>
        </body>
      </html>
    </>
  );
}
