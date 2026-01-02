import { HashLink as Link } from 'react-router-hash-link';

export default function Hero() {
  return (
    <section id="hero" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden pt-5 pt-lg-0">
      {/* Modern Gradient Background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)', // Orange-tinted gradient
          zIndex: -1
        }}
      ></div>

      {/* Decorative Blur Blobs - Responsive Sizes */}
      <div
        className="position-absolute rounded-circle bg-primary opacity-10"
        style={{
          width: 'clamp(200px, 40vw, 400px)',
          height: 'clamp(200px, 40vw, 400px)',
          top: '-10%',
          right: '-10%',
          filter: 'blur(60px)'
        }}
      ></div>
      <div
        className="position-absolute rounded-circle bg-warning opacity-10"
        style={{
          width: 'clamp(150px, 30vw, 300px)',
          height: 'clamp(150px, 30vw, 300px)',
          bottom: '0',
          left: '-5%',
          filter: 'blur(40px)'
        }}
      ></div>

      <div className="container text-center position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <h1 className="display-3 fw-bold mb-4 tracking-tight text-dark">
              Hi, I'm <span className="text-prodigy">Abhishek Dangi</span>
            </h1>
            <p className="lead text-secondary mb-5 fs-4 lh-base">
              .NET Core Software Developer creating robust, scalable, and modern web solutions.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link to="#contact" smooth className="btn btn-primary-custom btn-lg w-100 w-sm-auto">
                Get in Touch
              </Link>
              <Link to="#projects" smooth className="btn btn-outline-custom btn-lg w-100 w-sm-auto">
                View Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
