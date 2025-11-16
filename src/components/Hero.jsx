// src/components/Hero.jsx
import { HashLink as Link } from 'react-router-hash-link';

export default function Hero() {
  return (
    <section
      id="hero"
      className="vh-100 d-flex align-items-center text-white position-relative overflow-hidden"
      style={{
        backgroundImage: `url('/bg-image-hero.jpg')`, // Image in public/ folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for text readability */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      ></div>

      <div className="container position-relative text-center">
        <span className="display-4 fw-bold h1 ">Abhishek Dangi</span>
        <p className="lead">.NET Core Software Developer – 2+ Years Experience</p>
        <p className="mt-3 col-lg-8 mx-auto">
          To secure a challenging position in a reputable organization to expand my learnings,
          knowledge, and skills while making a significant contribution to the company.
        </p>
        <Link
          to="#contact"
          smooth
          className="btn btn-light btn-lg mt-3"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

